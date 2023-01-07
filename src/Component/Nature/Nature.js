import React from "react";
import ParticleBacground from "../ParticleBacground/ParticleBacground";
import "./Nature.css";

const nature = [
  {
    title: "  Mountain",
    details:
      "in the broadest sense, is the physical world or universe. 'Nature' can refer to the phenomena of the physical world, and also to life in general",
    img: "https://i.ibb.co/sFVKWgZ/nature-1.jpg",
  },
  {
    title: "  Mountain",
    details:
      "in the broadest sense, is the physical world or universe. 'Nature' can refer to the phenomena of the physical world, and also to life in general",
    img: "https://i.ibb.co/bdCwGcD/nature-2.jpg",
  },
  {
    title: "  Mountain",
    details:
      "in the broadest sense, is the physical world or universe. 'Nature' can refer to the phenomena of the physical world, and also to life in general",
    img: "https://i.ibb.co/FXgqBG8/nature-3.jpg",
  },
];

const Nature = () => {
  return (
    <div className="mt-28 px-5 ">
      <div className="container mx-auto">
        <ParticleBacground></ParticleBacground>
      </div>
      <div className=" text-center flex justify-center items-center flex-col">
        <div className="lg:text-6xl  md:text-4xl text-3xl font-semibold uppercase leading-8 ">
          <h1
            className="lg:text-6xl textGradient  md:text-4xl text-3xl font-semibold uppercase leading-8 "
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            LET'S ENJOY THE WONDERS OF THE
          </h1>
          <h2
            className="lg:text-6xl textGradient md:text-4xl text-3xl font-semibold uppercase leading-8 "
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
          className="text-md mt-3 text-center text-white "
        >
          At our travel agency we offer a variety of tours and destinations to
          all kinds of travelers.Here is what you can get at Travel Guide,
          <br /> regardless of your traveling needs and desires.
        </p>
      </div>
      <div className="mt-28 flex flex-wrap gap-5 justify-center items-center">
        {nature.map((n) => (
          <div className="w-full text-white bg-gradient-to-r from-blue-900 to-blue-500 lg:w-96 md:w-80 border  rounded overflow-hidden shadow-lg">
            <div className="hover:scale-110 ease-linear overflow-hidden duration-500">
              <img
                className="w-full overflow-hidden "
                src={n.img}
                alt="Mountain"
              />
            </div>
            <div className="px-6 py-4">
              <div className="flex justify-between">
                <p
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="500"
                  className="font-bold text-xl mb-2"
                >
                  {n.title}
                </p>
                <div className="flex items-center ">
                  <div className="p-5 bg-gray-200 bg-opacity-40 rounded-full"></div>
                  <div className="p-5 bg-gray-200 bg-opacity-30 rounded-full -ml-4"></div>
                </div>
              </div>
              <p
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
                className="text-white"
              >
               {n.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nature;
