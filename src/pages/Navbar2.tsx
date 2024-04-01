"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Assuming usePathname is available in your Next.js version

function Navbar2() {
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  const icons = [
    { name: "home", label: "Home", path: "/" },
    { name: "paintings", label: "Portfolio", path: "/Portfolio" },
    { name: "store", label: "Prints", path: "./Prints" },
    { name: "shop", label: "Cart", path: "/cart" },
    { name: "info", label: "About Me", path: "/about-me" },
  ];

  const alwaysShowStyle = {
    transition: "opacity 0.5s ease-in-out",
    opacity: 1,
  };
  const showStyle = {
    opacity: 1,
    transition: "opacity 0.6s ease-in-out",
  };

  const hideStyle = {
    opacity: 0,
    transition: "opacity 0.1s ease-in-out",
  };

  return (
    <div className="absolute z-10 top-0 left-0">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`flex flex-col justify-between items-center h-screen py-4 space-x-12 hover:space-x-0 bg-white shadow-2xl transition-all duration-700 ease-in-out ${isHovered ? "w-44" : "w-16"
          }`}
        style={{ zIndex: 1000 }}
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
          <div className="flex flex-col space-y-12">
            {icons.map((icon, index) => (
              <Link key={index} href={icon.path} legacyBehavior>
                <a
                  className={`flex items-center w-full ${pathname === icon.path ? "active" : ""
                    }`}
                >
                  <img
                    className={`w-5 h-5`}
                    style={{
                      filter:
                        pathname === icon.path ? "brightness(120%)" : "none",
                    }} // Adjusted for visibility
                    src={`/${icon.name}.png`}
                    alt={icon.label}
                  />
                  <span
                    style={{
                      transition: "opacity 0.7s ease-in-out",
                      opacity: isHovered ? 1 : 0,
                      visibility: isHovered ? "visible" : "hidden",
                    }}
                    className="ml-5"
                  >
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

export default Navbar2;
