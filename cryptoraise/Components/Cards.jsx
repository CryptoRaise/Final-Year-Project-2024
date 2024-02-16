"use client";
import React from "react";
import { Line } from "rc-progress";

const Cards = ({ name }) => {
  const random = 10
  return (
    <div className=" w-[15rem] rounded-xl shadow-black shadow-2xl flex flex-col m-3 bg-white h-fit ">
      <img
        className=" w-[100%] rounded-lg"
        alt="Campaign Image"
        src="https://picsum.photos/200/150"
      ></img>
      <h1 className=" m-1 font-bold text-lg font-sans p-2">{name}</h1>
      <p className=" m-1 font-serif p-2">
        This is the description of the card to be given
      </p>
        <span className="relative left-0">{random}</span>
        <div className=" p-2 flex flex-row">
          <Line percent={random} strokeWidth={1} trailWidth={2} />
        </div>
      <a
        href="#"
        className=" m-2 text-center w-[90%] bg-blue-500 rounded-md font-bold p-2 hover:bg-blue-600 text-white"
      >
        Contribute
      </a>
    </div>
  );
};

export default Cards;
