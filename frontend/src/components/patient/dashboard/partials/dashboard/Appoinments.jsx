import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import logo from './logo.png'

function Doctors() {

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
                  <div className="font-semibold text-left">Appoinment Date</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Message</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100">
              {doctors ?
                doctors.map(doctor => {
                  var isPaid = 0;
                  if (patientData && patientData.doctorsList)
                    patientData.doctorsList.map(d => {
                      if (d.reg === doctor.profile.registration)
                        isPaid = d.date;
                      return 0;
                    })
                  if (isPaid) return (
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
                        <button
                          className="block items-center justify-center rounded-md border-0 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >{isPaid.substring(0, 10)}</button>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <span className='flex text-left'>
                          <button onClick={(e) => {
                            localStorage.setItem("currentPage", "Messages");
                            window.location.reload(false);
                            e.preventDefault();
                          }} class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Message</span>
                            <span class="relative invisible">Message</span>
                          </button>
                        </span>
                      </td>
                    </tr>
                  ); else return "";
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
