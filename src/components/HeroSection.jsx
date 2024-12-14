import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-[var(--main-color)] text-white">
      {/* Hero Section Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2021/11/16/15/35/electronics-6801339_640.jpg)` }}></div>
      
      {/* Hero Content */}
      <div className="relative z-10 min-h-[calc(100vh-60px)] flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Rent Gadgets, Anytime, Anywhere
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Explore the best deals for renting electronics, gadgets, and more! Convenient, affordable, and at your fingertips.
          </p>
          <a
            href="#explore"
            className="inline-block py-3 px-8 bg-white text-[var(--main-color)] font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-[var(--main-color)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--main-color)] focus:ring-offset-2 active:scale-95"
          >
            Explore Rentals
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
