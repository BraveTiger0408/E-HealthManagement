import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import logo from './logo.png'
import { generateString } from '../../../../Functions'

function Doctors() {

  const initPayment = (data) => {
    const options = {
      key: process.env.REACT_APP_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: "Dr. " + data.myData.name,
      description: "Appointment of " + data.myData.registration + " Booking by" + data.myData.patientEmail,
      image: logo,
      order_id: data.id,
      handler: async (response) => {
        console.log(response)
        try {
          const verifyUrl = process.env.REACT_APP_API + "/payments/verify";
          const verifiedResponse = await axios.post(verifyUrl, Object.assign(response, data.myData));
          console.log(verifiedResponse.data);
          if (verifiedResponse.status === 200) {
            const ChatEngineUser = await axios.post('https://api.chatengine.io/users/', {
              "username": data.myData.patientEmail,
              "secret": generateString(10),
              "email": data.myData.patientEmail,
              // "first_name": "Bob",
              // "last_name": "Baker",
            }, {
              headers: {
                'PRIVATE-KEY': '1fc8cfb3-8c91-49e7-8e5b-032e0d88e55b'
              }
            });
            console.log(ChatEngineUser)
          }
          window.location.reload(false);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3c58f7",
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handlePayment = async (event) => {
    try {
      event.preventDefault();
      const orderUrl = process.env.REACT_APP_API + "/payments/orders";
      const { data } = await axios.post(orderUrl, { amount: event.target.fees.value });
      const myData = {
        name: event.target.name.value,
        registration: event.target.registration.value,
        patientEmail: localStorage.getItem("email"),
        date: event.target.date.value
      }
      console.log(Object.assign(data.data, { myData: myData }));
      initPayment(Object.assign(data.data, { myData: myData }));
    } catch (error) {
      console.log(error);
    }
  };

  const [doctors, setDoctors] = useState();
  const [patientData, setPatientData] = useState();
  // const [isPaid, setPaid] = useState(0);

  useEffect(() => {
    axios.get(process.env.REACT_APP_API + "/patient/doctors").then(res => {
      setDoctors(res.data);
    })
    axios.post(process.env.REACT_APP_API + "/patient/session", { "email": localStorage.getItem("email"), "sessionKey": localStorage.getItem("sessionKey") }).then(res => {
      if (res.data.status === "authenticated") {
        setPatientData(res.data.data);
      }
    })
  }, [])


  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Doctors</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Degree</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Registration No</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Fees</div>
                </th>
                <th className="p-2 mr-4 flex justify-around whitespace-nowrap">
                  <div className="font-semibold text-center">Appoinment Date</div>
                  <div className="font-semibold text-center">Book Appoinment</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100">
              {doctors ?
                doctors.map(doctor => {
                  var today = new Date();
                  var dd = today.getDate();
                  var mm = today.getMonth() + 1;
                  var yyyy = today.getFullYear();
                  if (dd < 10) {
                    dd = '0' + dd;
                  }
                  if (mm < 10) {
                    mm = '0' + mm;
                  }
                  today = yyyy + '-' + mm + '-' + dd;
                  var isPaid = 0;
                  if (patientData && patientData.doctorsList)
                    patientData.doctorsList.map(d => {
                      if (d.reg === doctor.profile.registration)
                        isPaid = 1;
                      return 0;
                    })
                  return (
                    <tr key={doctor._id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          {/* <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                            <img className="rounded-full" src="" width="40" height="40" alt="" />
                          </div> */}
                          <div className="font-medium text-slate-800">Dr. {doctor.profile.name.FName + " " + doctor.profile.name.LName}</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{doctor.profile.degree}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium ">{doctor.profile.registration}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-left text-green-500">{doctor.profile.fees}/-</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        {isPaid ? <span className='flex justify-around'>
                          <input
                            name="date"
                            type="date"
                            disabled
                            className="block opacity-0 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                          <button onClick={(e) => {
                            localStorage.setItem("currentPage", "Messages");
                            window.location.reload(false);
                            e.preventDefault();
                          }} class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
                            <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                              <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                            </span>
                            <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Already Booked</span>
                          </button>
                        </span> : <form onSubmit={handlePayment} className='flex justify-around'>
                          <input
                            name="date"
                            type="date"
                            autoComplete="date"
                            required

                            min={today}
                            className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                          <input type='hidden' name="name" value={doctor.profile.name.FName + " " + doctor.profile.name.LName} />
                          <input type='hidden' name="registration" value={doctor.profile.registration} />
                          <input type='hidden' name="fees" value={doctor.profile.fees} />
                          <button type='submit' class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                            <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                            <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                            <span class="relative text-white">Book Now</span>
                          </button>
                        </form>}
                      </td>
                    </tr>
                  )
                }) : ""
              }
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}

export default Doctors;
