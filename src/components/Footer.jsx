import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[var(--main-color)] text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:items-start">
          <div className="max-w-lg text-center lg:text-left">
            <h3 className="text-2xl font-semibold">QuickRent</h3>
            <p className="mt-2 text-sm">
              Your one-stop solution for renting gadgets with ease. From laptops
              to cameras, we provide affordable and flexible rental options for
              all your needs.
            </p>
          </div>

          <div className="flex flex-col text-center lg:text-left space-y-4 lg:space-y-0 lg:space-x-16 lg:flex-row">
            <div>
              <h4 className="font-semibold text-lg">Quick Links</h4>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="#home"
                    className="hover:text-[var(--hover-color)] transition"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-[var(--hover-color)] transition"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#gadgets"
                    className="hover:text-[var(--hover-color)] transition"
                  >
                    Gadgets
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-[var(--hover-color)] transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Support</h4>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--hover-color)] transition"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--hover-color)] transition"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--hover-color)] transition"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center lg:text-right">
            <h4 className="font-semibold text-lg">Follow Us</h4>
            <div className="mt-4 flex justify-center lg:justify-end space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-2xl hover:text-[var(--hover-color)] transition"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-2xl hover:text-[var(--hover-color)] transition"
              >
                <BsTwitterX />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-2xl hover:text-[var(--hover-color)] transition"
              >
                <FaSquareInstagram />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-2xl hover:text-[var(--hover-color)] transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} QuickRent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
