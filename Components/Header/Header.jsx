"use client";
import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [display, setDisplay] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("0x1b.....970");

  const { ethereum } = window;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleDisplay = () => {
    setDisplay(!display);
  };
  const connect = async () => {
    try {
      await ethereum.request({
        method: "wallet_requestPermissions",
        params: [
          {
            eth_accounts: {},
          },
        ],
      });
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setAddress(accounts[0]);
      setIsConnected(true);
      // const balance = await ethereum.request({
      //   method: "eth_getBalance",
      //   params: [accounts[0], "latest"],
      // });
      // setBalance(ethers.formatEther(balance));
    } catch (e) {
      if (error.code === 4001) {
        console.log("Permissions needed to continue.");
      } else {
        console.error(error);
      }
    }
  };
  const disconnect = () => {
    setIsConnected(false);
  };

  return (
    <header className="px-5 top-0 sticky bg-first text-fourth py-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-5">
          <Link href="/" className="font-bold text-md font-haviland text-5xl">
            CryptoRaise
          </Link>
          <div className="font-bold hover:text-third hover:underline transition-all duration-500 hidden md:flex">
            <Link href="/HIW">Work Mechanism</Link>
          </div>
          <div className="font-bold hover:text-third hover:underline transition-all duration-500 hidden md:flex">
            <Link href="/Discover">Discover</Link>
          </div>
          <div className="font-bold hover:text-third hover:underline transition-all duration-500">
            <FaSearch />
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-5 font-bold ">
          <div className=" border-2 border-fourth px-4 py-2 hover:bg-fourth hover:text-first"><Link href="/InitCamp">Start Project</Link></div>
          <div className="  hover:text-third hover:underline transition-all duration-500 "><Link href="/LogIn">Log In</Link></div>
          <div className="  hover:text-third hover:underline transition-all duration-500 "><Link href="/SignUp">Sign Up</Link></div>
        </div>

        <div className="md:hidden">
          {!isOpen ? (
            <FaBars className="cursor-pointer" onClick={toggleMenu} />
          ) : (
            <FaTimes className="cursor-pointer" onClick={toggleMenu} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-first absolute top-full left-0 right-0 py-3 px-5">
          <div className="flex flex-col space-y-3">
            <Link href="/HIW">Work Mechanism</Link>
            <Link href="/Discover">Discover</Link>
            <Link href="/InitCamp">Start Project</Link>
            <button className="bg-fourth text-first p-2 rounded-md hover:bg-gray-300">
              Connect wallet
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
