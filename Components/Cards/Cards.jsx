import React from "react";
// import Card from "../Card";
import CardList from "@/data.js";
import Image from "next/image";
const page = () => {
  
  return (
    <div className="cards my-[5%]">
      <h1 className="text-center font-extrabold text-2xl py-10">Featured Projects</h1>
      {/* <div className="flex items-center justify-center"> */}
         <div className="grid grid-cols-3 gap-10">
          {/*<Card name={"Treatment of cancer"} />
          <Card name={"Life-style Fit Club"} />
          <Card name={"Renewable Energy"} />
          <Card name={"Green Environment"} />
          <Card name={"Sustainable Development"} />
          <Card name={"Earthquake Relief"} />
        </div> */}


        { CardList.map(card => (
          <div className=' border-2 border-gray-500 rounded-lg p-5 m-4'>
            {/* <Image src={card.img} width={900} height={200} className=' rounded-xl'/> */}
            <h3 className=' font-bold text-2xl'>{card.title}</h3>
            <p className=' font-light text-sm'>{card.text}</p>
          </div>
        ))
        }

      </div>
      <div>View all</div>
    </div>
  );
};

export default page;
