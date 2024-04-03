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
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? dataItems.length - 1 : prevIndex - 1;
      return newIndex;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === dataItems.length - 1 ? 0 : prevIndex + 1;
      return newIndex;
    });
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
    <div className="flex flex-row">
      <div>
        <button
          className="absolute lg:left-24 lg:mt-6 md:left-12 md:mt-[-125px] left-2 mt-[-150px]"
          onClick={goToPrevious}
        >
          <img
            src="/portfolioarrow.png"
            alt="Arrow to the left"
            className="w-8 h-14 mt-[0px]"
          />
        </button>
      </div>
      {currentItem && (
        <div
          onClick={openCard} className={`flex flex-col mt-[-250px] justify-center transition-opacity duration-500 fade-in`}
        >
          <img
            src={currentItem.path_to_src}
            alt={currentItem.name}
            className="w-[195px] h-[244px] sm:w-[250px] sm:h-[300px] shadow-custom2 transition-all hover:scale-105 duration-300 ease-in-out"
          />
          <h1 className="text-center text-black font-bold mt-4 text-xl font-jacques">
            {currentItem.name}
          </h1>
        </div>
      )}
      <div className="absolute lg:right-8 right-2 mt-[-150px] md:right-12 md:mt-[-125px] lg:mt-6">
        <button onClick={goToNext}>
          <img
            src="/portfolioarrow.png"
            alt="Arrow to the left"
            className="w-8 h-14 rotate-180"
          />
        </button>
      </div>
    </div>
  );
}

export default PortfolioCarousel;
