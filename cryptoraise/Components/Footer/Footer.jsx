import React from "react";
import {FaFacebookF} from 'react-icons/fa';
import {AiOutlineInstagram} from 'react-icons/ai';
import {BsWhatsapp} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="absolute bottom-0 w-[100%] bg-slate-400">
      {/* Left side */}
      <div className="flex gap-3 justify-between m-3 text-lg font-bold items-center">
        <div className=" flex gap-3">
          <div className=" flex gap-4 border-r-2 px-3 border-black">
            {/* <img className=" w-10 h-10 rounded-md bg-orange-400" /> */}
            <p>CryptoRaise</p>
          </div>
          <div>
            <p className="text-[1rem]">Copyright © 2023 www.etherHub.com</p>
          </div>
        </div>
        {/* Right side */}
        <div className="flex gap-3">
          <FaFacebookF className="hover:text-white cursor-pointer"/>
          <AiOutlineInstagram className="hover:text-white cursor-pointer"/>
          <BsWhatsapp className="hover:text-white cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
