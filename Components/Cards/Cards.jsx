import React from "react";
import Card from "../Card";
import CardList from "@/data.js";
import Image from "next/image";
const page = () => {
  
  return (
    <div className="cards my-[5%]">
      <h1 className="text-center font-extrabold text-2xl py-10">Featured Projects</h1>
         <div className="grid grid-cols-3 gap-16 mx-[10%]">
          <Card name={"Treatment of cancer"} />
          <Card name={"Life-style Fit Club"} />
          <Card name={"Renewable Energy"} />
          <Card name={"Green Environment"} />
          <Card name={"Sustainable Development"} />
          <Card name={"Earthquake Relief"} />
      </div>
      <div>View all</div>
    </div>
  );
};

export default page;
