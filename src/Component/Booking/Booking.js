import React, { useState } from "react";
import image from "../../images/bookingImg.jpg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Booking.css";
import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { UserAuthContext } from "../../Context/AuthContext/AuthContext";
import { useForm } from "react-hook-form";

const Booking = () => {
  const { packImg, packTitle, price } = useLoaderData();
  const { user } = useContext(UserAuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const bookingPackage = {
      userName: data.firstName + " " + data.lastName,
      email: user?.email,
      number: data.number,
      location: data.address,
      city: data.city,
      post: data.postcode,
      country: data.country,
      nationality: data.nationality,
      checkInDate: data.checkIn,
      checkOutDate: data.checkOut,
      rooms: data.rooms,
      adults: data.adults,
      children: data.children,
    };

    console.log(bookingPackage);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="p-5 bg-gray-200"
    >
      <div className="w-full  mx-auto text-white">
        <img className="w-full h-72 rounded-sm  " src={packImg} alt="" />
        <h1 className="lg:text-5xl textGradient  md:text-4xl text-3xl font-bold uppercase leading-8 my-4 ">
          {packTitle}
        </h1>
        <div className="flex items-center mb-5  ">
          <p className="text-xl font-bold  textGradient">Price : {price}</p>
          <span className="font-semibold  text-base textGradient">/night</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-2 my-7 justify-center items-center">
            <div className=" flex-grow relative inputBox">
              <input
                {...register("firstName", { required: true })}
                className="bg-transparent text-white border-none outline-none w-full shadow-none px-2 pb-2 leading-3 text-md"
                type="text"
                name="firstName"
              />
              <span className="absolute uppercase pointer-events-none left-0  leading-3 text-gray-400 font-semibold ">
                First name
              </span>
              <i className="absolute left-0 bottom-0 w-full bg-white overflow-hidden h-1"></i>
            </div>
            <div className="flex-grow relative inputBox">
              <input
                {...register("lastName", { required: true })}
                className="bg-transparent text-white border-none outline-none w-full shadow-none px-2 pb-2 leading-3 text-md"
                type="text"
                name="lastName"
              />
              <span className="absolute uppercase pointer-events-none left-0  leading-3 text-gray-400 font-semibold ">
                Last name
              </span>
              <i className="absolute left-0 bottom-0 w-full bg-white overflow-hidden h-1"></i>
            </div>
          </div>
          <div className="flex gap-2 my-7 justify-center items-center ">
            <div className=" flex-grow relative inputBox">
              <input
                {...register("number", { required: true })}
                className="bg-transparent text-white border-none outline-none w-full shadow-none px-2 pb-2 leading-3 text-md"
                type="number"
                name="number"
              />
              <span className="absolute uppercase pointer-events-none left-0  leading-3 text-gray-400 font-semibold ">
                Phone/Mobile Number
              </span>
              <i className="absolute left-0 bottom-0 w-full bg-white overflow-hidden h-1"></i>
            </div>
            <div className=" flex-grow relative inputBox">
              <input
                defaultValue={user?.email}
                readOnly
                className="bg-transparent text-white border-none outline-none w-full shadow-none px-2 pb-2 leading-3 text-md"
                type="email"
                name="email"
              />
              <span className="absolute uppercase pointer-events-none left-0  leading-3 text-gray-400 font-semibold ">
                Email
              </span>
              <i className="absolute left-0 bottom-0 w-full bg-white overflow-hidden h-1"></i>
            </div>
          </div>
          <div className="my-7 relative inputBox ">
            <textarea
              {...register("address", { required: true })}
              type="text"
              className="bg-transparent text-white border-none outline-none w-full shadow-none px-2 pb-2 leading-3 text-md"
              name="address"
              cols="10"
              rows="5"
            ></textarea>
            <span className="absolute uppercase pointer-events-none left-0  leading-3 text-gray-400 font-semibold ">
              address
            </span>
            <i className="absolute left-0 bottom-0 w-full bg-white overflow-hidden h-1"></i>
          </div>
          <div className="flex my-7 justify-center items-center gap-2">
            <div className=" flex-grow relative inputBox">
              <input
                {...register("city", { required: true })}
                className="bg-transparent text-white border-none outline-none w-full shadow-none px-2 pb-2 leading-3 text-md"
                type="text"
                name="city"
              />
              <span className="absolute uppercase pointer-events-none left-0  leading-3 text-gray-400 font-semibold ">
                city/town
              </span>
              <i className="absolute left-0 bottom-0 w-full bg-white overflow-hidden h-1"></i>
            </div>
            <div className=" flex-grow relative inputBox">
              <input
                {...register("postcode", { required: true })}
                className="bg-transparent text-white border-none outline-none w-full shadow-none px-2 pb-2 leading-3 text-md"
                type="number"
                name="postcode"
              />
              <span className="absolute uppercase pointer-events-none left-0  leading-3 text-gray-400 font-semibold ">
                Post/Zip
              </span>
              <i className="absolute left-0 bottom-0 w-full bg-white overflow-hidden h-1"></i>
            </div>
            <div className=" flex-grow relative inputBox">
              <input
                {...register("country", { required: true })}
                className="bg-transparent text-white border-none outline-none w-full shadow-none px-2 pb-2 leading-3 text-md"
                type="text"
                name="country"
              />
              <span className="absolute uppercase pointer-events-none left-0  leading-3 text-gray-400 font-semibold ">
                country
              </span>
              <i className="absolute left-0 bottom-0 w-full bg-white overflow-hidden h-1"></i>
            </div>
            <div className=" flex-grow relative inputBox">
              <input
                {...register("nationality", { required: true })}
                className="bg-transparent text-white border-none outline-none w-full shadow-none px-2 pb-2 leading-3 text-md"
                type="text"
                name="nationality"
              />
              <span className="absolute uppercase pointer-events-none left-0  leading-3 text-gray-400 font-semibold ">
                nationality
              </span>
              <i className="absolute left-0 bottom-0 w-full bg-white overflow-hidden h-1"></i>
            </div>
          </div>
          <div className="flex gap-2 my-7 justify-center items-center">
            <div className=" flex-grow relative inputBox">
              <DatePicker
                {...register("checkIn", { required: true })}
                placeholderText="Check-in-date"
                name="checkIn"
                className="bg-transparent text-white border-none outline-none w-full shadow-none px-2 pb-2 leading-3 uppercase  left-0  font-semibold "
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
              <i className="absolute left-0 bottom-0 w-full bg-white overflow-hidden h-1"></i>
            </div>
            <div className=" flex-grow relative inputBox">
              <DatePicker
                {...register("checkOut", { required: true })}
                placeholderText="Check-out-date"
                name="checkOut"
                className="bg-transparent text-white border-none outline-none w-full shadow-none px-2 pb-2 leading-3 uppercase  left-0  font-semibold "
                selected={endDate}
                onChange={(date) => setEndDate(date)}
              />
              <i className="absolute left-0 bottom-0 w-full bg-white overflow-hidden h-1"></i>
            </div>
          </div>
          <div className="my-7 flex-grow relative inputBox">
            <input
              {...register("rooms", { required: true })}
              className="bg-transparent text-white border-none outline-none w-full shadow-none px-2 pb-2 leading-3 text-md"
              type="number"
              name="rooms"
            />
            <span className="absolute uppercase pointer-events-none left-0  leading-3 text-gray-400 font-semibold ">
              Number Of rooms
            </span>
            <i className="absolute left-0 bottom-0 w-full bg-white overflow-hidden h-1"></i>
          </div>
          <div className="my-7 flex-grow relative inputBox">
            <input
              {...register("adults", { required: true })}
              className="bg-transparent text-white border-none outline-none w-full shadow-none px-2 pb-2 leading-3 text-md"
              type="number"
              name="adults"
            />
            <span className="absolute uppercase pointer-events-none left-0  leading-3 text-gray-400 font-semibold ">
              number of adults
            </span>
            <i className="absolute left-0 bottom-0 w-full bg-white overflow-hidden h-1"></i>
          </div>
          <div className="my-7 flex-grow relative inputBox">
            <input
              {...register("children", { required: true })}
              className="bg-transparent text-white border-none outline-none w-full shadow-none px-2 pb-2 leading-3 text-md"
              type="number"
              name="children"
            />
            <span className="absolute uppercase pointer-events-none left-0  leading-3 text-gray-400 font-semibold ">
              Number Of children
            </span>
            <i className="absolute left-0 bottom-0 w-full bg-white overflow-hidden h-1"></i>
          </div>
          <div className="mt-4 mb-2 ">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-3 py-2 w-full outline-none rounded-sm"
            >
              Booked
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
