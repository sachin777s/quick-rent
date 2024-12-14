import React, { useState } from "react";
import "../App.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="w-full">
      <nav className="py-2 px-2 sm:px-4 mx-auto max-w-[1680px] h-[65px] shadow-md flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            className="w-[40px] sm:w-[50px]"
            src="/quick-rent-logo.png"
            alt="QuickRent Logo"
          />
          <span className="font-semibold text-xl sm:text-2xl">QuickRent</span>
        </div>

        <div className="sm:hidden flex items-center">
          <button
            className="text-[var(--main-color)] text-lg font-semibold"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <IoMdClose size={32} />
            ) : (
              <RxHamburgerMenu size={32} />
            )}
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => setIsLoginModalOpen(true)}
            className="px-8 py-2 rounded-full border-2 border-[var(--main-color)] text-[var(--main-color)] transition-all duration-300 hover:text-white hover:bg-[var(--main-color)] hover:shadow-[0_0_11px_-3px_var(--main-color)] active:scale-95"
          >
            Login
          </button>
          <button
            onClick={() => setIsSignupModalOpen(true)}
            className="px-8 py-2 rounded-full border-2 border-[var(--main-color)] text-white bg-[var(--main-color)] transition-all duration-300 hover:bg-white hover:text-[var(--main-color)] hover:shadow-[0_0_11px_-3px_var(--main-color)] active:scale-95"
          >
            Signup
          </button>
        </div>
      </nav>

      <div
        className={`h-screen sm:hidden bg-white shadow-md fixed top-[65px] left-0 w-full z-[200] transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center gap-2 py-4">
          <button
            onClick={() => {
              setIsMenuOpen(false);
              setIsLoginModalOpen(true);
            }}
            className="min-w-[14rem] px-4 py-2 rounded-md border-2 border-[var(--main-color)] text-[var(--main-color)] text-center transition-all duration-300 hover:text-white hover:bg-[var(--main-color)] active:scale-95"
          >
            Login
          </button>
          <button
            onClick={() => {
              setIsMenuOpen(false);
              setIsSignupModalOpen(true);
            }}
            className="min-w-[14rem] px-4 py-2 rounded-md border-2 border-[var(--main-color)] text-white bg-[var(--main-color)] text-center transition-all duration-300 hover:bg-white hover:text-[var(--main-color)] active:scale-95"
          >
            Signup
          </button>
        </div>
      </div>
      {isLoginModalOpen && (
        <LoginModal setIsLoginModalOpen={setIsLoginModalOpen} />
      )}
      {isSignupModalOpen && (
        <SignupModal setIsSignupModalOpen={setIsSignupModalOpen} />
      )}
    </header>
  );
};

export default Navbar;
