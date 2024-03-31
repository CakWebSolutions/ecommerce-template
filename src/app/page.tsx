// Assuming Hero2 is also a component, it should be imported from your components directory
import Hero2 from "../components/Hero2";
import Portfolio from "../pages/Portfolio";
import Navbar2 from "../pages/Navbar2"; // Adjusted import path

import React from "react";

export default function Home() {
  return (
    <React.StrictMode>
      <main className="flex flex-row">
        <Navbar2 />
        <Hero2 />
        <Portfolio />
      </main>
    </React.StrictMode>
  );
}
