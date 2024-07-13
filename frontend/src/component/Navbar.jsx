import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const goto = useNavigate();
  const rubymama = () => {
    localStorage.clear();
    goto("/login", { replace: true });
  };

  return (
    <div>
      <header className="text-pink-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <div className="block items-center md:flex">
            <Link
              to="/"
              className="flex cursor-pointer title-font font-medium items-center text-center justify-center text-pink-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">TailNotes</span>
            </Link>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-center text-black">
              <Link
                to="/"
                className="text-center md:ml-8 mx-2 md:mx-2 my-4 md:my-0 md:mt-[4px] cursor-pointer hover:text-pink-500"
              >
                Home
              </Link>
              <Link
                to="/note"
                className="text-center mx-2 md:mx-2 my-2 md:my-0 md:mt-[4px] cursor-pointer hover:text-pink-500"
              >
                Notes
              </Link>
              <Link
                to="/about"
                className="text-center mx-2 md:mx-2 my-2 md:my-0 md:mt-[4px] cursor-pointer hover:text-pink-500"
              >
                About
              </Link>
            </nav>
          </div>
          {localStorage.getItem("token") ? (
            <button
              onClick={rubymama}
              className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Logout
            </button>
          ) : (
            <div>
              <Link
                to="/login"
                type="button"
                className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Login
              </Link>
              <Link
                to="/signup"
                type="button"
                className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
