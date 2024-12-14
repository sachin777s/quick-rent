import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/Features";
import Gadgets from "./components/Gadgets";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>
      <Navbar />
      <main className="max-w-[1680px] mx-auto">
        <HeroSection />
        <FeaturesSection />
        <Gadgets />
        <ContactUs />
        <Footer />
      </main>
    </main>
  );
};

export default App;
