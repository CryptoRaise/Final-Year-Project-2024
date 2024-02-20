import React from "react";
import Card from "./Card";

const MainBody = () => {
  return (
    <div>
      <div className="container">
        <div className="project-image flex gap-6 items-center justify-center w-[100%] h-[25rem]" style={{ backgroundImage: "url(https://picsum.photos/900/300)", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", objectFit: "cover" }}>
          {/* To-do : Description  */}
          <div>
            <button className=" rounded p-3 font-bold bg-blue-500 text-white hover:bg-blue-800 ">Start a Project</button>
          </div>
          <div>
            <button className=" rounded p-3 font-bold bg-blue-500 text-white hover:bg-blue-800 ">Contribute a Project</button>
          </div>
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


