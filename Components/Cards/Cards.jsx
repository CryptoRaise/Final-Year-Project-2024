import React from "react";
import Card from "../Card";
const page = () => {
  return (
    <div className="cards my-[5%]">
      <h1 className="text-center font-extrabold text-2xl p-5">Featured Projects</h1>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 gap-10 justify-center">
          <Card name={"Treatment of cancer"} />
          <Card name={"Life-style Fit Club"} />
          <Card name={"Renewable Energy"} />
          <Card name={"Green Environment"} />
          <Card name={"Sustainable Development"} />
          <Card name={"Earthquake Relief"} />
        </div>
      </div>
    </div>
  );
};

export default page;
