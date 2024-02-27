"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../assets/CryptoRaiseLogo.png";
import { styles } from "../../styles.css";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-auto sticky top-0 opacity bg-white" style={{ zIndex: 100 }}>
      <div className="flex justify-between items-center w-[100%] border-b-2" style={{ styles }}>
        <div className="left flex justify-evenly">
          <div
            className="flex gap-5 justify-evenly font-bold text-[1rem] mt-7"
            style={{ marginLeft: "5px" }}
          >
            <Link href="/HIW">
              <div
                className="left-elements text-md text-slate-600"
                style={styles}
              >
                What We Do
              </div>
            </Link>
            <Link href="/Discover">
              <div
                className="left-elements text-md text-slate-600"
                style={styles}
              >
                Discover
              </div>
            </Link>
          </div>
          <div
            className="bg-blue-100 flex rounded-md border-x-2 border-y-2 m-5 font-bold text-[1rem] "
            style={styles}
          >
          {/* To-do: borders of search icon to be  removed*/}
            <svg
              className="bg-white border-white border-2 h-10 w-10 px-2 py-3 font-bold cursor-pointer"
              viewBox="0 0 1024 1024"
            >
              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
            </svg>
          </div>
        </div>
        <Link href="/">
          <div className="mid">
            <Image
              className=" h-[75px] w-[240px] object-cover"
              src={Logo}
              alt="Logo.png"
            />
          </div>
        </Link>
        <div className="right" style={{ marginRight: "10px" }}>
          <Link href="/InitCamp">
            <span className="text-slate-600 p-3 font-bold m-2 border-2 border-slate-300 hover:bg-slate-600 hover:text-white">
              Start Project
            </span>
          </Link>
          <Link href="/LogIn">
            <span className="text-slate-600 p-5 font-bold">
              Log In
            </span>
          </Link>
          <Link href="/SignUp">
            <span className="text-slate-600 font-bold">
              Sign Up
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
