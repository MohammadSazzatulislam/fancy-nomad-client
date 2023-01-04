import React from "react";

const Booking = () => {
  return (
    <div className="p-5">
      <div className="w-full lg:w-[900px] md:w-[800px] mx-auto">
        <h1 className="text-5xl font-semibold mb-4">Personal Details</h1>
        <form>
          <div className="flex gap-2  justify-center items-center">
            <div className="mb-2 flex-grow ">
              <label
                htmlFor="firstName"
                className=" mb-2 inline-block font-medium"
              >
                First name
              </label>
              <input
                placeholder="Enter your First Name"
                required
                type="text"
                className=" w-full bg-white focus:outline-none rounded shadow-md p-3"
                id="firstName"
                name="firstName"
              />
            </div>
            <div className="mb-2 flex-grow">
              <label
                htmlFor="lastName"
                className=" mb-2 inline-block font-medium"
              >
                Last name
              </label>
              <input
                placeholder="Enter your last Name"
                required
                type="text"
                className=" w-full focus:outline-none bg-white rounded shadow-md p-3"
                id="lastName"
                name="lastName"
              />
            </div>
          </div>
          <div className="flex gap-2 justify-center items-center ">
            <div className="mb-2 flex-grow ">
              <label htmlFor="number" className="inline-block mb-2 font-medium">
                Phone/Mobile Number
              </label>
              <input
                placeholder="Phone/Mobile Number"
                required
                type="number"
                className=" w-full focus:outline-none bg-white rounded shadow-md p-3"
                id="number"
                name="number"
              />
            </div>
            <div className="mb-2 flex-grow">
              <label htmlFor="email" className="inline-block mb-2 font-medium">
                E-mail
              </label>
              <input
                placeholder="Enter Your Email Address"
                required
                type="email"
                className=" w-full focus:outline-none bg-white rounded shadow-md p-3"
                id="email"
                name="email"
              />
            </div>
          </div>
          <div className="mb-2 ">
            <label htmlFor="address" className="inline-block mb-2 font-medium">
              Address
            </label>
            <textarea
              placeholder="address"
              required
              type="text"
              className=" w-full focus:outline-none bg-white rounded shadow-md p-3"
              name="address"
              id="address"
              cols="10"
              rows="5"
            ></textarea>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="mb-2 flex-grow">
              <label htmlFor="city" className="inline-block mb-2 font-medium">
                City/Town
              </label>
              <input
                placeholder="Enter Your City/Town"
                required
                type="text"
                className=" w-full focus:outline-none bg-white rounded shadow-md p-3"
                id="city"
                name="city"
              />
            </div>
            <div className="mb-2 flex-grow">
              <label
                htmlFor="postcode"
                className="inline-block mb-2 font-medium"
              >
                Postcode/ZIP
              </label>
              <input
                placeholder="Enter Your  Postcode/ZIP"
                required
                type="text"
                className=" w-full focus:outline-none bg-white rounded shadow-md p-3"
                id="postcode"
                name="postcode"
              />
            </div>
            <div className="mb-2 flex-grow">
              <label
                htmlFor="country"
                className="inline-block mb-2 font-medium"
              >
                Country
              </label>
              <input
                placeholder="Enter Your country"
                required
                type="text"
                className=" w-full focus:outline-none bg-white rounded shadow-md p-3"
                id="country"
                name="country"
              />
            </div>
            <div className="mb-2 flex-grow">
              <label
                htmlFor="nationality"
                className="inline-block mb-2 font-medium"
              >
                Nationality
              </label>
              <input
                placeholder="Enter Your nationality"
                required
                type="text"
                className=" w-full focus:outline-none bg-white rounded shadow-md p-3"
                id="nationality"
                name="nationality"
              />
            </div>
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
