import React from "react";
import Card from "./Card";

const MainBody = () => {
  return (
    <div>
      <div className="project-image w-[100%] h-[21.25rem] bg-black">Hello</div>
      <div className=" flex flex-auto gap-3 cards-display items-center justify-center my-[12%]">
        <Card name={"Treatment of cancer"} />
        <Card name={"Life-style Fit Club"} />
        <Card name={"Renewable Energy"} />
      </div>
    </div>
  );
};

export default MainBody;
