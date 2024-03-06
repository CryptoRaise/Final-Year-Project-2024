import React from "react";
import data from "@/data.js";

const page = ({ params }) => {
  const filterData = data.filter((item) => item.id == params.id);
  return (
    <div>
      {filterData.map((value) => {
        return (
          <div className=" grid grid-cols-3">
            <div>
              <p>{value.title}</p>
              <p>{value.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default page;
