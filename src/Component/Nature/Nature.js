import React from "react";
import ParticleBacground from "../ParticleBacground/ParticleBacground";

const Nature = () => {
  return (
    <div className="my-28 px-5">
      <ParticleBacground></ParticleBacground>
      <div className=" text-center flex justify-center items-center flex-col">
        <div className="lg:text-6xl  md:text-4xl text-3xl font-semibold uppercase leading-8 ">
          <h1
            className="lg:text-6xl  md:text-4xl text-3xl font-semibold uppercase leading-8 "
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            LET'S ENJOY THE WONDERS OF THE
          </h1>
          <h2
            className="lg:text-6xl  md:text-4xl text-3xl font-semibold uppercase leading-8 "
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            NATURE TOGETHER!
          </h2>
        </div>
        <p
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
          className="text-md mt-3 text-center"
        >
          At our travel agency we offer a variety of tours and destinations to
          all kinds of travelers.Here is what you can get at Travel Guide, <br /> regardless of
          your traveling needs and desires.
        </p>
      </div>
      <div className="mt-28 flex flex-wrap gap-5 justify-center items-center">
        {/* <!--Card 1--> */}
        <div className="w-full lg:w-96 md:w-80 border  rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1590603740183-980e7f6920eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y294cyUyMGJhemFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="Mountain"
          />
          <div className="px-6 py-4">
            <p
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
              className="font-bold text-xl mb-2"
            >
              Mountain
            </p>
            <p
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
              className="text-gray-700 text-base"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        {/* <!--Card 1--> */}
        {/* <!--Card 2--> */}
        <div className="w-full lg:w-96 md:w-80 border rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4 ">
            <p
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
              className="font-bold text-xl mb-2"
            >
              Mountain
            </p>
            <p
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
              className="text-gray-700 text-base"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1590603740183-980e7f6920eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y294cyUyMGJhemFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="Mountain"
          />
        </div>
        {/* <!--Card 2--> */}
        {/* <!--Card 3--> */}
        <div className="w-full lg:w-96 md:w-80 border rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1590603740183-980e7f6920eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y294cyUyMGJhemFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="Mountain"
          />
          <div className="px-6 py-4">
            <p
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
              className="font-bold text-xl mb-2"
            >
              Mountain
            </p>
            <p
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
              className="text-gray-700 text-base"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        {/* <!--Card 3--> */}
      </div>
    </div>
  );
};

export default Nature;
