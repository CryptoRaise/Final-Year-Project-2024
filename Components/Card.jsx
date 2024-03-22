"use client";
import React from "react";
import { Line } from "rc-progress";
import Image from "next/image";
import Time from "./icons/time";

const Card = ({ name }) => {
  var random = 100;
  return (
    <div className="rounded-2xl overflow-hidden bg-fourth hover:-translate-y-3 hover:shadow-2xl hover:shadow-black hover:transition-all duration-500 text-first">
      <div>
        <Image src={"/img0.jpg"} width={365} height={80} alt="Card image" />
      </div>
      <div className=" p-2">
        <div className=" mt-2">
          <h1 className=" font-bold my-2">{name}</h1>
          <p className=" font-light my-2">
            There is no one who loves pain itself, who seeks after it and wants
            to have it, simply because it is pain...
          </p>
          <Line percent={random} strokeWidth={1} trailWidth={2} />
        </div>
        <div className=" flex my-3">
          <Time />
          <p>2 days left</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
