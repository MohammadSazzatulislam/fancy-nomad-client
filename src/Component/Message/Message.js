import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./Message.css";

const Message = () => {
  const position = [22.356852, 91.78318];
  return (
    <div className="py-28 px-5 bg-black text-white ">
      <div>
        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
          className="lg:text-5xl text-center textGradient  md:text-4xl text-3xl font-bold uppercase leading-8 "
        >
          If You Have Any Question
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
          className="lg:text-5xl text-center textGradient  md:text-4xl text-3xl font-bold uppercase leading-8 "
        >
          Drop A Message
        </h2>
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
                type="text"
                name="subject"
              />
              <span className="absolute uppercase pointer-events-none left-0  leading-3 text-white font-semibold ">
                Subject
              </span>
              <i className="absolute left-0 bottom-0 w-full bg-white overflow-hidden h-1"></i>
            </div>
            <div className="my-7 relative inputBox ">
              <textarea
                required
                type="text"
                className="bg-transparent text-white border-none outline-none w-full shadow-none px-2 pb-2 leading-3 text-md"
                name="address"
                cols="10"
                rows="5"
              ></textarea>
              <span className="absolute uppercase pointer-events-none left-0  leading-3 text-white font-semibold ">
                address
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

export default Message;
