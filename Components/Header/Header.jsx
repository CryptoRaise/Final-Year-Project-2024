"use client";
import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import Link from "next/link";
import { BrowserProvider } from "ethers";
const networks = {
  sepolia: {
    chainId: `0x${Number(11155111).toString(16)}`,
    chainName: "Sepolia Test Network",
    rpcUrls: ["https://eth-sepolia.g.alchemy.com/v2/"],
    nativeCurrency: {
      name: "SepoliaETH",
      symbol: "SepETH",
      decimals: 18,
    },
    blockExplorerUrls: ["https://sepolia.etherscan.io/"],
  },
  polygon: {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: "Polygon Testnet",
    rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  },
  polygonMainnet: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: "Polygon Mainnet",
    rpcUrls: ["https://polygon-rpc.com/"],
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    blockExplorerUrls: ["https://polygonscan.com/"],
  },
};

const { ethereum } = window;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [display, setDisplay] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDisplay = () => {
    setDisplay(!display);
  };

  const connect = async () => {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
      const provider = new BrowserProvider(ethereum);
      if (provider.network !== "sepolia") {
        await ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              ...networks["sepolia"],
            },
          ],
        });
        // if (provider.network !== "matic") {
        //   await ethereum.request({
        //     method: "wallet_addEthereumChain",
        //     params: [
        //       {
        //         ...networks["polygonMainnet"],
        //       },
        //     ],
        //   });
        // }
        const account = await provider.getSigner();
        const Address = await account.getAddress();
        setAddress(Address);
        setIsConnected(true);
      }
    } catch (e) {
      if (e.code === 4001) {
        console.error("Permissions needed to continue.");
      } else {
        console.error(e.message);
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

        <div className="md:flex items-center space-x-5 font-bold ">
          <div className=" border-2 border-fourth px-4 py-2 hover:bg-fourth hover:text-first">
            <Link href="/InitCamp">Start Project</Link>
          </div>
          {!isConnected ? (
            <button
              className="bg-fourth text-first p-2 rounded-md hover:bg-gray-300"
              onClick={connect}
            >
              Connect wallet
            </button>
          ) : (
            <div className="flex justify-center items-center">
              <div className=" border-2 border-fourth px-4 py-2">
                {address.slice(0, 6)}.......{address.slice(address.length - 4)}
              </div>
              <MdArrowDropDown
                className="text-lg cursor-pointer"
                onClick={toggleDisplay}
              />
              {display && (
                <div className="absolute top-[60%] right-1 flex flex-col bg-fourth text-first p-2 rounded-md">
                  <Link href="/dashboard">
                    <div className="pb-2 cursor-pointer hover:bg-gray-300 mb-2">
                      Dashboard
                    </div>
                  </Link>
                  <button
                    className="bg-first text-fourth p-2 rounded-md hover:bg-blue-900"
                    onClick={disconnect}
                  >
                    Disconnect wallet
                  </button>
                </div>
              )}
            </div>
          )}
          <div className="md:hidden">
            {!isOpen ? (
              <FaBars className="cursor-pointer" onClick={toggleMenu} />
            ) : (
              <FaTimes className="cursor-pointer" onClick={toggleMenu} />
            )}
          </div>
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
