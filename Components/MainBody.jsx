"use client";
import React from "react";
import Cards from "./Cards/Cards";
import ImageBar from "./ImageBar/ImageBar";
const MainBody = () => {
  return (
    <div className="MainBody">
      <ImageBar />
      <Cards />
    </div>
  );
};

export default MainBody;
