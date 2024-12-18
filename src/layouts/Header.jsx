import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Permet de connaître le chemin actif

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 shadow-md">
      <nav className="px-4 lg:px-6 py-2.5 text-dark">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="mr-3 h-6 sm:h-9 w-12 bg-transparent"></div>
          <div className="flex items-center lg:order-2">
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-6 h-6 ${isMenuOpen ? "hidden" : "block"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className={`w-6 h-6 ${isMenuOpen ? "block" : "hidden"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="/"
                  onClick={() => window.scrollTo(0, 0)}
                  className={`block py-2 pr-4 pl-3 ${
                    isActive("/")
                      ? "text-white bg-primary-700"
                      : "text-dark hover:text-white transition-colors duration-200 ease-in-out"
                  } rounded lg:bg-transparent lg:p-0`}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  onClick={() => window.scrollTo(0, 0)}
                  className={`block py-2 pr-4 pl-3 ${
                    isActive("/projects")
                      ? "text-white bg-primary-700"
                      : "text-dark hover:text-white transition-colors duration-200 ease-in-out"
                  } rounded lg:bg-transparent lg:p-0`}
                >
                  Projets
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => window.scrollTo(0, 0)}
                  className={`block py-2 pr-4 pl-3 ${
                    isActive("/contact")
                      ? "text-white bg-primary-700"
                      : "text-dark hover:text-white transition-colors duration-200 ease-in-out"
                  } rounded lg:bg-transparent lg:p-0`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
