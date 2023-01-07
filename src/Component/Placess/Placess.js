import React from "react";
import { FaLocationArrow, FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Placess.css";

const placess = [
  {
    id: 1,
    title: "Cox's Bazar",
    destination: "Chattogram",
    img: "https://i.ibb.co/TwS8BFB/places-1.jpg",
    
  },
  {
    id: 2,
    title: "Sundarban",
    destination: "Khulna",
    img: "https://i.ibb.co/QpkFv8d/places-2.jpg",
  },
  {
    id: 3,
    title: "Rangamati",
    destination: "Chattogram",
    img: "https://i.ibb.co/nkfx2Cy/places-3.jpg",
  },
  {
    id: 4,
    title: "Bandarban",
    destination: "Chattogram",
    img: "https://i.ibb.co/j8gQGF4/places-4.jpg",
  },
  {
    id: 5,
    title: "Sajek Valley",
    destination: "Chattogram",
    img: "https://i.ibb.co/KjpbCpj/places-5.jpg",
  },
  {
    id: 6,
    title: "Patenga beach ",
    destination: "Chattogram",
    img: "https://i.ibb.co/P6y1tnC/places-6.jpg",
  },
];

const Placess = () => {
  return (
    <div className="pt-28 px-5 bg-black">
      <div>
        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
          className="lg:text-5xl text-center textGradient  md:text-4xl text-3xl font-bold uppercase leading-8 "
        >
          Travel Most Popular Place In
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
          className="lg:text-5xl text-center textGradient  md:text-4xl text-3xl font-bold uppercase leading-8 "
        >
          Bangladesh
        </h2>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        className="flex flex-wrap justify-center items-center gap-5 mt-28"
      >
        {placess.map((p) => (
          <div
            key={p.id}
            className="w-full card lg:w-96 md:w-80 border  rounded overflow-hidden shadow-lg"
          >
            <img className="w-full" src={p.img} alt="Mountain" />
            <div className="px-2 py-3 gap-1 flex justify-center items-center">
              <FaLocationArrow className="w-5 h-5"></FaLocationArrow>
              <p className="font-bold text-xl">{p.title}</p>
              <p className="font-bold text-xl">{p.destination}</p>
              <Link to={`/destination`}>
                <FaArrowCircleRight className="w-7 h-7 m-3 cursor-pointer"></FaArrowCircleRight>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Placess;
