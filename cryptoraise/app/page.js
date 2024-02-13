import React from "react";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import Cards from "@/Components/Cards";

const page = () => {
  return (
    <>
      <Header />
        <div className=" flex flex-row gap-3">
          <Cards/>
          <Cards/>
        </div>
      <Footer />
    </>
  );
};
export default page;
