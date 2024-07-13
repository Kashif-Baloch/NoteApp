"use client";
import { React, useEffect } from "react";

const Modal = (props) => {
  // useEffect(() => {
  //   document.body.style.overflowY = "hidden";
  //   return () => {
  //     document.body.style.overflowY = "scroll";
  //   }
  // }, [])

  return (
    <>
      <div className="fixed z-20 top-0 left-0 right-0 bottom-0 bg-[#00000061] h-full w-full">
        <div
          aria-hidden="false"
          className="flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow white:bg-gray-700">
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-400">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-black self-center text-center">
                  Edit Note
                </h3>
                <button
                  onClick={props.closeIte}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only"></span>
                </button>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-1/2">
                      <div className="relative">
                        <label
                          htmlFor="etitle"
                          className="leading-7 text-sm text-gray-500"
                        >
                          Title
                        </label>
                        <input
                          onChange={props.onChange}
                          type="text"
                          id="etitle"
                          name="etitle"
                          className="w-full  bg-opacity-40 rounded border border-gray-400 focus:border-pink-500 focus:bg-pink-100 focus:ring-2 focus:ring-pink-100 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          value={props.value.etitle}
                          required
                        />
                      </div>
                    </div>
                    <div className="p-2 w-1/2">
                      <div className="relative">
                        <label
                          htmlFor="etag"
                          className="leading-7 text-sm text-gray-500"
                        >
                          Tag
                        </label>
                        <input
                          onChange={props.onChange}
                          type="text"
                          id="etag"
                          name="etag"
                          value={props.value.etag}
                          className="w-full  bg-opacity-40 rounded border border-gray-400 focus:border-pink-500 focus:bg-pink-100 focus:ring-2 focus:ring-pink-100 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          required
                        />
                      </div>
                    </div>
                    <div className="p-2 w-full">
                      <div className="relative">
                        <label
                          htmlFor="edescription"
                          className="leading-7 text-sm text-gray-500"
                        >
                          Description
                        </label>
                        <textarea
                          value={props.value.edescription}
                          onChange={props.onChange}
                          id="edescription"
                          name="edescription"
                          className="w-full  bg-opacity-40 rounded border border-gray-400 focus:border-pink-500 focus:bg-pink-100 focus:ring-2 focus:ring-pink-100 h-32 text-base outline-none text-gray-500 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-400">
                <button
                  type="button"
                  className="text-white bg-pink-400 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-400 dark:hover:bg-blue-700 dark:focus:ring-pink-500"
                  onClick={props.runHandler}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
