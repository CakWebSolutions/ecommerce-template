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
                  className="h-8 w-14 rotate-180"
                />
              </button>
              <h1 className="text-4xl mb-2 font-bold">Featured Paintings</h1>
            </div>
            <button onClick={scrollRight}>
              <img src="/arrowPortfolio.png" alt="arrow" className="h-8 w-14" />
            </button>
          </div>
          <div className=" bg-[#F4F4F2] w-screen h-[400px] overflow-visible">
            <div className="flex w-screen overflow-x-scroll" ref={carouselRef}>
              {paintings.map((painting) => (
                <div
                  key={painting.id}
                  className="flex flex-col min-w-max overflow-x-auto hover:bg-white hover:shadow-xl mt-6 h-[310px] hover:mt-0 hover:h-[500px] py-8 px-8 ml-8"
                >
                  <img
                    src={painting.image}
                    alt={painting.paintingname}
                    className={painting.imageClassName}
                  />
                  <p>{painting.paintingname}</p>
                  <p>{painting.artist}</p>
                  <p>{painting.description}</p>
                  <div className="flex flex-row mt-10">
                    <p className={painting.priceClass}>{painting.price}</p>
                    <div className="flex flex-row">
                      <img
                        className={painting.iconsClass}
                        src="/share.png"
                        alt="share"
                      />
                      <img
                        className={painting.iconsClass}
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
