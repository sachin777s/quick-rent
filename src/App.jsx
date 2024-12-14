import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <main>
      <Navbar />
      <main className="max-w-[1680px] mx-auto">
        <HeroSection />
      </main>
    </main>
  );
};

export default App;
