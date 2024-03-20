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
      <div className="flex justify-between items-center hover:cursor-pointer text-fourth">
        <div className="flex gap-5 items-center font-bold text-md">
          <Link href="/">
            <div className="mid">
              <h1 className=" font-[48px] text-5xl font-haviland">CryptoRaise</h1>
            </div>
          </Link>
          <Link href="/HIW">
            <div className="hover:text-third hover:underline transition-all duration-500">Work Mechanism</div>
          </Link>
          <Link href="/Discover">
            <div className="hover:text-third hover:underline transition-all duration-500">Discover</div>
          </Link>
          <div className="font-bold hover:text-third hover:underline transition-all duration-500 mt-[2px]">
            <FaSearch />
          </div>
        </div>

        <div className="right">
          <Link href="/InitCamp">
            <span className="text-fourth p-3 font-bold m-2 border-2 border-fourth hover:bg-fourth hover:text-first">
              Start Project
            </span>
          </Link>
          <Link href="/LogIn">
            <span className=" px-5 font-bold hover:text-third hover:underline transition-all duration-500">
              Log In
            </span>
          </Link>
          <Link href="/SignUp">
            <span className="  font-bold hover:text-third hover:underline transition-all duration-500">
              Sign Up
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
