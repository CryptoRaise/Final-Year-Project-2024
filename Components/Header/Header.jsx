"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className="px-5 h-auto top-0 sticky opacity bg-first w-[100%] text-fourth py-4"
      style={{ zIndex: 1 }}
    >
      <div className="flex justify-between items-center hover:cursor-pointer">
      <div className=" flex items-center gap-6">
        <Link href="/">
          <div className="mid">
            <span className=" font-bold text-4xl ">CryptoRaise</span>
          </div>
        </Link>
        <Link href="/HIW">
          <div className="hover:text-black">Work Mechanism</div>
        </Link>
        <Link href="/Discover">
          <div className="hover:text-black">Discover</div>
        </Link>
        <div className="font-bold hover:text-black mt-[2px]">
          <FaSearch />
        </div>
        </div>
        <div className="right">
          <Link href="/InitCamp">
            <span className="text-fourth p-3 font-bold m-2 border-2 border-fourth hover:bg-slate-600 hover:text-white">
              Start Project
            </span>
          </Link>
          <Link href="/LogIn">
            <span className=" px-5 font-bold hover:text-black">
              Log In
            </span>
          </Link>
          <Link href="/SignUp">
            <span className="  font-bold hover:text-black">
              Sign Up
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
