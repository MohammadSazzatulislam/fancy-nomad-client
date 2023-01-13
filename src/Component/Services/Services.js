import React from "react";
import { FaDollarSign, FaBed, FaBook, FaHotdog } from "react-icons/fa";

const Services = () => {
  return (
    <div
      
      className="pt-28 bg-black px-5"
    >
      <div>
        <h1
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          className="text-xl font-semibold textGradient"
        >
          Services
        </h1>
        <h1
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          className="lg:text-5xl textGradient  md:text-4xl text-3xl font-bold uppercase leading-8"
        >
          What We Offer For You
        </h1>
      </div>
      <div className="pt-28 flex gap-4 flex-wrap justify-center items-center">
        {/* card 1 */}
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-center your-element  w-full p-10 flex flex-col gap-4 justify-center items-center md:w-72 lg:w-80 shadow-2xl rounded-sm bg-white "
        >
          <FaDollarSign className="w-16 p-2 h-16 bg-green-700 text-white rounded-full"></FaDollarSign>
          <h1 className="text-xl font-semibold">Lowest Prices</h1>
          <p>
            Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam
            nonumy
          </p>
        </div>
        {/* card 1 */}
        {/* card 2 */}
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-center w-full p-10 flex flex-col gap-4 justify-center items-center md:w-72 lg:w-80 shadow-2xl rounded-sm bg-white "
        >
          <FaBed className="w-16 p-2 h-16 bg-green-700 text-white rounded-full"></FaBed>
          <h1 className="text-xl font-semibold">Delux Room</h1>
          <p>
            Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam
            nonumy
          </p>
        </div>
        {/* card 2 */}
        {/* card 3 */}
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-center w-full p-10 flex flex-col gap-4 justify-center items-center md:w-72 lg:w-80 shadow-2xl rounded-sm bg-white "
        >
          <FaHotdog className="w-16 p-2 h-16 bg-green-700 text-white rounded-full"></FaHotdog>
          <h1 className="text-xl font-semibold">Delicoius Food</h1>
          <p>
            Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam
            nonumy
          </p>
        </div>
        {/* card 3 */}
        {/* card 4 */}
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-center w-full p-10 flex flex-col gap-4 justify-center items-center md:w-72 lg:w-80 shadow-2xl rounded-sm bg-white "
        >
          <FaBook className="w-16 p-2 h-16 bg-green-700 text-white rounded-full"></FaBook>
          <h1 className="text-xl font-semibold">Easy Booking</h1>
          <p>
            Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam
            nonumy
          </p>
        </div>
        {/* card 4 */}
      </div>
    </div>
  );
};

export default Services;
