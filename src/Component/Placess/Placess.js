import React, { useState } from "react";
import { FaLocationArrow, FaArrowCircleRight } from "react-icons/fa";
import "./Placess.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Loading from "../../Shared/Loading/Loading";

const Placess = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/places")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);

  if (!places) {
    return <Loading></Loading>;
  }

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
        {places.map((p) => (
          <div
            key={p._id}
            className="w-full card lg:w-96 md:w-80 border  rounded overflow-hidden shadow-lg"
          >
            <img className="w-full" src={p.img} alt="Mountain" />
            <div className="px-2 py-3 gap-1 flex justify-center items-center">
              <FaLocationArrow className="w-5 h-5"></FaLocationArrow>
              <p className="font-bold text-xl">{p.title}</p>
              <p className="font-bold text-xl">{p.destination}</p>
              <Link to={`/destination/${p._id}`}>
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
