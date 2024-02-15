import React from "react";
import Image from "next/image";
import imgSource from "./Logo.png";
import { styles } from "../../styles.css";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-[100%] bg-slate-200 border-b-2 h-[65px]">
      <div className="left flex justify-evenly">
        <div
          className="flex gap-5 justify-evenly font-bold text-[1rem]"
          style={{ marginLeft: "10px" }}
        >
          <div className="left-elements">
          {/* To-do: Logo Updation */}
            <Image
              className=" h-8 w-9  rounded-md"
              src={imgSource}
            />
          </div>
          <Link href="/About"><div className="left-elements text-lg text-slate-600" style={styles}>About</div></Link>
          <Link href="/HIW"><div className="left-elements text-lg text-slate-600" style={styles}>How it Works</div></Link>
          <Link href="/Discover"><div className="left-elements text-lg text-slate-600" style={styles}>Discover</div></Link>
        </div>
      </div>
      <div className="mid">
        <div className="bg-slate-100 flex rounded-md border-x-2 border-y-2 m-5 font-bold text-[1rem]" style={styles}>
          <input type="text" placeholder="Search.." className="search p-2"/>
          <IoSearchOutline className="h-10 w-10 px-2 py-3 font-bold cursor-pointer"/>
        </div>
      </div>
      <div className="right" style={{ marginRight: "10px" }}>
        <Link href="/InitCamp"><button
          className="login border-x-2 border-y-2 bg-purple-500 rounded-3xl mr-2 p-2.5 font-bold text-white hover:bg-purple-800 cursor-pointer"
          style={styles}>Get Contribution</button></Link>
          <button
          className="login border-x-2 border-y-2 bg-blue-500 rounded-md p-2.5 font-bold text-white hover:bg-blue-600 cursor-pointer"
          style={styles}>
          Login / Signup
        </button>
      </div>
    </div>
  );
};

export default Header;
