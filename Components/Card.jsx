"use client";
import React from "react";
import { Line } from "rc-progress";
import Link from "next/link";

const Card = ({ name }) => {
  var random = 100;
  return (
    <div className=" w-[18rem] rounded-xl shadow-black shadow-2xl flex flex-col bg-white h-fit">
      <img
        className=" w-[100%] rounded-lg"
        alt="Campaign Image"
        src="https://picsum.photos/200/150"
      ></img>
      <h1 className=" m-1 font-bold text-lg font-sans p-2">{name}</h1>
      <p className=" m-1 font-serif p-2">
        This is the description of the card to be given
      </p>
      <span className="font-bold text-[0.75rem] self-end mr-2">{random}%</span>
      <span className="p-2 pt-0 flex">
        <Line percent={random} strokeWidth={1} trailWidth={2} />
      </span>
      <Link
        href="#"
        className=" m-2 text-center w-[90%]  rounded-md font-bold p-2  button"
      >
        Contribute
      </Link>
    </div>
  );
};

export default Card;
