import React from "react";
import Card from "./Card";
import Link from "next/link";
const MainBody = () => {
  return (
    <div>
      <div className="project-image w-[100%] h-[25rem]" style={{ backgroundImage: "url(https://picsum.photos/900/300)", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", objectFit: "cover" }}>
        {/* To-do : Description  */}
        <div className="font-bold text-white relative top-[35%] left-[45%] text-3xl" style={{ filter: "brightness(100%)" }}>Check</div>
        <div className="btn-container flex gap-6 justify-center relative top-[45%]" style={{ filter: "brightness(100%)" }}>
          <div>
            <Link href = "/InitCamp"><button className="rounded p-3 font-bold bg-gradient-to-r from-cyan-500 to-blue-800  text-white hover:bg-blue-800" style={{ filter: "brightness(100%)" }}>Start a Project</button></Link>
          </div>
          <div>
            <Link href = "/RunningProjects"><button className="rounded p-3 font-bold bg-gradient-to-r from-blue-800 to-cyan-500  text-white hover:bg-blue-800 " style={{ filter: "brightness(100%)" }}>Contribute a Project</button></Link>
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


