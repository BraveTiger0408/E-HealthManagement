import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.png'

function Doctors() {

  const [doctors, setDoctors] = useState();

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
        patientEmail: localStorage.getItem("email")
      }
			console.log(Object.assign(data.data, {myData: myData}));
			initPayment(Object.assign(data.data, {myData: myData}));
		} catch (error) {
			console.log(error);
		}
	};


  useEffect(() => {
    axios.get(process.env.REACT_APP_API + "/patient/doctors").then(res => {
      setDoctors(res.data);
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
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Book Appoinment</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100">
              {doctors ?
                doctors.map(doctor => {
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
                        <form onSubmit={handlePayment}>
                          <input type='hidden' name="name" value={doctor.profile.name.FName + " " + doctor.profile.name.LName} />
                          <input type='hidden' name="registration" value={doctor.profile.registration} />
                          <input type='hidden' name="fees" value={doctor.profile.fees} />
                          <button type='submit' class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                            <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                            <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                            <span class="relative text-white">Book Now</span>
                          </button>
                        </form>
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
