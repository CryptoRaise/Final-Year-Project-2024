import React from "react";
import Image from "next/image";
import imgSource from "./Logo.png";
import { styles } from "../../styles.css";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-[100%] bg-slate-200 border-b-2">
      <div className="left flex justify-evenly">
        <div
          className="flex gap-5 justify-evenly font-bold text-[1rem]"
          style={{ marginLeft: "10px" }}
        >
          <div className="left-elements">
            <Image
              className=" h-8 w-9  rounded-md"
              src={imgSource}
            />
          </div>
          <div className="left-elements text-lg" style={styles}>About</div>
          <div className="left-elements text-lg" style={styles}>Organisations</div>
          <div className="left-elements text-lg" style={styles}>Funds</div>
        </div>
      </div>
      <div className="mid">
        <div className="bg-slate-100 flex rounded-md border-x-2 border-y-2 m-5 font-bold text-[1rem]" style={styles}>
          <input type="text" placeholder="Search.." className="search p-2"/>
          <IoSearchOutline className="h-10 w-10 px-2 py-3 font-bold "/>
        </div>
      </div>
      <div className="right" style={{ marginRight: "10px" }}>
        <button
          className="login border-x-2 border-y-2 border-green-700 rounded-md p-2 text-white"
          style={styles}
        >
          Login / SignUp
        </button>
      </div>
    </div>
  );
};

export default Header;
