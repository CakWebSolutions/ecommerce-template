"use client";
import React from "react";
import "@/styles/globals.css";
import PortfolioCarousel from "./Carousel";
import Navbar from "../Navbar";
import Link from "next/link";

const RoomView = () => {
  return (
    <div>
      <Navbar />

      <div className="background background-sm">
        <div className="absolute lg:top-0 lg:left-16 md:top-32 md:left-8 top-24 left-0">
          <Link legacyBehavior href="/Prints">
            <a className="flex flex-row items-center space-x-3 w-fit px-4 py-2 transition duration-200 rounded hover:bg-gray-100">
              <img src='/arrow.png' className='w-5 rotate-180' alt='back'></img>
              <h1>Back</h1>
            </a>
          </Link>
        </div>
        <style jsx>{`
          .background {
            background-image: url("/couch.png");
            background-size: fill;
            background-position: center;
            height: screen;
            width: screen;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: auto;
            padding-bottom: 40px;
          }
          .background-sm {
            background-image: url("/couch.png");
            background-size: cover;
            background-position: center;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
        </style>

        <PortfolioCarousel />
      </div>
    </div>
  );
};

export default RoomView;
