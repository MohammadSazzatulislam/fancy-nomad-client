import React from "react";
import Carousel from "../Carousel/Carousel";
import bgvideo from "../../video/v.mp4";

const News = () => {
  return (
    <div className=" relative  mx-auto w-full h-screen ">
      <div className="relative">
        <video
          className="w-full h-screen object-cover overflow-hidden "
          src={bgvideo}
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute lg:top-8 md:top-3 top-0 lg:px-5 md:px-5 px-5 py-5">
          <p className="lg:text-6xl md:text-4xl text-3xl font-semibold uppercase leading-8 text-white">
            COX'S BUZZER
          </p>
          <p className=" text-md  leading-5 text-white w-full lg:max-w-lg md:max-w-md mt-3 ">
            The beach in Cox's Bazar has a gentle slope and with an unbroken
            length of 155 km (96 mi) it is often termed the "longest natural
            unbroken sea beach" in the world.
          </p>
          <div className="pt-4">
            <button className=" flex gap-2 justify-center items-center px-3 py-2 bg-blue-600 hover:bg-blue-700 border-none rounded-sm text-white font-semibold">
              Booking
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="absolute w-full mx-auto flex items-center  md:bottom-0 lg:right-0 lg:top-0 lg:w-2/4 lg:h-screen h-3/4 md:h-3/4 bottom-0 p-5 ">
          <Carousel></Carousel>
        </div>
      </div>
    </div>
  );
};

export default News;
