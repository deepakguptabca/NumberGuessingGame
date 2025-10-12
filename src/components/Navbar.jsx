import React, { useState } from "react";

const Navbar = () => {


  return (
    <div>
      <div className="navbar w-full mb-20 bg-white shadow-md flex items-center justify-between  p-2 bg-gradient-to-r from-white-100 via-purple-200 to-sky-100
">
        {/* Logo */}
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-center items-center gap-6">
            <img className="w-20" src="/logo.png" alt="logo" />
            <p className="cursor-pointer font-bold text-3xl text-purple-500">
              AI PlayZone
            </p>
          </div>
          <div>
            <p className="cursor-pointer font-bold text-3xl text-purple-500">
              Innovella
            </p>
          </div>
        </div>

        {/* Desktop Nav */}

      </div>


    </div>
  );
};

export default Navbar;