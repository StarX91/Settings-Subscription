import React from "react";
import { FaUser, FaRegCreditCard, FaShieldAlt, FaKey } from "react-icons/fa";

const Menu = () => {
  return (
    <div className="bg-neutral-800 text-white w-full lg:w-1/4 h-full p-4 lg:p-8">
      <div className="flex flex-col space-y-8 my-48">
        <button className="flex items-center space-x-2 p-4 bg-neutral-900 border-2 border-zinc-600 rounded-md font-semibold">
          <FaUser />
          <span>Profile</span>
        </button>
        <button className="flex items-center space-x-2 p-4 bg-neutral-900 border-2 border-zinc-600 rounded-md font-semibold">
          <FaRegCreditCard />
          <span>Subscriptions</span>
        </button>
        <button className="flex items-center space-x-2 p-4 bg-neutral-900 border-2 border-zinc-600 rounded-md font-semibold">
          <FaRegCreditCard />
          <span>Invoices</span>
        </button>
        <button className="flex items-center space-x-2 p-4 bg-neutral-900 border-2 border-zinc-600 rounded-md font-semibold">
          <FaShieldAlt />
          <span>Change Password</span>
        </button>
      </div>
    </div>
  );
};

export default Menu;
