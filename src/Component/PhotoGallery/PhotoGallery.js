import React from "react";
import "./PhotoGallery.css";

const PhotoGallery = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/11/0b/4d/110b4d5488eb1b683a2024918d7668ce.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
      }}
    >
      <div className="pt-28 text-center">
        <h1
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
          className="text-3xl mb-2  textGradient  font-semibold"
        >
          Tour Gallery
        </h1>
        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
          className="lg:text-5xl text-center textGradient  md:text-4xl text-3xl font-bold uppercase leading-8 "
        >
          Best Tourist's Shared
        </h1>
        <h2
          className="lg:text-5xl text-center textGradient  md:text-4xl text-3xl font-bold uppercase leading-8 "
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          Photos
        </h2>
      </div>
      <div className="container lg:px-5 px-5 pt-28 mx-auto items-center ">
        <div className="grid  grid-cols-4 grid-rows-4 grid-flow-col gap-2">
          <div className="w-full row-span-2 geeks">
            <img
              src="https://images.unsplash.com/photo-1432457990754-c8b5f21448de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              alt=""
              className="inset-0 h-full w-full object-cover object-center rounded  "
            />
          </div>
          <div className="w-full col-span-2 row-span-2 geeks">
            <img
              src="https://images.unsplash.com/photo-1586921829167-409624a3734a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
              className="inset-0 h-full w-full object-cover object-center rounded  "
            />
          </div>
          <div className="w-full geeks ">
            <img
              src="https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
              className="inset-0 h-full w-full object-cover object-center rounded  "
            />
          </div>
          <div className="w-full geeks">
            <img
              src="https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
              className="inset-0 h-full w-full object-cover object-center rounded  "
            />
          </div>
          <div className="w-full col-span-2 row-span-2 geeks">
            <img
              src="https://images.unsplash.com/photo-1586921829167-409624a3734a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
              className="inset-0 h-full w-full object-cover object-center rounded  "
            />
          </div>

          <div className="w-full col-span-2 geeks">
            <img
              src="https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
              className="inset-0 h-full w-full object-cover object-center rounded  "
            />
          </div>
          <div className="w-full geeks">
            <img
              src="https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
              className="inset-0 h-full w-full object-cover object-center rounded  "
            />
          </div>
          <div className="w-full geeks">
            <img
              src="https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
              className="inset-0 h-full w-full object-cover object-center rounded  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
