import React from "react";

const Nature = () => {
  return (
    <div className="my-28 px-5">
      <div className=" text-center flex justify-center items-center flex-col">
        <h1 className="lg:text-6xl  md:text-4xl text-3xl font-semibold uppercase leading-8 ">
          LET'S ENJOY THE WONDERS OF THE NATURE TOGETHER!
        </h1>
        <p className="text-md mt-3">
          At our travel agency we offer a variety of tours and destinations to
          all kinds of travelers. Here is what you can get at Travel Guide,
          regardless of your traveling needs and desires.
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
            <div className="font-bold text-xl mb-2">Mountain</div>
            <p className="text-gray-700 text-base">
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
            <div className="font-bold text-xl mb-2">Mountain</div>
            <p className="text-gray-700 text-base">
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
            <div className="font-bold text-xl mb-2">Mountain</div>
            <p className="text-gray-700 text-base">
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
