import React from "react";

const Credits = () => {
  return (
    <div>
      <h2 className="text-center text-zinc-200 font-semibold my-28  mb-4 text-lg">
        Credits
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-neutral-700 border-2 border-zinc-500 ">
              <th className="p-2 border border-gray-700 ">Service</th>
              <th className="p-2 border border-gray-700  ">Analytics</th>
              <th className="p-2 border border-gray-700 ">Processing</th>
              <th className="p-2 border border-gray-700  ">Storage</th>
              <th className="p-2 border border-gray-700 border-gray-700">
                Total Drones
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-neutral-900  border-2 border-zinc-500">
              <td className="p-2 border border-gray-700 ">Picstork</td>
              <td className="p-2 border border-gray-700 ">0.00/1.00</td>
              <td className="p-2 border border-gray-700 ">N/A</td>
              <td className="p-2 border border-gray-700 ">3.69/10.00</td>
              <td className="p-2 border border-gray-700 ">N/A</td>
            </tr>
            <tr className="bg-neutral-900  border-2 border-zinc-500">
              <td className="p-2 border border-gray-700 ">Picstork</td>
              <td className="p-2 border border-gray-700 ">0.00/1.00</td>
              <td className="p-2 border border-gray-700 ">N/A</td>
              <td className="p-2 border border-gray-700 ">3.69/10.00</td>
              <td className="p-2 border border-gray-700 ">N/A</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Credits;
