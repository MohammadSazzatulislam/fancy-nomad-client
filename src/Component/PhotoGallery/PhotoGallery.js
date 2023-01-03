import React from "react";
import "./PhotoGallery.css";

const PhotoGallery = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/11/0b/4d/110b4d5488eb1b683a2024918d7668ce.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
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
              src="https://c0.wallpaperflare.com/preview/263/479/659/boat-bangladesh-saint-martin-island-golden-hour.jpg"
              alt=""
              className="inset-0 h-full w-full object-cover object-center rounded  "
            />
          </div>
          <div className="w-full col-span-2 row-span-2 geeks">
            <img
              src="http://photos.tourtoday.com.bd/wp-content/uploads/2017/02/saint-martin-04.jpg"
              alt=""
              className="inset-0 h-full w-full object-cover object-center rounded  "
            />
          </div>
          <div className="w-full geeks ">
            <img
              src="https://images.unsplash.com/photo-1587302525159-2363f54affd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y294JTIwYmF6YXIlMjBzZWElMjBiZWFjaHxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt=""
              className="inset-0 h-full w-full object-cover object-center rounded  "
            />
          </div>
          <div className="w-full geeks">
            <img
              src="https://c0.wallpaperflare.com/preview/721/1021/133/sunset-sea-beach-cox-s-bazar-beach-sunset.jpg"
              alt=""
              className="inset-0 h-full w-full object-cover object-center rounded  "
            />
          </div>
          <div className="w-full col-span-2 row-span-2 geeks">
            <img
              src="https://wallpapers.com/images/hd/bangladesh-cox-bazar-city-wqmxyq0k5qwmpa25.jpg"
              alt=""
              className="inset-0 h-full w-full object-cover object-center rounded  "
            />
          </div>

          <div className="w-full col-span-2 geeks">
            <img
              src="https://bdwallpapergallery.files.wordpress.com/2012/04/beauty-of-coxbazar.jpg"
              alt=""
              className="inset-0 h-full w-full object-cover object-center rounded  "
            />
          </div>
          <div className="w-full geeks">
            <img
              src="https://wallpapercave.com/wp/wp10812268.jpg"
              alt=""
              className="inset-0 h-full w-full object-cover object-center rounded  "
            />
          </div>
          <div className="w-full geeks">
            <img
              src="https://i.pinimg.com/originals/18/9a/28/189a28c6932795435581a77158970aa1.jpg"
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
