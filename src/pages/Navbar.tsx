/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Assuming usePathname is available in your Next.js version

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // New state for managing menu visibility on small screens
  const pathname = usePathname();

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev); // Toggle menu open/close state
  };

  const icons = [
    { name: "home", label: "Home", path: "/" },
    { name: "paintings", label: "Portfolio", path: "/Portfolio" },
    { name: "store", label: "Prints", path: "/Prints" },
    { name: "shop", label: "Cart", path: "/Cart" },
    { name: "info", label: "Info", path: "/AboutMe" },
  ];

  const showStyle = {
    opacity: 1,
    transition: "opacity 0.7s ease-in-out",
  };

  const hideStyle = {
    opacity: 0,
    transition: " 0.7s ease-in-out",
  };

  return (
    <div
      className="relative lg:absolute lg:top-0 lg:left-0"
      style={{ zIndex: 100 }}
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`flex flex-row sm:flex-col justify-between lg:justify-between lg:items-center h-20 lg:h-screen py-4 item sm:space-x-16
       sm:hover:space-x-0 bg-white overflow-hidden shadow-2xl transition-all duration-[1s] ease-in-out w-screen
        ${isHovered ? "w-full lg:w-44" : "w-full lg:w-16"}`}
      >
        <div className="hidden lg:flex flex-col items-center justify-center mt-10">
          {/* Initials - Apply hideStyle when hovered */}
          <div
            style={!isHovered ? showStyle : hideStyle}
            className="flex sm:flex-col text-3xl absolute"
          >
            <img src="/jp.png" alt="Close" className="w-10 h-10" />
          </div>
          {/* Full Name - Apply showStyle when hovered */}
          <div
            style={isHovered ? showStyle : hideStyle}
            className="flex flex-col text-3xl absolute"
          >
            <Link href='/'>
              <img src="/joanPopli.png" alt="Close" className="p-5" />
            </Link>
          </div>
        </div>
        {/* Toggle button for small screens */}
        <div className="absolute  pt-2 z-40 right-0 sm:block md:block lg:hidden">
          <button onClick={handleMenuToggle}>
            {isMenuOpen ? (
              <div className="flex flex-row w-screen justify-between px-8">
                <img src="/jp.png" alt="Close" className="w-10 h-10 " />
                <img src="/close.png" alt="Close" className="w-10 h-10 " />
              </div>
            ) : (
              <div className="flex flex-row w-screen justify-between px-8">
                <img src="/jp.png" alt="Close" className="w-10 h-10 " />
                <img src="/menu.png" alt="Menu" className="w-10 h-10" />
              </div>
            )}
          </button>
        </div>
        {/* Navbar for small screens */}
        <div
          className={`lg:hidden fixed inset-0 bg-white z-30 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out flex flex-col items-start px-6 md:px-16 justify-center space-y-12 lg:hidden`}
        >
          {icons.map((icon, index) => (
            <Link legacyBehavior key={index} href={icon.path}>
              <a className="flex flex-row items-center justify-start space-x-12 md:space-x-16">
                <img
                  src={`/${icon.name}.png`}
                  alt={icon.label}
                  className="w-8 h-8 md:w-12 md:h-12"
                />
                <span className=" text-black font-playfairRegular text-xl md:text-3xl">
                  {icon.label}
                </span>
              </a>
            </Link>
          ))}
        </div>
        {/* Navbar for mid screens */}
        <div
          className={`sm:hidden lg:hidden fixed inset-0 bg-white z-30 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out flex flex-col items-start px-6 justify-center space-y-12 lg:hidden`}
        >
          {icons.map((icon, index) => (
            <Link legacyBehavior key={index} href={icon.path}>
              <a className="flex flex-row items-center justify-start space-x-12">
                <img
                  src={`/${icon.name}.png`}
                  alt={icon.label}
                  className="w-8 h-8"
                />
                <span className=" text-black font-playfairRegular text-xl">
                  {icon.label}
                </span>
              </a>
            </Link>
          ))}
        </div>


        {/*Large Screens Navbar icons onHover transitions*/}
        <div className="-mt-20">
          <div className="hidden md:hidden lg:flex flex-col items-start justify-between mt-24">
            {icons.map((icon, index) => (
              <Link legacyBehavior key={index} href={icon.path}>
                <a
                  className={`group flex hover:opacity-100 opacity-60 transition duration-600 text-gray-500 hover:text-black space-y-8 items-end ${isHovered ? "" : ""
                    } `}
                >
                  {/* Icon Always Visible */}

                  <img
                    src={`/${icon.name}.png`}
                    alt={icon.label}
                    className={`w-6 h-6 transition-opacity duration-200 
                     `}
                  />

                  {/* Text Label Slides In */}

                  <span
                    style={
                      isHovered
                        ? {
                          ...showStyle,
                          transform: "translateX(0) scale(1)",
                          overflow: "hidden",
                        }
                        : {
                          ...hideStyle,
                          transform: "translateX(-1.5rem) scale(0.1)",
                          overflow: "hidden",
                        }
                    }
                    className={`ml-5 text-center text-lg font-playfairBold  transition-all transform duration-700`}
                  >
                    {icon.label}
                  </span>
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default Navbar;
