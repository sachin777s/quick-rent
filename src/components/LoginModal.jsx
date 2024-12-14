import React, { useEffect, useRef } from "react";

const LoginModal = ({ setIsLoginModalOpen }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsLoginModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-screen h-screen backdrop-brightness-50 z-50 flex items-center justify-center">
      <div ref={modalRef} className="py-8 min-w-[22rem] w-[40%] bg-white rounded-2xl relative">
        <button
          onClick={() => setIsLoginModalOpen(false)}
          className="p-2 w-10 h-10 text-2xl border-2  border-black rounded-full absolute right-5 top-5 flex items-center justify-center opacity-60"
        >
          x
        </button>
        <h1 className="text-center text-3xl">Login</h1>
        <form className="mx-auto w-[90%]">
          <div className="space-y-4">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[var(--main-color)] focus:border-[var(--main-color)] sm:text-sm"
              />
            </div>
            {/* Password Input */}
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
              />
            </div>
          </div>
          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember_me"
                name="remember_me"
                className="h-4 w-4 text-[var(--main-color)] border-gray-300 rounded focus:ring-[var(--main-color)]"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-[var(--main-color)] hover:text-[var(--hover-color)] transition-colors duration-300"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="mt-4 py-2 px-4 bg-[var(--main-color)] text-white font-medium text-sm rounded-md shadow-md transition-all duration-300 hover:bg-[var(--hover-color)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--main-color)] active:scale-95"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
