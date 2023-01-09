import React from "react";
import "./PhotoGallery.css";

const PhotoGallery = ({ imageGallery }) => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/11/0b/4d/110b4d5488eb1b683a2024918d7668ce.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="pt-28 text-center">
        <h1
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
          className="text-3xl mb-2  textGradient  font-semibold"
        >
          Tour Gallery
        </h1>
        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
          className="lg:text-5xl text-center textGradient  md:text-4xl text-3xl font-bold uppercase leading-8 "
        >
          Best Tourist's Shared
        </h1>
        <h2
          className="lg:text-5xl text-center textGradient  md:text-4xl text-3xl font-bold uppercase leading-8 "
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          Photos
        </h2>
      </div>
      <div className=" px-5 pt-28 mx-auto items-center ">
        <div className="grid  grid-cols-2 grid-rows-4 grid-flow-col gap-5">
          {imageGallery.map((t) => (
            <div key={t._id} className="w-full geeks">
              <img
                src={t.img}
                alt=""
                className="inset-0 h-52 w-full object-cover object-center rounded  "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
