import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Best Note App For You
            </h1>
            <p className="mb-8 leading-relaxed">
              Acclaimed as one of the most beautiful note-taking apps, Tail
              Notebook is an excellent tool for save, create, list, your notes
              and and to save your life lovable memory moments.
            </p>
            <div className="flex w-full md:justify-start justify-center items-end"></div>
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
              Neutra shabby chic ramps, viral fixie.
            </p>
            <div className="flex lg:flex-row md:flex-col">
              <button className="bg-gray-200 text-black inline-flex py-3 text-center rounded-lg items-center hover:bg-pink-500 focus:outline-none">
                <span className="mx-4 flex items-center flex-col leading-none text-center">
                  <Link
                    to="/login"
                    className="text-center py-2 title-font font-medium"
                  >
                    Get Started
                  </Link>
                </span>
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-xl"
              alt="hero"
              src="/hero.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
