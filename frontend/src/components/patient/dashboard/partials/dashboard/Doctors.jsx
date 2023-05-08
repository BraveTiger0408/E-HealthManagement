import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Doctors() {

  const [doctors, setDoctors] = useState();



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
                  <div className="font-semibold text-center">Fees</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100">
              {doctors?
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
                        <div className="text-lg text-center text-green-500">{doctor.profile.fees}</div>
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
