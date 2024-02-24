import React from "react";
import Card from "../Card";
const page = () => {
  return (
    <div className="cards">
      <div className=" grid grid-cols-3 gap-6 ml-[12%] py-[12%]">
        <Card name={"Treatment of cancer"} />
        <Card name={"Life-style Fit Club"} />
        <Card name={"Renewable Energy"} />
        <Card name={"Green Environment"} />
        <Card name={"Sustainable Development"} />
        <Card name={"Earthquake Relief"} />
      </div>
    </div>
  );
};

export default page;