import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import CustomDatepicker from "../CustomDatePicker/CustomDatePicker";
import toast from "react-hot-toast";
import { UserAuthContext } from "../../Context/AuthContext/AuthContext";

const BookingUpdate = () => {
  const { user } = useContext(UserAuthContext);
  const {
    _id,
    firstName,
    lastName,
    email,
    number,
    address,
    city,
    postCode,
    country,
    nationality,
    checkInDate,
    checkOutDate,
    rooms,
    adults,
    children,
    packageName,
    packagePrice,
    packImg,
  } = useLoaderData();

 const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "all" });

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
      rooms: data.rooms,
      adults: data.adults,
      children: data.children,
      packageName,
      packagePrice,
      packImg,
    };

    fetch(`http://localhost:5000/packageUpdate/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingPackage),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Successfully update");
          navigate("/dashboard");
        }
      });
  };

  return (
    <div className="py-16 bg-white">
      <div className="w-full  mx-auto">
        <img className="w-full h-72 rounded-sm  " src={packImg} alt="" />
        <h1 className="lg:text-5xl textGradient  md:text-4xl text-3xl font-bold uppercase leading-8 my-4 ">
          {packageName}
        </h1>
        <div className="flex items-center mb-5  ">
          <p className="text-xl font-bold text-gray-500 ">
            Price : {packagePrice}
          </p>
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
                defaultValue={firstName}
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
                defaultValue={lastName}
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
                defaultValue={number}
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
                defaultValue={email}
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
              defaultValue={address}
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
                defaultValue={city}
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
                defaultValue={postCode}
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
                defaultValue={country}
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
                defaultValue={nationality}
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
                defaultValue={checkInDate}
                control={control}
                render={({ field: { ref, ...rest } }) => (
                  <input
                    {...register("chackIn")}
                    defaultValue={checkInDate}
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
                defaultValue={checkOutDate}
                control={control}
                render={({ field: { ref, ...rest } }) => (
                  <input
                    {...register("chackOut")}
                    defaultValue={checkOutDate}
                    className="border border-blue-500 rounded-xl outline-none w-full shadow-2xl leading-3 text-md p-2"
                    type="date"
                    {...rest}
                  />
                )}
              />
            </div>
          </div>
          <div className="my-7 flex-grow relative ">
            <span className=" uppercase pointer-events-none left-0  leading-3 text-gray-400 font-semibold ">
              Number Of rooms
            </span>
            <input
              {...register("rooms", { required: true })}
              defaultValue={rooms}
              className="border border-blue-500 rounded-xl outline-none w-full shadow-2xl leading-3 text-md p-2"
              type="number"
              name="rooms"
            />
          </div>
          <div className="my-7 flex-grow relative ">
            <span className=" uppercase pointer-events-none left-0  leading-3 text-gray-400 font-semibold ">
              number of adults
            </span>
            <input
              {...register("adults", { required: true })}
              defaultValue={adults}
              className="border border-blue-500 rounded-xl outline-none w-full shadow-2xl leading-3 text-md p-2"
              type="number"
              name="adults"
            />
          </div>
          <div className="my-7 flex-grow relative ">
            <span className=" uppercase pointer-events-none left-0  leading-3 text-gray-400 font-semibold ">
              Number Of children
            </span>
            <input
              {...register("children", { required: true })}
              defaultValue={children}
              className="border border-blue-500 rounded-xl outline-none w-full shadow-2xl leading-3 text-md p-2"
              type="number"
              name="children"
            />
          </div>
          <input
            className="mt-4 mb-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold px-3 py-2 w-full outline-none rounded-xl"
            type="submit"
            value="update"
          />
        </form>
      </div>
    </div>
  );
};

export default BookingUpdate;
