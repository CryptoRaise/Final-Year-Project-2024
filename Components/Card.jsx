"use client";
import React from "react";
import { Line } from "rc-progress";

const Card = ({ name }) => {
  var random = 100;
  return (
    <div className=" w-[100%] rounded-2xl shadow-black shadow-2xl flex flex-col bg-white">
      <img
        className=" w-[100%] h-[40%] rounded-t-2xl"
        alt="Campaign Image"
        src="https://picsum.photos/200/150"
      />
      <h1 className=" m-1 font-bold text-lg font-sans p-2">{name}</h1>
      <p className=" m-1 font-serif p-2">
        This is the description of the card to be given
      </p>
      <span className="font-bold text-[0.75rem] self-end mr-2">{random}%</span>
      <span className="p-2 pt-0 flex">
        <Line percent={random} strokeWidth={1} trailWidth={2} />
      </span>
    </div>
  );
};

export default Card;
