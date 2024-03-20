"use client";
import React from "react";
import Cards from "./Cards/Cards";
import ImageBar from "./ImageBar/ImageBar";
import Faq from "./FAQ/Faq";

const MainBody = () => {
  const faqData = [
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      question: 'How to install React?',
      answer: 'You can install React using npm or yarn by running npm install react or yarn add react.',
    },
    {
      question: 'What is React-Native?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      question: 'How to install Next?',
      answer: 'You can install React using npm or yarn by running npm install react or yarn add react.',
    },
    // Add more FAQ items here as needed
  ];

  return (
    <div className="MainBody">
      <ImageBar />
      <Cards name="Recommended Projects" />
      <div className=" w-full h-96 mt-24 mb-4">
        <img src="./banner.jpg" className="w-full h-full object-c" alt="Banner" />
      </div>
      <Cards name="Featured Projects" />
      <div className=" px-10">
        <div className=" max-w-7xl mx-auto">
          <div className=" font-bold text-4xl text-first p-3 ">FAQ's</div>
          <Faq data={faqData} />
        </div>
      </div>
    </div>
  );
};

export default MainBody;
