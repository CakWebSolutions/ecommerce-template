"use client";

import React, { useRef } from "react";
import { paintings } from "../components/Paintings";
import Navbar from "./Navbar";
import "@/styles/globals.css";

function Prints() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -600, behavior: "smooth" }); // Assuming each item + gap roughly equals 600px
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 600, behavior: "smooth" }); // Adjust this value as per your item widths including margins
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-screen h-screen bg-white">
        <div className="flex flex-col w-full">
          <div className="flex flex-row w-full space-x-[800px] space ml-[150px] mt-[100px] ">
            <div className="flex gap-8">
              <button onClick={scrollLeft}>
                <img
                  src="/arrowPortfolio.png"
                  alt="arrow"
                  className="h-8 w-14 rotate-180 hover:scale-125 transition-all duration-250"
                />
              </button>
              <h1 className="text-[52px] mb-2 font-jacques text-black opacity-60">
                Featured Paintings
              </h1>
            </div>
            <button onClick={scrollRight}>
              <img
                src="/arrowPortfolio.png"
                alt="arrow"
                className="h-8 w-14 hover:scale-125 transition-all duration-250"
              />
            </button>
          </div>
          <div className=" bg-[#F4F4F2] w-screen h-[400px] overflow-visible">
            <div className="flex w-screen overflow-x-scroll" ref={carouselRef}>
              {paintings.map((painting) => (
                <div
                  key={painting.id}
                  className="flex flex-col min-w-max overflow-x-auto transition-height duration-300 ease-in-out hover:bg-white hover:mb-8 hover:shadow-xl mt-6 h-[310px] hover:mt-0 hover:h-[450px] py-8 px-8 ml-8 "
                >
                  <img
                    src={painting.image}
                    alt={painting.paintingname}
                    className={painting.imageClassName}
                  />
                  <p className="font-jacques font-bold text-black">
                    {painting.paintingname}
                  </p>
                  <p className="font-jacques">{painting.artist}</p>
                  <p className="font-jacques">{painting.description}</p>
                  <div className={painting.divClassPrice}>
                    <p className="mt-1 font-jacques font-bold text-black">
                      {painting.price}
                    </p>
                    <div className="flex flex-row gap-2">
                      <img
                        className="w-[30px] h-[30px]"
                        src="/share.png"
                        alt="share"
                      />
                      <img
                        className="w-[30px] h-[30px]"
                        src="/addCart.png"
                        alt="cart"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Prints;
