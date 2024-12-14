import React, { useEffect, useRef, useState } from "react";

const SignupModal = ({ setIsSignupModalOpen }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsSignupModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-screen h-screen backdrop-brightness-50 z-10 flex items-center justify-center">
      <div
        ref={modalRef}
        className="px-2 sm:px-4 py-8 min-w-[22rem] w-[40%] bg-white rounded-2xl relative"
      >
        <button
          onClick={() => setIsSignupModalOpen(false)}
          className="p-2 w-10 h-10 text-2xl border-2  border-black rounded-full absolute right-5 top-5 flex items-center justify-center opacity-60"
        >
          x
        </button>
        <h1 className="text-center text-3xl">Sign up</h1>
        <form className="space-y-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[var(--main-color)] focus:border-[var(--main-color)] sm:text-sm"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[var(--main-color)] focus:border-[var(--main-color)] sm:text-sm"
              placeholder="Enter your email"
            />
          </div>
          {/* Mobile Number */}
          <div>
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              required
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[var(--main-color)] focus:border-[var(--main-color)] sm:text-sm"
              placeholder="Enter your mobile number"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[var(--main-color)] focus:border-[var(--main-color)] sm:text-sm"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[var(--main-color)] focus:border-[var(--main-color)] sm:text-sm"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Password Mismatch Error (Optional) */}
          {password && confirmPassword && password !== confirmPassword && (
            <p className="text-sm text-red-600">Passwords do not match</p>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="py-2 px-4 bg-[var(--main-color)] text-white font-medium text-sm rounded-md shadow-md transition-all duration-300 hover:bg-[var(--hover-color)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--main-color)] active:scale-95"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
