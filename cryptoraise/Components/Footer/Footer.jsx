"use client";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import Logo from "../../assets/CryptoRaiseLogo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="relative bottom-0 w-[100%] bg-white border-t-grey border-t-2 text-slate-600 p-3">
        {/* Left side */}
        <div className="flex gap-3 justify-between mx-3 text-lg font-bold items-center">
          <Link href="/">
            <div>
              <Image
                className="h-[45px] w-[200px] object-cover"
                src={Logo}
                alt="Logo.png"
              />
            </div>
          </Link>
          <div className="text-[1rem]">Copyright © 2023 www.etherHub.com</div>
          <div className="flex gap-10">
            <FaFacebookF className="hover:text-black cursor-pointer w-6 h-6" />
            <AiOutlineInstagram className="hover:text-black cursor-pointer w-6 h-6" />
            <BsWhatsapp className="hover:text-black cursor-pointer w-6 h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
