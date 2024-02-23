import Link from "next/link";
import React from "react";

const Modal = ({ purpose, closeModal }) => {
  const handleClick = (e) => {
    e.preventDefault();
    closeModal();
  };
  return (
    <div className=" fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center">
      <div className=" flex flex-col gap-5">
        <div className=" bg-white rounded-xl flex flex-col gap-5 text-slate-500 px-20 py-10 items-center mx-4">
          <h1 className=" text-xl font-extrabold">Enter OTP</h1>
          <p className=" text-xl font-bold ">Sent to your entered {purpose}</p>
          <form id="otp">
            <div className="w-[80%] mx-auto">
              <input
                type="text"
                required
                className="w-full px-4 py-3 text-black border-slate-500 border-2 rounded-md"
              ></input>
            </div>
            <div className="w-[6rem] mx-auto">
              <button
                className=" mt-4 w-full rounded-md bg-blue-400 p-2 text-white font-bold hover:bg-blue-700"
                onClick={handleClick}
              >
                Verify
              </button>
            </div>
            <div className="mt-2">
              Didn't recieve the OTP?{" "}
              <Link href="#" className="text-blue-600 text-sm">
                Try again
              </Link>{" "}
              in s seconds
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
