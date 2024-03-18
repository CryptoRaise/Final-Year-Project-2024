import React from "react";
import Card from "../Card";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel";
const page = ({ name }) => {
  return (
    <div className="cards pt-[5%]  mx-[10%]">
      <h1 className="text-center font-bold text-2xl pb-6 text-slate-600">
        {name}
      </h1>
      <hr className="h-0.5 bg-slate-600" />
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={true}
        interval={2500}
        showThumbs={false}
        stopOnHover = {true}
      >
        <div className="grid grid-cols-3 gap-16 my-10 mx-10">
          <Card name={"Treatment of cancer"} />
          <Card name={"Life-style Fit Club"} />
          <Card name={"Renewable Energy"} />
        </div>
        <div className="grid grid-cols-3 gap-16 mt-10 mx-10">
          <Card name={"Health of Tigers"} />
          <Card name={"Life-Club"} />
          <Card name={"Sustainable Energy"} />
        </div>
        <div className="grid grid-cols-3 gap-16 mt-10 mx-10">
          <Card name={"Treatment of cancer"} />
          <Card name={"Life-style Fit Club"} />
          <Card name={"Renewable Energy"} />
        </div>
      </Carousel>

    </div>
  );
};

export default page;
