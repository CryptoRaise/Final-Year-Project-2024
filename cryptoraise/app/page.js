import React from "react";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import Cards from "@/Components/Cards";

const page = () => {
  return (
    <div>
      <Header />
        <div className=" flex flex-auto gap-3">
          <Cards/>
          <Cards/>
          <Cards/>
        </div>
      <Footer />
    </div>
  );
};
export default page;
