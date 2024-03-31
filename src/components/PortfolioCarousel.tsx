import { useState } from "react";
import "@/styles/globals.css";

const imageList = [
  "/couch.png",
  "/pikturaSyri.png",
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
    <div className="relative max-w-lg mx-auto overflow-hidden flex items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center">
        {" "}
        {/* Div for the left arrow */}
        <button
          onClick={goToPrevious}
          className="bg-transparent border-none cursor-pointer z-10 text-4xl lg:text-6xl" // Larger arrows
        >
          ‹
        </button>
      </div>
      <div className="flex justify-center w-full">
        <img
          src={imageList[currentIndex]}
          className="w-[195px] h-[244px] sm:w-[320px] sm:h-[400px] fadeIn"
        />
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        {" "}
        {/* Div for the right arrow */}
        <button
          onClick={goToNext}
          className="bg-transparent border-none cursor-pointer z-10 text-4xl lg:text-6xl" // Larger arrows
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default PortfolioCarousel;
