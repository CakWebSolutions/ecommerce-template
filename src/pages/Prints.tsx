/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef, useEffect } from "react";
import Navbar from "./Navbar";
import "@/styles/globals.css";
import { useRouter } from "next/router";

interface Painting {
  _id: string;
  name: string;
  index: number;
  path_to_src: string;
  costs: string;
  description: string;
  artist: string;
}

function Prints() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [paintings, setPaintings] = React.useState<Painting[]>([]); // Step 1
  const [currentIndex, setCurrentIndex] = React.useState(0); // Step 2
  const router = useRouter();
  const itemsCount = paintings.length;

  const openCard = (painting: Painting) => {
    // Construct the URL with all necessary query parameters
    const queryParameters = new URLSearchParams({
      paintingId: painting._id,
      name: encodeURIComponent(painting.name),
      imageSrc: encodeURIComponent(painting.path_to_src),
      costs: encodeURIComponent(painting.costs),
      description: encodeURIComponent(painting.description),
      artist: encodeURIComponent(painting.artist)
    }).toString();

    router.push(`/prints/Card?${queryParameters}`);
  };

  useEffect(() => {
    const fetchPaintings = async () => {
      try {
        const response = await fetch("/api/SampleData"); // Adjust this endpoint to where your backend serves the paintings data
        if (!response.ok) throw new Error("Could not fetch paintings");
        const data = await response.json();
        setPaintings(data); // Step 4
      } catch (error) {
        console.error("Failed to load paintings:", error);
      }
    };
    fetchPaintings();
  }, []);

  const scrollLeft = () => {
    setCurrentIndex((prevIndex) => {
      // Calculate new index by subtracting one to move left
      // Use modulo to wrap around to the last item if currently at the first item
      const newIndex = (prevIndex - 1 + itemsCount) % itemsCount;
      scrollToItem(newIndex); // Scroll to the item at the new index
      return newIndex; // Update the state to the new index
    });
  };

  const scrollRight = () => {
    setCurrentIndex((prevIndex) => {
      // Calculate new index by adding one to move right
      // Use modulo to wrap around to the first item if currently at the last item
      const newIndex = (prevIndex + 1) % itemsCount;
      scrollToItem(newIndex); // Scroll to the item at the new index
      return newIndex; // Update the state to the new index
    });
  };

  const scrollToItem = (index: any) => {
    const scrollAmount = index * 600; // Assuming each item + gap roughly equals 600px
    if (carouselRef.current) {
      carouselRef.current.scroll({ left: scrollAmount, behavior: "smooth" });
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
                  key={painting._id}
                  className="flex flex-col items-center min-w-max overflow-hidden transition-height duration-300 ease-in-out hover:bg-white hover:mb-8 hover:shadow-xl mt-6 h-[310px] hover:mt-0 hover:h-[450px] py-8 px-8 lg:ml-8 "
                >
                  <img
                    onClick={() => openCard(painting)}
                    src={painting.path_to_src}
                    alt={painting.name}
                    className="lg:w-[200px] lg:h-[200px] w-[200px] h-[200px]"
                  />
                  <p className="font-jacques font-bold text-black">
                    {painting.name}
                  </p>
                  <p className="font-jacques text-black opacity-60">
                    {painting.artist}
                  </p>
                  <>
                    <p className="font-jacques text-black opacity-60">
                      {painting.description}
                    </p>
                    <div className="flex flex-row space-x-[95px] mt-24">
                      <p className="mt-1 font-jacques font-bold text-black">
                        {painting.costs}
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
                  </>
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
