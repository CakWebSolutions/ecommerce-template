/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// Assuming "@/styles/globals.css" is correctly imported elsewhere in your app

interface DataItem {
  _id: string;
  name: string;
  index: number;
  path_to_src: string;
  costs: string;
  description: string;
}

function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [dataItems, setDataItems] = useState<DataItem[]>([]);
  const router = useRouter(); // Use Next.js useRouter hook for navigation


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/SampleData");
        if (!res.ok) throw new Error("Data could not be fetched");
        const data: DataItem[] = await res.json();
        setDataItems(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dataItems.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === dataItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const openCard = () => {
    if (currentItem) {
      router.push
        (`/Cart?paintingId=${currentItem._id}
      &name=${encodeURIComponent(currentItem.name)}
      &imageSrc=${encodeURIComponent(currentItem.path_to_src)}`);
    }
  };


  // Display only the current item
  const currentItem = dataItems[currentIndex];

  return (
    <div className="relative max-w-lg mx-auto overflow-hidden">
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent border-none text-2xl cursor-pointer z-10"
      >
        ‹
      </button>
      {currentItem && (
        <div onClick={openCard} className="flex justify-center">
          <img
            src={currentItem.path_to_src}
            alt={currentItem.name}
            className="w-[195px] h-[244px] sm:w-[250px] sm:h-[300px]"
          />
          <h1>{currentItem.name}</h1>
          {/* Display other details as needed */}
        </div>
      )}
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent border-none text-2xl cursor-pointer z-10"
      >
        ›
      </button>
    </div>
  );
}

export default PortfolioCarousel;
