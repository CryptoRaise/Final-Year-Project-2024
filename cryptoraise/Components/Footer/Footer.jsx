'use client'
import React from "react";
import {FaFacebookF} from 'react-icons/fa';
import {AiOutlineInstagram} from 'react-icons/ai';
import {BsWhatsapp} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="absolute bottom-0 w-[100%] bg-slate-200 border-t-grey border-t-2 text-slate-600">
      {/* Left side */}
      <div className="flex gap-3 justify-between m-3 text-lg font-bold items-center">
        <div className=" flex gap-3">
          <div className=" flex gap-4 border-r-2 px-3 border-black">
            <p>CryptoRaise</p>
          </div>
          <div>
            <p className="text-[1rem]">Copyright © 2023 www.etherHub.com</p>
          </div>
        </div>
        {/* Right side */}
        <div className="flex gap-10">
          <FaFacebookF className="hover:text-white cursor-pointer w-6 h-6"/>
          <AiOutlineInstagram className="hover:text-white cursor-pointer w-6 h-6"/>
          <BsWhatsapp className="hover:text-white cursor-pointer w-6 h-6"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
