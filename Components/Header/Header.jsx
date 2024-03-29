"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import Link from "next/link";
import { BrowserProvider } from "ethers";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const networks = {
  sepolia: {
    chainId: `0x${Number(11155111).toString(16)}`,
    chainName: "Sepolia Test Network",
    rpcUrls: ["https://rpc.sepolia.org/"],
    nativeCurrency: {
      name: "SepoliaETH",
      symbol: "ETH",
      decimals: 18,
    },
    blockExplorerUrls: ["https://sepolia.etherscan.io/"],
  },
  polygon: {
    chainId: `0x${Number(80002).toString(16)}`,
    chainName: "Polygon Amoy Testnet",
    rpcUrls: ["https://rpc-amoy.polygon.technology/"],
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    blockExplorerUrls: ["https://www.oklink.com/amoy"],
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
  const [address, setAddress] = useState("");
  const [isArrowDown, setIsArrowDown] = useState(true);
  const [walletConnecting, setWalletConnecting] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDisplay(false);
        setIsArrowDown(true);
      }
    };

    if (isOpen || display) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, display]);

  useEffect(() => {
    const acc = localStorage.getItem("account");
    setAddress(acc);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDisplay = () => {
    setDisplay(!display);
  };

  const toggleArrow = () => {
    setIsArrowDown(!isArrowDown);
  };

  const connect = async () => {
    setWalletConnecting(true);
    if (typeof ethereum === "undefined") {
      toast.error("Install Metamask first");
    } else {
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
        }

        // if (provider.network !== "matic") {
        //   await ethereum.request({
        //     method: "wallet_addEthereumChain",
        //     params: [
        //       {
        //         ...networks["polygon"],
        //       },
        //     ],
        //   });
        // }

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
        // check balance
        setAddress(Address);
        localStorage.setItem("account", Address);
        toast.success("Wallet Connected sucessfully");
      } catch (e) {
        if (e.code === 4001) {
          toast.error("Permissions needed to continue");
        } else {
          toast.error(e.message);
        }
      }
    }
    setWalletConnecting(false);
  };

  const disconnect = () => {
    setAddress("");
    localStorage.setItem("account", "");
    toast.success("Wallet Disconnected sucessfully");
    setDisplay(false);
    setIsArrowDown(true);
  };

  const falseClick = () => {
    toast.warn("Wallet connection request already pending");
  };

  return (
    <header className="px-5 top-0 sticky bg-first text-fourth py-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-5">
          <Link href="/" className="font-bold text-md font-haviland text-5xl">
            CryptoRaise
          </Link>
          <div className="font-bold hover:text-th ird hover:underline transition-all duration-500 hidden md:flex">
            <Link href="/HIW">Work Mechanism</Link>
          </div>
          <div className="font-bold hover:text-third hover:underline transition-all duration-500 hidden md:flex">
            <Link href="/Discover">Discover</Link>
          </div>
          <div className="font-bold hover:text-third hover:underline transition-all duration-500 cursor-pointer">
            <FaSearch />
          </div>
        </div>

        <div className="md:flex items-center space-x-5 font-bold ">
          <Link href="/InitCamp">
            <div className=" border-2 border-fourth px-4 py-2 hover:bg-fourth hover:text-first max-[770px]:hidden">
              Start Project
            </div>
          </Link>
          {address === "" ? (
            !walletConnecting ? (
              <button
                className="bg-fourth text-first p-2 rounded-md hover:bg-gray-300 max-[770px]"
                onClick={connect}
              >
                Connect wallet
              </button>
            ) : (
              <button
                className="text-first p-2 rounded-md bg-gray-300 max-[770px]"
                onClick={falseClick}
              >
                Connect wallet
              </button>
            )
          ) : (
            <div className="flex justify-center items-center" ref={dropdownRef}>
              <div className=" border-2 border-fourth px-4 py-2">
                {address.slice(0, 6)}.......{address.slice(address.length - 4)}
              </div>
              {isArrowDown ? ( // Using isArrowDown state to toggle between dropdown and dropup icons
                <MdArrowDropDown // Displaying MdArrowDropDown icon when isArrowDown is true
                  className="text-lg cursor-pointer"
                  onClick={() => {
                    toggleArrow();
                    toggleDisplay();
                  }}
                />
              ) : (
                <MdArrowDropUp // Displaying MdArrowDropUp icon when isArrowDown is false
                  className="text-lg cursor-pointer"
                  onClick={() => {
                    toggleArrow();
                    toggleDisplay();
                  }}
                />
              )}
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
