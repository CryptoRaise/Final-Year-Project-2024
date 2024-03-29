import React from "react";

const InitCamp = () => {
  return (
    <div className="container h-[full] w-[60%] m-auto border-2 rounded my-10 bg-white px-10">
      <h1 className="font-bold text-xl my-4 text-center text-second uppercase">Campaign Details</h1>
      {/* <div className=""> */}
      <div className="px-2">
        <div className="mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-slate-600">
            Campaign Name
          </label>
          <input
            // onChange={handleChange}
            // value={name}
            type="text"
            id="name"
            name="name"
            className="w-full bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="px-2">
        <div className="mb-4">
          <label htmlFor="text" className="leading-7 text-sm text-gray-600">
            Description
          </label>
          <input
            // onChange={handleChange}
            // value={name}
            type="text"
            id="name"
            name="name"
            className="w-full bg-white rounded border border-third focus:border-third focus:ring-2 focus:ring-indigo-200 text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="px-2">
        <div className="mb-4">
          <label htmlFor="amount" className="leading-7 text-sm text-gray-600">
            Amount to be raised
          </label>
          <input
            type="number"
            min={1}
            // onChange={handleChange}
            // value={phone}
            id="amount"
            name="number"
            className="w-full bg-white rounded border border-third focus:border-third focus:ring-2 focus:ring-indigo-200 text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="px-2">
        <div className="mb-4">
          <label
            htmlFor="image"
            className="leading-7 text-sm text-gray-600"
          >
            Select project's image
          </label>
          <input
            type="file"
            id="prj-img"
            name="prj-img"
            // onChange={handleChange}
            // value={pincode}
            className="w-full bg-white rounded border border-third focus:border-third focus:ring-2 focus:ring-indigo-200 text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="px-2">
        <div className="mb-4">
          <label htmlFor="category" className="leading-7 text-sm text-gray-600">
            Category
          </label>
          <input
            type="text"
            // value={state}
            // onChange={handleChange}
            id="category"
            name="category"
            className="w-full bg-white rounded border border-third focus:border-third focus:ring-2 focus:ring-indigo-200 text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="px-2">
        <div className="mb-4">
          <label htmlFor="country" className="leading-7 text-sm text-gray-600">
            Country of Origin
          </label>
          <input
            type="text"
            // onChange={handleChange}
            // value={city}
            id="country"
            name="country"
            className="w-full bg-white rounded border border-third focus:border-third focus:ring-2 focus:ring-indigo-200 text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="button text-center p-3 rounded w-[30%] translate-x-[120%] font-bold">Submit</div>
      </div>
    </div>
    // </div>
  );
};

export default InitCamp;
