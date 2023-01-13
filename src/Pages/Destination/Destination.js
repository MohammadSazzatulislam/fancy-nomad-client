import React, { useEffect, useState } from "react";
import PhotoGallery from "../../Component/PhotoGallery/PhotoGallery";
import TestMonial from "../../Component/Testmonial/TestMonial";
import Services from "../../Component/Services/Services";
import TourPackages from "../../Component/TourPackages/TourPackages";
import "./Destination.css";
import { useLoaderData } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const Destination = () => {
  const { name, bannerImg, imageGallery } = useLoaderData();
  const [packages, setPackages] = useState([]);

  useEffect(() => { 
    fetch(`http://localhost:5000/packages/${name}`)
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, [name]);
  

  if (!packages) {
    return <Loading></Loading>;
  }

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
            src={bannerImg}
            alt=""
          />
        </div>
        <div className="relative flex pt-5 flex-col items-start w-full px-5 mx-auto lg:max-w-screen-xl">
          <div className="mb-9 text-center lg:text-left lg:my-40  lg:max-w-lg lg:pr-5">
            <h4 className="text-center mt-5 lg:text-6xl text-4xl font-bold tracking-tight text-white leading-none ">
              <span className="mr-5">Discover</span>
              <span className="mr-5">Your</span>
              <span className="mr-5">Favorite</span>
              <span className="mr-5">Place</span>
              <span className="mr-5">With</span>
              <span>Us</span>
            </h4>
          </div>
        </div>
      </div>
      <PhotoGallery imageGallery={imageGallery}></PhotoGallery>
      <TourPackages packages={packages}></TourPackages>
      <Services></Services>
      <TestMonial></TestMonial>
    </div>
  );
};

export default Destination;
