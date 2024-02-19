import React from "react";
import Card from "./Card";
import Image from "next/image";

const MainBody = () => {
  return (
    <div>
      <div className="project-image flex gap-6 items-center justify-center w-[100%] h-[25rem]" style={{backgroundImage : "url(https://picsum.photos/900/300)", backgroundRepeat : "no-repeat", backgroundSize : "100% 100%", objectFit : "cover"}}>
        {/* To-do : Description  */}
        <div>
          <button className=" button rounded p-3 font-bold ">Start a Project</button>
        </div>
        <div>
          <button className=" button rounded p-3 font-bold">Contribute a Project</button>
        </div>
      </div>
      <div className=" flex flex-auto gap-3 cards-display items-center justify-center my-[12%]">
        <Card name={"Treatment of cancer"} />
        <Card name={"Life-style Fit Club"} />
        <Card name={"Renewable Energy"} />
      </div>
    </div>
  );
};

export default MainBody;


