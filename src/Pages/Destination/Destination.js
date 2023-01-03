import React from "react";
import PhotoGallery from "../../Component/PhotoGallery/PhotoGallery";
import TestMonial from "../../Component/Placess/TestMonial";
import Services from "../../Component/Services/Services";
import TourPackages from "../../Component/TourPackages/TourPackages";
import './Destination.css';

const Destination = () => {
  return (
    <div className="bg-white">
      <div className="relative flex gradient flex-col-reverse  lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 px-5 right-0 z-0 w-full mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0 ">
          <svg
            className="absolute left-0 hidden h-full text-green-500  transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-full  rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full "
            src="https://wallpaperaccess.com/full/902481.jpg"
            alt=""
          />
        </div>
        <div className="relative flex pt-5 flex-col items-start w-full px-5 mx-auto lg:max-w-screen-xl">
          <div className="mb-16 text-center lg:text-left lg:my-40  lg:max-w-lg lg:pr-5">
            <p className="inline-block vibrate-1  mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full ">
              Welcome to Fancy Noamd
            </p>
            <h2 className="mb-5   vibrate-1 text-4xl font-bold tracking-tight text-white leading-none ">
              Discover Your
              <br className="hidden md:block vibrate-1" />
              Favorite Place With Us
            </h2>
          </div>
        </div>
      </div>
      <PhotoGallery></PhotoGallery>
      <TourPackages></TourPackages>
      <Services></Services>
      <TestMonial></TestMonial>
    </div>
  );
};

export default Destination;
