import React from 'react';

function BasicHealthReport() {
  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Basic Health Reports</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Report Name</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Date</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Result</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Referance Range</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Status</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">Uric Acid</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">17/03/2023</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">5.3 mg/dL</div>
                </td>
                <td className="p-2">
                  <div className="text-center">3.5-7.5 mg/dL</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">Normal</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">Cholestrol</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">17/03/2023</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">240 mg/dL</div>
                </td>
                <td className="p-2">
                  <div className="text-center">200 mg/dL</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-red-500">Abnormal</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">Glucose Fasting</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">17/03/2023</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">72 mg/dL</div>
                </td>
                <td className="p-2">
                  <div className="text-center">60-110 mg/dL</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">Normal</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">Triglycerides</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">17/03/2023</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">5.3 mg/dL</div>
                </td>
                <td className="p-2">
                  <div className="text-center">3.5-7.5 mg/dL</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">Normal</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">Albuni</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">17/03/2023</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">5.3 mg/dL</div>
                </td>
                <td className="p-2">
                  <div className="text-center">3.5-7.5 mg/dL</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">Normal</div>
                </td>
              </tr>
              
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default BasicHealthReport;
