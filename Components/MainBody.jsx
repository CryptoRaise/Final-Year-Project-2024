"use client";
import React from "react";
import Cards from "./Cards/Cards";
import ImageBar from "./ImageBar/ImageBar";
import Faq from "./FAQ";

const MainBody = () => {
  return (
    <div className="MainBody">
      <ImageBar />
      <Cards name="Recommended Projects" />
      <div className=" w-full h-96 mt-24 mb-4">
        <img src="./banner.jpg" className="w-full h-full object-c"/>
      </div>
      <Cards name="Featured Projects" />
      <div className="my-20 font-medium px-9">
        <Faq />
      </div>
    </div>
  );
};

export default MainBody;
