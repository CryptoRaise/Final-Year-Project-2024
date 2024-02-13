import React from "react";

const Footer = () => {
  return (
    <div className="absolute bottom-0 w-[100%]">
      {/* Left side */}
      <div className="flex gap-3 justify-between m-3 text-lg font-bold items-baseline">
        <div className=" flex gap-3">
          <div className=" flex gap-4 border-r-2 px-3 border-black">
            <img className=" w-10 h-10 rounded-md bg-orange-400" />
            <p>CryptoRaise</p>
          </div> 
          <div>
            <p className=" text-green-500">Copyright © 2023 www.etherHub.com</p>
          </div>
        </div>
        {/* Right side */}
        <div className=" flex gap-3">
          <img className=" w-10 h-10 rounded-md bg-orange-400" />
          <img className=" w-10 h-10 rounded-md bg-orange-400" />
          <img className=" w-10 h-10 rounded-md bg-orange-400" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
