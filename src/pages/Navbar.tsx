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
    { name: "paintings", label: "Portfolio", path: "./Portfolio" },
    { name: "store", label: "Prints", path: "./Prints" },
    { name: "shop", label: "Cart", path: "./Cart" },
    { name: "info", label: "Info", path: "./AboutMe" },
  ];

  const showStyle = {
    opacity: 1,
    transition: "opacity 0.7s ease-in-out",
  };

  const hideStyle = {
    opacity: 0,
    transition: " 0.7s ease-in-out",
  };

  const SHhideStyle = {
    opacity: 0,
    transition: " ",
  };

  return (
    <div
      className="absolute lg:absolute lg:top-0 lg:left-0"
      style={{ zIndex: 100 }}
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`flex flex-row sm:flex-col justify-between lg:justify-between lg:items-center h-20 lg:h-screen py-4 item sm:space-x-16
       sm:hover:space-x-0 bg-white shadow-2xl transition-all duration-[1s] ease-in-out w-screen
        ${isHovered ? "w-full sm:w-44" : "w-full sm:w-16"}`}
      >
        <div className="hidden lg:flex flex-col items-center justify-center mt-10">
          {/* Initials - Apply hideStyle when hovered */}
          <div
            style={!isHovered ? showStyle : hideStyle}
            className="flex sm:flex-col text-3xl absolute"
          >
            <img src="/jp.png" alt="Close" className="w-10 h-10 " />
          </div>
          {/* Full Name - Apply showStyle when hovered */}
          <div
            style={isHovered ? showStyle : hideStyle}
            className="flex flex-col text-3xl absolute"
          >
            <img src="/joanPopli.png" alt="Close" className="p-5" />
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
        <div
          className={`fixed inset-0 bg-white z-30 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out flex flex-col items-center justify-center space-y-12 lg:hidden`}
        >
          {icons.map((icon, index) => (
            <Link legacyBehavior key={index} href={icon.path}>
              <a className="flex flex-row items-center justify-start">
                <img
                  src={`/${icon.name}.png`}
                  alt={icon.label}
                  className="w-8 h-8"
                />
                <span className="ml-5 text-xl">{icon.label}</span>
              </a>
            </Link>
          ))}
        </div>
        <div className="">
          <div className="hidden lg:flex flex-col items-center mt-24 space-y-12">
            {icons.map((icon, index) => (
              <Link legacyBehavior key={index} href={icon.path}>
                <a className="group flex items-center w-full">
                  {/* Icon Always Visible */}
                  {isHovered ? null : (
                    <img
                      style={isHovered ? hideStyle : showStyle}
                      src={`/${icon.name}.png`}
                      alt={icon.label}
                      className="w-5 h-5 transition-opacity opacity-100 duration-0"
                    />
                  )}

                  {/* Text Label Slides In */}
                  <div className="flex flex-row space-x-4">
                    <img
                      style={!isHovered ? SHhideStyle : showStyle}
                      src={`/${icon.name}.png`}
                      alt={icon.label}
                      className="w-5 h-5 transition-opacity opacity-100 duration-0 overflow-auto"
                    />
                    <span
                      style={
                        isHovered
                          ? { ...showStyle, transform: "translateX(0)" }
                          : {
                              ...hideStyle,
                              transform: "translateX(-1.5rem",
                              overflow: "hidden",
                            } // Assuming -translate-x-20 equals to -5rem as per your previous context
                      }
                      className={`ml-5 transition-transform duration-700`}
                    >
                      {icon.label}
                    </span>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div></div> {/*empty div for the layout*/}
      </div>
    </div>
  );
}

export default Navbar;
