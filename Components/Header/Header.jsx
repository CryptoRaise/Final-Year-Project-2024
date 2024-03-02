"use client";
import React from "react";
import Image from "next/image";
import Logo from "/public/CryptoRaiseLogo.png";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className="px-5 h-auto sticky top-0 border-b-2 opacity bg-white w-[100%] text-slate-600"
      style={{ zIndex: 1 }}
    >
      <div className="flex justify-between items-center hover:cursor-pointer hover:text-black">
        <div className="flex justify-evenly text-slate-600 ">
          <div className="flex gap-5 justify-evenly font-bold text-md">
            <Link href="/HIW">
              <div className="hover:text-black">Our Work Mechanism</div>
            </Link>
            <Link href="/Discover">
              <div className="hover:text-black">Discover</div>
            </Link>
            <div className="font-bold hover:text-black mt-[2px]">
              <FaSearch />
            </div>
          </div>
        </div>
        <Link href="/">
          <div className="mid">
            <Image
              className=" h-[75px] w-[240px] object-cover"
              src={Logo}
              alt="Logo"
            />
          </div>
        </Link>
        <div className="right">
          <Link href="/InitCamp">
            <span className="text-slate-600 p-3 font-bold m-2 border-2 border-slate-300 hover:bg-slate-600 hover:text-white">
              Start Project
            </span>
          </Link>
          <Link href="/LogIn">
            <span className="text-slate-600 px-5 font-bold hover:text-black">
              Log In
            </span>
          </Link>
          <Link href="/SignUp">
            <span className="text-slate-600 font-bold hover:text-black">
              Sign Up
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
