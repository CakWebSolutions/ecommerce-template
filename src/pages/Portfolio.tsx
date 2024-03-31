
"use client";
import React from "react";
import "@/styles/globals.css";
import PortfolioCarousel from "../components/PortfolioCarousel";

const Portfolio = () => {
  return (
    <>
      <div className=" background background-sm">
        <style jsx>{`
          .background {
            background-image: url("/couch.png");
            background-size: cover;
            background-position: center;
            height: 120vh;
            display: flex;
            justify-content: center;
            align-items: center;
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
        `}</style>
        <div className="pb-36 mb-36 flex flex-col justify-items-center text-center space-y-7">
          <PortfolioCarousel />
          <h1 className="text-2xl font-semibold">Name of the painting</h1>
        </div>
      </div>
    </>
  );
};


