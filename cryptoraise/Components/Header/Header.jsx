import React from "react";
import Image from "next/image";
import Logo from "../../assets/CryptoRaiseLogo.png";
import { styles } from "../../styles.css";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-[100%] bg-white border-b-2 h-auto">
      <div className="left flex justify-evenly">
        <div
          className="flex gap-5 justify-evenly font-bold text-[1rem] mt-7"
          style={{ marginLeft: "5px" }}>
          <Link href="/About">
            <div
              className="left-elements text-md text-slate-600"
              style={styles}
            >
              About
            </div>
          </Link>
          <Link href="/HIW">
            <div
              className="left-elements text-md text-slate-600"
              style={styles}
            >
              How it Works
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
          <input type="text" placeholder="Search.." className="search p-1" />
          <IoSearchOutline className="h-10 w-10 px-2 py-3 font-bold cursor-pointer" />
        </div>
      </div>
      <Link href="/">
        <div className="mid relative left-[-150px]">
          <Image
            className=" h-[100px] w-[300px] object-cover"
            src={Logo}
            alt="Logo.png"
          />
        </div>
      </Link>
      <div className="right" style={{ marginRight: "10px" }}>
        <Link href="/InitCamp">
          <button
            className="button rounded p-3 font-bold m-2"
            style={styles}
          >
            Start Project
          </button>
        </Link>
        <Link href="/LogIn">
        <button
          className="button rounded p-3 font-bold m-2"
          style={styles}
        >
          Login / Signup
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
