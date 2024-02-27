"use client";
import React, { useState } from "react";
import Link from "next/link";
import Modal from "@/Components/Modal";

const Signup = () => {
  const [showModal, setshowModal] = useState(false);
  const [modalName, setModalName] = useState();
  const closeModal = () => {
    setModalName();
    setshowModal(false);
  };
  const handleEmailClick = (e) => {
    setModalName("email address");
    setshowModal(true);
  };
  const handleContactClick = (e) => {
    setModalName("contact number");
    setshowModal(true);
  };
  return (
    <div className=" my-[5%]">
      <div className="container h-[full] w-[50%] m-auto p-3 bg-white">
        <h1 className="font-bold text-2xl text-slate-600 my-4 text-center">
          Signup
        </h1>
        <div className="px-2">
          <div className="mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              // onChange={handleChange}
              // value={name}
              type="text"
              placeholder="XYZ"
              id="name"
              name="name"
              className="w-full border-b-2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="mb-4 px-2">
          <label htmlFor="text" className="text-sm text-gray-600">
            Email
          </label>
          <div className=" flex flex-row gap-3">
            <input
              // onChange={handleChange}
              // value={name}
              placeholder="xyz@abc.com"
              type="email"
              id="email"
              name="email"
              className=" w-[90%] border-b-2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 transition-colors duration-200 ease-in-out"
            />
            <div>
              <button
                className="cursor-pointer p-2 rounded bg-blue-400 text-white font-bold hover:bg-blue-700"
                onClick={handleEmailClick}
              >
                Verify
              </button>
              {showModal && (
                <Modal purpose={modalName} closeModal={closeModal} />
              )}
            </div>
          </div>
        </div>
        <div className="px-2">
          <div className="mb-4">
            <label
              htmlFor="contact"
              className="leading-7 text-sm text-gray-600"
            >
              Contact
            </label>
            <div className=" flex flex-row gap-3">
              <input
                // onChange={handleChange}
                // value={name}
                placeholder="1234567890"
                type="text"
                id="contact"
                name="contact"
                className=" w-[90%] border-b-2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 transition-colors duration-200 ease-in-out"
              />
              <div>
                <button
                  className="cursor-pointer p-2 rounded bg-blue-400 text-white font-bold hover:bg-blue-700 "
                  onClick={handleContactClick}
                >
                  Verify
                </button>
                {showModal && (
                  <Modal purpose={modalName} closeModal={closeModal} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="px-2">
          <div className="mb-4">
            <label
              htmlFor="country"
              className="leading-7 text-sm text-gray-600"
            >
              Country
            </label>
            <input
              type="text"
              // onChange={handleChange}
              // value={city}
              id="country"
              name="country"
              placeholder="Bharat"
              className="w-full border-b-2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="button text-center p-3 rounded w-[25%] m-auto font-bold">
            Submit
          </div>
        </div>
        <div className=" flex gap-3 justify-center m-5">
          <p className=" text-slate-500">Already have an account ?</p>
          <Link href="/LogIn">
            <span className=" font-bold cursor-pointer text-cyan-500">
              Log In
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
