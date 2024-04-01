import React, { useState } from "react";
import "@/styles/globals.css";

const imageList = [
  "/pic1.png",
  "/pic2.png",
  "/pic3.png",
  // Ensure all paths are valid and complete your image list
];

function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex =
      currentIndex === 0 ? imageList.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex =
      currentIndex === imageList.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="flex flex-col justify-items-start">
      <div className="absolute left-[100px] translate-y-48 ">
        {" "}
        <button
          onClick={goToPrevious}
          className=" text-black border-none cursor-pointer z-10 text-8xl" // Larger arrows
        >
          ‹
        </button>
      </div>
      <div className="transform -translate-y-28 translate-x-3">
        <img
          src={imageList[currentIndex]}
          className="w-[195px] h-[244px] sm:w-[250px] sm:h-[300px] shadow-2xl"
        />
      </div>
      <div className="absolute right-[100px] translate-y-48">
        {" "}
        <button
          onClick={goToNext}
          className="text-black border-none cursor-pointer z-10 text-8xl" // Larger arrows
        >
          ›
        </button>
      </div>
      <div className="-translate-y-28 translate-x-3 py-5">
        <h1 className="shadow-text pt-10 text-center text-black text-2xl ">
          Name of the Painting
        </h1>
      </div>
    </div>
  );
}

export default PortfolioCarousel;
