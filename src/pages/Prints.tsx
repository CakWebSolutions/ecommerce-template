"use client";

import React, { useRef } from "react";
import { paintings } from "../components/Paintings";

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
    <div className="w-screen h-screen">
      <div className="flex flex-col w-full">
        <div className="flex flex-row w-full space-x-[900px] space ml-[150px] mt-[150px] ">
          <div className="flex gap-8">
            <button onClick={scrollLeft}>
              <img
                src="/arrowPortfolio.png"
                alt="arrow"
                className="h-8 w-14 rotate-180"
              />
            </button>
            <h1 className="text-2xl">Featured Paintings</h1>
          </div>
          <button onClick={scrollRight}>
            <img src="/arrowPortfolio.png" alt="arrow" className="h-8 w-14" />
          </button>
        </div>
        <div
          className="flex w-screen bg-[#F4F4F2] overflow-x-auto scrollbar"
          ref={carouselRef}
        >
          {paintings.map((painting) => (
            <div
              key={painting.id}
              className="flex flex-col min-w-max px-8 py-14 ml-8"
            >
              <img
                src={painting.image}
                alt={painting.paintingname}
                className={painting.imageClassName}
              />
              <p>{painting.paintingname}</p>
              <p>{painting.artist}</p>
              <p>{painting.description}</p>
              <div className="flex-row">
                <p>{painting.price}</p>
                <img src="/share.png" alt="share" />
                <img src="/addCart.png" alt="cart" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Prints;
