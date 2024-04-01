"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Assuming usePathname is available in your Next.js version

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  const icons = [
    { name: "home", label: "Home", path: "/" },
    { name: "paintings", label: "Portfolio", path: "./Portfolio" },
    { name: "store", label: "Prints", path: "./Prints" },
    { name: "shop", label: "Cart", path: "./Cart" },
    { name: "info", label: "Info", path: "./AboutMe" },
  ];

  const showStyle = {
    opacity: 1,
    transition: "opacity 0.9s ease-in-out",
  };

  const hideStyle = {
    opacity: 0,
    transition: "opacity 0.2s ease-in-out",
  };


  const iconshowStyle = {
    opacity: 1,
    transition: "opacity 0.7s ease-in-out",
  };

  const iconhideStyle = {
    opacity: 0,
    transition: "opacity 0s ease-in-out",
  };

  const textshowStyle = {
    opacity: 1,
    transition: "opacity 1.5s ease-in-out",
  };

  const texthideStyle = {
    opacity: 0,
    transition: "opacity 0s ease-in-out",
  };




  return (
    <div className="absolute z-10 top-0 left-0"
      style={{
        zIndex: 100
      }}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`flex flex-col justify-between items-center h-screen py-4 item space-x-16
       hover:space-x-0 bg-white shadow-2xl transition-all duration-[1s] ease-in-out 
        ${isHovered ? "w-44" : "w-16"
          }`}
      >
        <div className="flex flex-col items-center mb-20">
          {/* Initials - Apply hideStyle when hovered */}
          <div
            style={!isHovered ? showStyle : hideStyle}
            className="flex flex-col text-3xl absolute"
          >
            <h1 className="text-center -ml-4">J</h1>
            <h1 className="text-center ml-4">P</h1>
          </div>
          {/* Full Name - Apply showStyle when hovered */}
          <div
            style={isHovered ? showStyle : hideStyle}
            className="flex flex-col text-3xl absolute"
          >
            <h1 className="text-center -ml-6">Joan</h1>
            <h1 className="text-center ml-6">Popli</h1>
          </div>
        </div>



        <div className="">
          <div className="flex flex-col items-center mt-24 space-y-12">
            {icons.map((icon, index) => (
              <Link legacyBehavior key={index} href={icon.path}>
                <a className="group flex items-center w-full">
                  {/* Icon Always Visible */}
                  <img src={`/${icon.name}.png`} alt={icon.label} className="w-5 h-5 transition-opacity duration-500" />
                  {/* Text Label Slides In */}
                  <span className={`ml-5 transition-transform duration-700 ${isHovered ? 'opacity-100 translate-x-0' : '-translate-x-20 opacity-0'}`}>
                    {icon.label}
                  </span>
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
