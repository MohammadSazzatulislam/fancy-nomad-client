import React from "react";
import image from '../../images/bookingImg.jpg';

const Booking = () => {
  return (
    <div
      style={{ backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
      className="p-5 bg-gray-200"
    >
      <div className="w-full lg:w-[900px] md:w-[800px] mx-auto text-white">
        <h1 className="text-5xl font-semibold mb-4">Booking Details</h1>
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
                placeholder="First Name"
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
                placeholder="Last Name"
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
                placeholder="Email "
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
              placeholder="Address"
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
                placeholder="City/Town"
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
                placeholder="Postcode/ZIP"
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
                placeholder="Country"
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
                placeholder="Nationality"
                required
                type="text"
                className=" w-full focus:outline-none bg-white rounded shadow-md p-3"
                id="nationality"
                name="nationality"
              />
            </div>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <div className="mb-2 flex-grow">
              <label
                htmlFor="checkIn"
                className="inline-block mb-2 font-medium"
              >
                Check-In-Date
              </label>
              <input
                placeholder="Check-In-Date"
                required
                type="text"
                className=" w-full focus:outline-none bg-white rounded shadow-md p-3"
                id="checkIn"
                name="checkIn"
              />
            </div>
            <div className="mb-2 flex-grow">
              <label
                htmlFor="checkOut"
                className="inline-block mb-2 font-medium"
              >
                Check-Out-Date
              </label>
              <input
                placeholder="Check-Out-Date"
                required
                type="text"
                className=" w-full focus:outline-none bg-white rounded shadow-md p-3"
                id="checkOut"
                name="checkOut"
              />
            </div>
          </div>
          <div className="mb-2 flex-grow">
            <label
              htmlFor="numberOfRoom"
              className="inline-block mb-2 font-medium"
            >
              Number Of Rooms
            </label>
            <input
              placeholder="Number Of Rooms"
              required
              type="number"
              className=" w-full focus:outline-none bg-white rounded shadow-md p-3"
              id="numberOfRoom"
              name="numberOfRoom"
            />
          </div>
          <div className="mb-2 flex-grow">
            <label
              htmlFor="numberOfPerson"
              className="inline-block mb-2 font-medium"
            >
              Number Of Person
            </label>
            <input
              placeholder="Number Of Person"
              required
              type="number"
              className=" w-full focus:outline-none bg-white rounded shadow-md p-3"
              id="numberOfPerson"
              name="numberOfPerson"
            />
          </div>
          <div className="mb-2 flex-grow">
            <label
              htmlFor="numberOfChildren"
              className="inline-block mb-2 font-medium"
            >
              Number Of Children
            </label>
            <input
              placeholder="Number Of Children"
              required
              type="number"
              className=" w-full focus:outline-none bg-white rounded shadow-md p-3"
              id="numberOfChildren"
              name="numberOfChildren"
            />
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
