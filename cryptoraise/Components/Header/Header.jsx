import React from "react";
import Image from "next/image";
import imgSource from "./Logo.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-[100%]">
      <div className=" flex gap-10 justify-between items-baseline">
        <ul className=" flex gap-9 justify-evenly m-5 font-bold text-[1rem]">
          <li>
            <Image className=" bg-red-400 h-8 w-9  rounded-md"  src={imgSource}/>
          </li>
          <li>About</li>
          <li>Organisations</li>
          <li>Funds</li>
        </ul>
        <ul className=" flex gap-9 justify-evenly m-5 font-bold text-[1rem]">
          <li>
            <div className="flex m-0 rounded-md border-x-2 border-y-2">
              <input type="text" placeholder="Search.." />
              <img
                className="h-9 w-8 px-2 py-3 font-bold text-[1rem]"
                src="data:image/png;base64,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"
              />
            </div>
          </li>
          <li>
            <button className=" border-x-2 border-y-2 border-green-700 rounded-md p-2 text-green-400">
              Login
            </button>
          </li>
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Header;
