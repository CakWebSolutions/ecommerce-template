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
      <div className="w-screen lg:h-screen overflow-auto bg-white">
        <div className="flex flex-col items-center lg:items-start  ">
          <div className="flex flex-row lg:w-full lg:bg-transparent bg-[#F4F4F2] w-[300px] lg:space-x-[500px] lg:ml-[200px] lg:mt-[100px] ">
            <div className="flex gap-8 items-center">
              <button onClick={scrollLeft}>
                <img
                  src="/arrowPortfolio.png"
                  alt="arrow"
                  className="lg:h-8 lg:w-14 w-0 h-0 rotate-180 lg:hover:scale-125 lg:transition-all lg:duration-250"
                />
              </button>
              <h1 className="lg:text-[52px] text-3xl px-1 lg:px-0 mt-4 lg:mt-0 lg:mb-2 font-jacques text-black opacity-60">
                Featured Paintings
              </h1>
            </div>
            <button onClick={scrollRight}>
              <img
                src="/arrowPortfolio.png"
                alt="arrow"
                className="lg:h-8 lg:w-14 h-0 w-0 lg:hover:scale-125 lg:transition-all lg:duration-250"
              />
            </button>
          </div>
          <div className=" bg-[#F4F4F2] w-[300px] lg:w-screen lg:h-[400px] h-full overflow-visible">
            <div
              className="flex lg:flex-row flex-col gap-12 items-center lg:items-start lg:w-screen lg:overflow-x-scroll"
              ref={carouselRef}
            >
              {paintings.map((painting) => (
                <div
                  key={painting.id}
                  className="flex flex-col items-center min-w-max overflow-hidden transition-height duration-300 ease-in-out hover:bg-white hover:mb-8 hover:shadow-xl mt-6 h-[310px] hover:mt-0 hover:h-[450px] py-8 px-8 lg:ml-8 "
                >
                  <img
                    src={painting.image}
                    alt={painting.paintingname}
                    className="lg:w-[200px] lg:h-[200px] w-[200px] h-[200px]"
                  />
                  <p className="font-jacques font-bold text-black">
                    {painting.paintingname}
                  </p>
                  <p className="font-jacques text-black opacity-60">
                    {painting.artist}
                  </p>
                  <p className="font-jacques text-black opacity-60">
                    {painting.description}
                  </p>
                  <div className="flex flex-row space-x-[95px] mt-24">
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
