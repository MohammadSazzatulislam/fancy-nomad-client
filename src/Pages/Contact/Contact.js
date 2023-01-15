import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./Contact.css";

const Contact = () => {
  const position = [22.356852, 91.78318];
  return (
    <div className="pb-28 pt-5 px-5 bg-black text-white ">
      <div className="relative w-full   ">
        <img
          className="w-full rounded h-[350px]"
          src="https://us.123rf.com/450wm/christianchan/christianchan1906/christianchan190601499/christianchan190601499.jpg?ver=6"
          alt=""
        />
        <div className="absolute  bg-black bg-opacity-20  top-0 w-full h-[350px] "></div>
        <h1 className="text-2xl absolute top-1/2 text-center h-[350px] md:text-4xl lg:text-5xl w-full font-semibold uppercase italic ">
          Contact Us
        </h1>
      </div>
      <div className="mt-28 w-full  mx-auto flex flex-col-reverse lg:flex-row md:flex-row rounded-md glass justify-center items-center gap-3">
        <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
        <div className="lg:w-1/2 md:w-1/2 w-full p-4 ">
          <form>
            <div className="flex gap-2 my-7 justify-center items-center">
              <div className=" flex-grow relative inputBox">
                <input
                  className="bg-transparent text-white border-none outline-none w-full shadow-none px-2 pb-2 leading-3 text-md"
                  required
                  type="text"
                  name="name"
                />
                <span className="absolute uppercase pointer-events-none left-0  leading-3 text-white font-semibold ">
                  Name
                </span>
                <i className="absolute left-0 bottom-0 w-full bg-white overflow-hidden h-1"></i>
              </div>
              <div className="flex-grow relative inputBox">
                <input
                  className="bg-transparent text-white border-none outline-none w-full shadow-none px-2 pb-2 leading-3 text-md"
                  required
                  type="email"
                  name="email"
                />
                <span className="absolute uppercase pointer-events-none left-0  leading-3 text-white font-semibold ">
                  Email
                </span>
                <i className="absolute left-0 bottom-0 w-full bg-white overflow-hidden h-1"></i>
              </div>
            </div>
            <div className=" flex-grow relative inputBox">
              <input
                className="bg-transparent text-white border-none outline-none w-full shadow-none px-2 pb-2 leading-3 text-md"
                required
                type="number"
                name="phone"
              />
              <span className="absolute uppercase pointer-events-none left-0  leading-3 text-white font-semibold ">
                Phone
              </span>
              <i className="absolute left-0 bottom-0 w-full bg-white overflow-hidden h-1"></i>
            </div>
            <div className="my-7 relative inputBox ">
              <textarea
                required
                type="text"
                className="bg-transparent text-white border-none outline-none w-full shadow-none px-2 pb-2 leading-3 text-md"
                name="message"
                cols="10"
                rows="5"
              ></textarea>
              <span className="absolute uppercase pointer-events-none left-0  leading-3 text-white font-semibold ">
                Your Message
              </span>
              <i className="absolute left-0 bottom-0 w-full bg-white overflow-hidden h-1"></i>
            </div>
            <button
              type="submit"
              className="w-full  py-2 bg-blue-600 text-white font-semibold text-md leading-tight uppercase rounded shadow-2xl hover:bg-blue-700 "
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
