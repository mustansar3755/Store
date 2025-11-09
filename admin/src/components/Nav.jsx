import React from "react";
import { assets } from "../assets/assets.js";

const Nav = () => {
  return (
    <div className=" flex items-center py-2 px-[4%] justify-between">
      <img className=" w-[max(10%,80px)]" src={assets.logo} alt="" />
      <button
        className=" px-5 py-2 sm:px-7 sm:py-2 rounded-full bg-red-500 text-white font-semibold cursor-pointer
       hover:bg-red-600 duration-500"
      >
        Logout
      </button>
    </div>
  );
};

export default Nav;
