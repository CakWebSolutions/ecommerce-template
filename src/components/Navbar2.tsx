"use client";

import React from "react";

function Navbar2() {
  const [isHovered, setIsHovered] = React.useState(false);

  const icons = [
    { name: "home", label: "Home" },
    { name: "paintings", label: "Portfolio" },
    { name: "store", label: "Prints" },
    { name: "shop", label: "Cart" },
    { name: "info", label: "About Me" },
  ];

  return (
    <div className="absolute z-10 top-0 left-0">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`flex flex-col justify-between items-center h-screen py-4 space-x-12 hover:space-x-0 bg-white shadow-2xl transition-all duration-300 ease-in-out ${
          isHovered ? "w-44" : "w-16"
        }`}
        style={{ zIndex: 1000 }}
      >
        <div className="flex flex-col items-center justify-center flex-grow">
          {!isHovered ? (
            <div className="flex flex-col items-center mb-16">
              <h1 className="text-2xl -ml-4">J</h1>
              <h1 className="text-2xl ml-4">P</h1>
            </div>
          ) : (
            <div
              style={{
                transition: "opacity 0.5s ease-in-out",
                opacity: isHovered ? 1 : 0,
                visibility: isHovered ? "visible" : "hidden",
              }}
              className="mb-16 space-y-2"
            >
              <h1 className="text-4xl text-center -ml-8">Joan</h1>
              <h1 className="text-4xl text-center ml-8">Popli</h1>
            </div>
          )}
        </div>
        <div className="">
          <div className="flex flex-col space-y-8">
            {icons.map((icon, index) => (
              <div key={index} className="flex items-center w-full">
                <img
                  className={`w-7 h-7`}
                  src={`/${icon.name}.png`}
                  alt={icon.name}
                />
                <span
                  style={{
                    transition: "opacity 0.5s ease-in-out",
                    opacity: isHovered ? 1 : 0,
                    visibility: isHovered ? "visible" : "hidden",
                  }}
                  className="ml-4"
                >
                  {icon.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-grow"></div>{" "}
        {/* Adjusted div to maintain layout and ensure icons are centered */}
      </div>
    </div>
  );
}

export default Navbar2;
