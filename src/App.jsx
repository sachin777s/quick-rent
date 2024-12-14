import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/Features";
import Gadgets from "./components/Gadgets";

const App = () => {
  return (
    <main>
      <Navbar />
      <main className="max-w-[1680px] mx-auto">
        <HeroSection />
        <FeaturesSection/>
        <Gadgets/>
      </main>
    </main>
  );
};

export default App;
