import React from "react";
import Link from "next/link";

const LogIn = () => {
  return (
    <div className=" my-[6%]">
      <div className="container h-[50%] w-[35%] m-auto p-3 bg-white">
        <h1 className="font-bold text-3xl my-4 text-center text-slate-600">
          Login
        </h1>
        <div className="px-2">
          <div className="mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              // onChange={handleChange}
              // value={name}
              type="email"
              id="name"
              name="email"
              className="w-full border-b-4 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2">
          <div className="mb-4">
            <label htmlFor="text" className="leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              // onChange={handleChange}
              // value={name}
              type="password"
              id="name"
              name="password"
              className="w-full border-b-4 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="button text-center p-3 rounded w-[30%] translate-x-[120%] font-bold">
            Submit
          </div>
          <div className=" flex gap-3 justify-center m-5">
            <p className=" text-slate-500">Don't have an account ?</p>
            <Link href="/SignUp">
              <span className=" font-bold cursor-pointer text-cyan-500">
                Sign Up
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
