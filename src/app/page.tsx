// Assuming Hero2 is also a component, it should be imported from your components directory
import Hero2 from "../components/Hero";
import Navbar2 from "../pages/Navbar"; // Adjusted import path

import React from "react";

export default function Home() {
  return (
    <React.StrictMode>
      <Hero2 />
    </React.StrictMode>
  );
}
