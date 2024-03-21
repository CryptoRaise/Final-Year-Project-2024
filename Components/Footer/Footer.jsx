"use client";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className=" border-t-2 border-second text-fourth bg-first">
      <div className="grid sm:grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto mt-10">
        <div>
          <h1 className=" font-bold text-xl uppercase">About</h1>
          <div>
            <p>About us</p>
            <p>Our charter</p>
            <p>Stats</p>
            <p>Press</p>
            <p>Jobs</p>
          </div>
        </div>
        <div>
          <h1 className=" font-bold text-xl uppercase">Support</h1>
          <div>
            <p>Help Center</p>
            <p>Our Rules</p>
            <p>Creator Resources</p>
            <p>Forward Funds</p>
            <p>Brand assets</p>
          </div>
        </div>
        <div>
          <h1 className=" font-bold text-xl uppercase">
            More from CryptoRaise
          </h1>
          <div>
            <p>Newsletters</p>
            <p>Kickstarter Project Updates</p>
            <p>The Creative Independent</p>
            <p>Mobile apps</p>
            <p>Research</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between p-10">
        <div></div>
        <div className="text-[1rem] text-center font-bold text-xl">
          Copyright © 2024 www.cryptoraise.com
        </div>
        <div className="flex gap-10">
          <FaFacebookF className="hover:text-black cursor-pointer w-6 h-6" />
          <AiOutlineInstagram className="hover:text-black cursor-pointer w-6 h-6" />
          <BsWhatsapp className="hover:text-black cursor-pointer w-6 h-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
