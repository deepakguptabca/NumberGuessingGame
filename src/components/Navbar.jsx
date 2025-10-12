import React, { useState } from "react";

const Navbar = () => {
  

  return (
    <div>
      <div className="navbar w-full mb-20 bg-white shadow-md flex items-center justify-between mt-2 p-2">
        {/* Logo */}
        <div className="flex justify-center items-center gap-6">
         <img className="w-20" src="/logo.png" alt="logo" />
            <p className="cursor-pointer font-bold text-3xl text-purple-500">
              AI PlayZone
            </p>
          
        </div>

        {/* Desktop Nav */}
       

       
      </div>

     
    </div>
  );
};

export default Navbar;