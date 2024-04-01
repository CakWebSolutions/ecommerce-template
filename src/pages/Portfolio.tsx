"use client";
import React from "react";
import "@/styles/globals.css";
import PortfolioCarousel from "../components/portfolio/PortfolioCarousel";
import Navbar from "./Navbar";

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <div className="background background-sm">
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
        `}</style>
        <PortfolioCarousel />
      </div>
    </div>
  );
};

export default Portfolio;
