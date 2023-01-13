import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./Booking.css";
import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { UserAuthContext } from "../../Context/AuthContext/AuthContext";
import { useForm } from "react-hook-form";
import CustomDatepicker from "../CustomDatePicker/CustomDatePicker";
import Loading from "../../Shared/Loading/Loading";
import toast from "react-hot-toast";

const Booking = () => {
  const { packImg, packTitle, price } = useLoaderData();
  const { user, setUpdateWishList } = useContext(UserAuthContext);
  const [roomCounter, setRoomCounter] = useState(0);
  const [adultsCounter, setAdultsCounter] = useState(0);
  const [childrenCounter, setChildrenCounter] = useState(0);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const bookingPackage = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: user?.email,
      number: data.number,
      address: data.address,
      city: data.city,
      postCode: data.postcode,
      country: data.country,
      nationality: data.nationality,
      checkInDate: data.chackIn,
      checkOutDate: data.chackOut,
      rooms: roomCounter,
      adults: adultsCounter,
      children: childrenCounter,
      packageName: packTitle,
      packagePrice: price,
      packImg,
    };

    fetch(`https://fancy-nomad-server.vercel.app/bookingPackages`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingPackage),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully booking");
          setUpdateWishList(true);
        } else {
          toast.error(data.message);
        }
      });
  };

  if (!packTitle) {
    return <Loading></Loading>;
  }

  //increase counter
  const handleRoomIncr = () => {
    setRoomCounter((count) => count + 1);
  };
  //decrease counter
  const handleRoomDecr = () => {
    setRoomCounter((count) => count - 1);
  };
  //increase counter
  const handleAdultsIncr = () => {
    setAdultsCounter((count) => count + 1);
  };
  //decrease counter
  const handleAdultsDecr = () => {
    setAdultsCounter((count) => count - 1);
  };
  //increase counter
  const handleChildrenIncr = () => {
    setChildrenCounter((count) => count + 1);
  };
  //decrease counter
  const handleChildrenDecr = () => {
    setChildrenCounter((count) => count - 1);
  };

  return (
    <div className="p-5 bg-white">
      <div className="w-full  mx-auto">
        <img className="w-full h-72 rounded-sm  " src={packImg} alt="" />
        <h1 className="lg:text-5xl textGradient  md:text-4xl text-3xl font-bold uppercase leading-8 my-4 ">
          {packTitle}
        </h1>
        <div className="flex items-center mb-5  ">
          <p className="text-xl font-bold text-gray-500 ">Price : {price}</p>
          <span className="font-semibold text-gray-500 text-base ">/night</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-2 my-7 justify-center items-center">
            <div className=" flex-grow relative ">
              <span className=" uppercase pointer-events-none left-0  leading-3 text-gray-400 font-semibold ">
                First name
              </span>
              <input
                {...register("firstName", { required: true })}
                className=" border border-blue-500 rounded-xl outline-none w-full shadow-2xl leading-3 text-md p-2 "
                type="text"
                name="firstName"
              />
            </div>
            <div className="flex-grow relative ">
              <span className=" uppercase pointer-events-none left-0  leading-3 text-gray-400 font-semibold ">
                Last name
              </span>
              <input
                {...register("lastName", { required: true })}
                className=" border border-blue-500 rounded-xl outline-none w-full shadow-2xl leading-3 text-md p-2"
                type="text"
                name="lastName"
              />
            </div>
          </div>
          <div className="flex gap-2 my-7 justify-center items-center ">
            <div className=" flex-grow relative ">
              <span className=" uppercase pointer-events-none left-0  leading-3 text-gray-400 font-semibold ">
                Phone/Mobile Number
              </span>
              <input
                {...register("number", { required: true })}
                className="border border-blue-500 rounded-xl outline-none w-full shadow-2xl leading-3 text-md p-2"
                type="number"
                name="number"
              />
            </div>
            <div className=" flex-grow relative  ">
              <span className=" uppercase pointer-events-none left-0  leading-3 text-gray-400 font-semibold ">
                Email
              </span>
              <input
                defaultValue={user?.email}
                readOnly
                disabled
                className="border border-blue-500 rounded-xl outline-none w-full shadow-2xl leading-3 text-md p-2"
                type="email"
                name="email"
              />
            </div>
          </div>
          <div className="my-7 relative  ">
            <span className=" uppercase pointer-events-none left-0  leading-3 text-gray-400 font-semibold ">
              address
            </span>
            <textarea
              {...register("address", { required: true })}
              type="text"
              className="border border-blue-500 rounded-xl outline-none w-full shadow-2xl leading-3 text-md p-2"
              name="address"
              cols="10"
              rows="5"
            ></textarea>
          </div>
          <div className="flex my-7 justify-center items-center gap-2">
            <div className=" flex-grow relative ">
              <span className=" uppercase pointer-events-none left-0  leading-3 text-gray-400 font-semibold ">
                city/town
              </span>
              <input
                {...register("city", { required: true })}
                className="border border-blue-500 rounded-xl outline-none w-full shadow-2xl leading-3 text-md p-2"
                type="text"
                name="city"
              />
            </div>
            <div className=" flex-grow relative ">
              <span className=" uppercase pointer-events-none left-0  leading-3 text-gray-400 font-semibold ">
                Post/Zip
              </span>
              <input
                {...register("postcode", { required: true })}
                className="border border-blue-500 rounded-xl outline-none w-full shadow-2xl leading-3 text-md p-2"
                type="number"
                name="postcode"
              />
            </div>
            <div className=" flex-grow relative ">
              <span className=" uppercase pointer-events-none left-0  leading-3 text-gray-400 font-semibold ">
                country
              </span>
              <input
                {...register("country", { required: true })}
                className="border border-blue-500 rounded-xl outline-none w-full shadow-2xl leading-3 text-md p-2"
                type="text"
                name="country"
              />
            </div>
            <div className=" flex-grow relative ">
              <span className=" uppercase pointer-events-none left-0  leading-3 text-gray-400 font-semibold ">
                nationality
              </span>
              <input
                {...register("nationality", { required: true })}
                className="border border-blue-500 rounded-xl outline-none w-full shadow-2xl leading-3 text-md p-2"
                type="text"
                name="nationality"
              />
            </div>
          </div>
          <div className="flex gap-2 my-7 justify-center items-center">
            <div className=" flex-grow relative ">
              <span className=" uppercase pointer-events-none left-0  leading-3 text-gray-400 font-semibold ">
                Chack In Date
              </span>
              <CustomDatepicker
                name="chackIn"
                control={control}
                render={({ field: { ref, ...rest } }) => (
                  <input
                    {...register("chackIn")}
                    className="border border-blue-500 rounded-xl outline-none w-full shadow-2xl leading-3 text-md p-2"
                    type="date"
                    {...rest}
                  />
                )}
              />
            </div>
            <div className=" flex-grow relative  ">
              <span className=" uppercase pointer-events-none left-0  leading-3 text-gray-400 font-semibold ">
                Chack Out Date
              </span>
              <CustomDatepicker
                name="chackOut"
                control={control}
                render={({ field: { ref, ...rest } }) => (
                  <input
                    {...register("chackOut")}
                    className="border border-blue-500 rounded-xl outline-none w-full shadow-2xl leading-3 text-md p-2"
                    type="date"
                    {...rest}
                  />
                )}
              />
            </div>
          </div>
          <div className="my-7 flex-grow flex flex-wrap gap-4 justify-center items-center md:justify-around lg:justify-around  relative ">
            <div className="flex border p-1 rounded-xl border-blue-500 justify-start items-center gap-2">
              <span className=" uppercase pointer-events-none left-0  leading-3 text-gray-400 font-semibold ">
                Room
              </span>
              <div className="flex gap-x-3 items-center">
                {roomCounter === 0 ? (
                  <span
                    className="px-2 py-1 cursor-pointer bg-blue-300 hover:bg-blue-400 text-white rounded border border-blue-500"
                    disabled
                  >
                    -
                  </span>
                ) : (
                  <span
                    className="px-2 cursor-pointer  bg-blue-300 hover:bg-blue-400 text-lg text-white py-0 rounded border border-blue-500"
                    onClick={handleRoomDecr}
                  >
                    -
                  </span>
                )}
                <span className="font-semibold">{roomCounter}</span>
                {roomCounter === 30 ? (
                  <span
                    className="px-2  cursor-pointer bg-blue-300 hover:bg-blue-400 text-lg text-white py-0 rounded border border-blue-500"
                    disabled
                  >
                    +
                  </span>
                ) : (
                  <span
                    className="px-2 cursor-pointer bg-blue-300 hover:bg-blue-400 text-lg text-white py-0 rounded border border-blue-500"
                    onClick={handleRoomIncr}
                  >
                    +
                  </span>
                )}
              </div>
            </div>
            <div className="flex  border p-1 rounded-xl border-blue-500 justify-start items-center gap-2">
              <span className=" uppercase pointer-events-none left-0  leading-3 text-gray-400 font-semibold ">
                Adults
              </span>
              <div className="flex gap-x-3 items-center">
                {adultsCounter === 0 ? (
                  <span
                    className="px-2 cursor-pointer bg-blue-300 hover:bg-blue-400 text-lg text-white py-0 rounded border border-blue-500"
                    disabled
                  >
                    -
                  </span>
                ) : (
                  <span
                    className="px-2 cursor-pointer bg-blue-300 hover:bg-blue-400 text-lg text-white py-0 rounded border border-blue-500"
                    onClick={handleAdultsDecr}
                  >
                    -
                  </span>
                )}
                <span className="font-semibold">{adultsCounter}</span>
                {adultsCounter === 30 ? (
                  <span
                    className="px-2 cursor-pointer bg-blue-300 hover:bg-blue-400 text-lg text-white py-0 rounded border border-blue-500"
                    disabled
                  >
                    +
                  </span>
                ) : (
                  <span
                    className="px-2 cursor-pointer bg-blue-300 hover:bg-blue-400 text-lg text-white py-0 rounded border border-blue-500"
                    onClick={handleAdultsIncr}
                  >
                    +
                  </span>
                )}
              </div>
            </div>
            <div className="flex  border p-1 rounded-xl border-blue-500 justify-start items-center gap-2">
              <span className=" uppercase pointer-events-none left-0  leading-3 text-gray-400 font-semibold ">
                children
              </span>
              <div className="flex gap-x-3 items-center">
                {childrenCounter === 0 ? (
                  <span
                    className="px-2 cursor-pointer bg-blue-300 hover:bg-blue-400 text-lg text-white py-0 rounded border border-blue-500"
                    disabled
                  >
                    -
                  </span>
                ) : (
                  <span
                    className="px-2 cursor-pointer bg-blue-300 hover:bg-blue-400 text-lg text-white py-0 rounded border border-blue-500"
                    onClick={handleChildrenDecr}
                  >
                    -
                  </span>
                )}
                <span className="font-semibold">{childrenCounter}</span>
                {childrenCounter === 10 ? (
                  <span
                    className="px-2 cursor-pointer bg-blue-300 hover:bg-blue-400 text-lg text-white py-0 rounded border border-blue-500"
                    disabled
                  >
                    +
                  </span>
                ) : (
                  <span
                    className="px-2 cursor-pointer bg-blue-300 hover:bg-blue-400 text-lg text-white py-0 rounded border border-blue-500"
                    onClick={handleChildrenIncr}
                  >
                    +
                  </span>
                )}
              </div>
            </div>
          </div>
          <input
            className="mt-4 mb-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold px-3 py-2 w-full outline-none rounded-xl"
            type="submit"
            value="Booked"
          />
        </form>
      </div>
    </div>
  );
};

export default Booking;
