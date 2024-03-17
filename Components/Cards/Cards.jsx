import React from "react";
import Card from "../Card";
const page = ({name}) => {
  return (
    <div className="cards pt-[2%]  mx-[10%]">
      <h1 className="text-center font-bold text-2xl pb-6 text-slate-600">
        {name}
      </h1>
      <hr className="h-0.5 bg-slate-600"/>
      <div className="grid grid-cols-3 gap-16 mt-10">
        <Card name={"Treatment of cancer"} />
        <Card name={"Life-style Fit Club"} />
        <Card name={"Renewable Energy"} />
      </div>
    </div>
  );
};

export default page;
