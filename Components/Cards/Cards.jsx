import React from "react";
import Card from "../Card";
const page = () => {
  return (
    <div className="cards py-[10%]  mx-[10%]">
      <h1 className="text-center font-extrabold text-2xl py-10">
        Featured Projects
      </h1>
      <div className="grid grid-cols-3 gap-16">
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
