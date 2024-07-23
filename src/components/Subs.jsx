import React from "react";

const Subs = () => {
  return (
    <div>
      {" "}
      <h2 className="text-center text-zinc-200 font-semibold mb-4 text-xl">
        Subscription Plans
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-neutral-700 border-2 border-zinc-500 ">
              <th className="p-2 border border-gray-700">Your Plan</th>
              <th className="p-2 border border-gray-700">Billing</th>
              <th className="p-2 border border-gray-700">Service</th>
              <th className="p-2 border border-gray-700">Status</th>
              <th className="p-2 border border-gray-700">Expires on</th>
              <th className="p-2 border border-gray-700">Buy</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-neutral-900  border-2 border-zinc-500">
              <td className="p-2 border border-gray-700">Picstork Trial</td>
              <td className="p-2 border border-gray-700">Trial</td>
              <td className="p-2 border border-gray-700">Picstork</td>
              <td className="p-2 border border-gray-700 text-green-500">
                Active
              </td>
              <td className="p-2 border border-gray-700">10/12/2024</td>
              <td className="p-2 border border-gray-700">Buy</td>
            </tr>
            <tr className="bg-neutral-900  border-2 border-zinc-500">
              <td className="p-2 border border-gray-700">Picstork Trial</td>
              <td className="p-2 border border-gray-700">Trial</td>
              <td className="p-2 border border-gray-700">Picstork</td>
              <td className="p-2 border border-gray-700 text-green-500">
                Active
              </td>
              <td className="p-2 border border-gray-700">10/12/2024</td>
              <td className="p-2 border border-gray-700">Buy</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Subs;
