import React from "react";
import Link from "next/link";

const LogIn = () => {
  return (
    <div className="py-[6%]">
      <div className="container h-[50%] w-[35%] m-auto p-3 bg-white">
        <h1 className="font-bold text-3xl my-4 text-center text-second uppercase">
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
              className="w-full border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
              className="w-full border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="button text-center p-3 rounded w-[30%] m-auto font-bold">
            Submit
          </div>
          <div className=" flex gap-3 justify-center m-5">
            <p className=" text-slate-500">Don't have an account ?</p>
            <Link href="/SignUp">
              <span className=" font-bold cursor-pointer text-first">
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
