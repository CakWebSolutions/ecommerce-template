import React, { useState } from "react";
import "@/styles/globals.css";

const imageList = [
  { src: "/pic1.png", name: "Image Name 1" },
  { src: "/pic2.png", name: "Image Name 2" },
  { src: "/pic3.png", name: "Image Name 3" },
  // Continue with your images
];
function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = imageList[currentIndex]; // Access the current image object

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
      <div className="absolute left-[200px] translate-y-48 ">
        <button
          onClick={goToPrevious}
          className="text-black border-none cursor-pointer z-10 text-8xl" // Larger arrows
        >
          ‹
        </button>
      </div>
      <div className="transform -translate-y-28 translate-x-3">
        <img
          src={currentImage.src} // Use src from currentImage
          className="w-[195px] h-[244px] sm:w-[250px] sm:h-[300px] shadow-bottom-right"
        />
      </div>
      <div className="absolute right-[200px] translate-y-48">
        <button
          onClick={goToNext}
          className="text-black border-none cursor-pointer z-10 text-8xl" // Larger arrows
        >
          ›
        </button>
      </div>
      <div className="-translate-y-32 translate-x-3 py-5">
        {/* Use name from currentImage */}
        <h1 className="shadow-text pt-10 text-center text-black text-xl ">
          {currentImage.name}
        </h1>
      </div>
    </div>
  );
}

export default PortfolioCarousel;
