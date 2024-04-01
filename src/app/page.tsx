// Assuming Hero2 is also a component, it should be imported from your components directory
import Hero2 from "../components/Hero";
import Navbar from "../pages/Navbar";

import React from "react";

export default function Home() {
  return (
    <React.StrictMode>
      <main className="flex flex-col sm:flex-row">
        <Navbar />
        <Hero2 />
      </main>
    </React.StrictMode>
  );
}
