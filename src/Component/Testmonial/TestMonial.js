import React from "react";
import "./Testmonial.css";

const TestMonial = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.pond5.com/purple-glitter-sparkles-animation-black-footage-109137184_iconl.jpeg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="px-5 py-28"
    >
      <div className="text-center">
        <h1
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
          className="text-xl mb-2 font-semibold textGradient"
        >
          Testimonials
        </h1>
        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
          className="lg:text-5xl text-center textGradient  md:text-4xl text-3xl font-bold uppercase leading-8"
        >
          What Our Happy Customers
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
          className="lg:text-5xl text-center textGradient  md:text-4xl text-3xl font-bold uppercase leading-8"
        >
          Say About Us
        </h2>
      </div>

      <div className="pt-28">
        <div class=" mx-auto w-full overflow-hidden relative">
          <div class="w-full h-full absolute">
            <div
              class="w-1/4 h-full absolute z-50 left-0"
              style={{
                background:
                  "linear-gradient(to right, #edf2f7 0%, rgba(255, 255, 255, 0) 100% ",
              }}
            ></div>
            <div
              class="w-1/4 h-full absolute z-50 right-0"
              style={{
                background:
                  "linear-gradient(to left, #edf2f7 0%, rgba(255, 255, 255, 0) 100%",
              }}
            ></div>
          </div>

          <div
            class="carousel-items flex items-center justify-center"
            style={{
              width: "fit-content",
              animation: "carouselAnim 10s infinite alternate linear",
            }}
          >
            <div
              class="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg"
              style={{ width: "270px" }}
            >
              <span class="text-teal-400 font-bold text-xl mb-3">
                Kabir Sing
              </span>
              <img
                class="h-16 w-16 rounded-full shadow-2xl"
                src="https://pbs.twimg.com/profile_images/830533062807191552/TbkWKnnv_400x400.jpg"
                alt="Img"
              />
              <p class="mt-3 text-gray-600 text-center">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                quibusdam!"
              </p>
            </div>

            <div
              class="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg"
              style={{ width: "270px" }}
            >
              <p class="text-teal-400 font-bold text-xl mb-3">Alex</p>
              <img
                class="h-16 w-16 rounded-full shadow-2xl"
                src="https://pbs.twimg.com/profile_images/830533062807191552/TbkWKnnv_400x400.jpg"
                alt="Img"
              />
              <p class="mt-3 text-gray-600 text-center">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                quibusdam!"
              </p>
            </div>

            <div
              class="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg"
              style={{ width: "270px" }}
            >
              <p class="text-teal-400 font-bold text-xl mb-3">Kamrul Islam</p>
              <img
                class="h-16 w-16 rounded-full shadow-2xl"
                src="https://pbs.twimg.com/profile_images/830533062807191552/TbkWKnnv_400x400.jpg"
                alt="Img"
              />
              <p class="mt-3 text-gray-600 text-center">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                quibusdam!"
              </p>
            </div>

            <div
              class="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg"
              style={{ width: "270px" }}
            >
              <p class="text-teal-400 font-bold text-xl mb-3">David Albert</p>
              <img
                class="h-16 w-16 rounded-full shadow-2xl"
                src="https://pbs.twimg.com/profile_images/830533062807191552/TbkWKnnv_400x400.jpg"
                alt="Img"
              />
              <p class="mt-3 text-gray-600 text-center">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                quibusdam!"
              </p>
            </div>

            <div
              class="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg"
              style={{ width: "270px" }}
            >
              <p class="text-teal-400 font-bold text-xl mb-3">Sujit Raihan</p>
              <img
                class="h-16 w-16 rounded-full shadow-2xl"
                src="https://pbs.twimg.com/profile_images/830533062807191552/TbkWKnnv_400x400.jpg"
                alt="Img"
              />
              <p class="mt-3 text-gray-600 text-center">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                quibusdam!"
              </p>
            </div>

            <div
              class="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg"
              style={{ width: "270px" }}
            >
              <p class="text-teal-400 font-bold text-xl mb-3">janefar</p>
              <img
                class="h-16 w-16 rounded-full shadow-2xl"
                src="https://pbs.twimg.com/profile_images/830533062807191552/TbkWKnnv_400x400.jpg"
                alt="Img"
              />
              <p class="mt-3 text-gray-600 text-center">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                quibusdam!"
              </p>
            </div>

            <div
              class="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg"
              style={{ width: "270px" }}
            >
              <p class="text-teal-400 font-bold text-xl mb-3">Sajida Rahaman</p>
              <img
                class="h-16 w-16 rounded-full shadow-2xl"
                src="https://pbs.twimg.com/profile_images/830533062807191552/TbkWKnnv_400x400.jpg"
                alt="Img"
              />
              <p class="mt-3 text-gray-600 text-center">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                quibusdam!"
              </p>
            </div>

            <div
              class="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg"
              style={{ width: "270px" }}
            >
              <p class="text-teal-400 font-bold text-xl mb-3">Sujon kumar</p>
              <img
                class="h-16 w-16 rounded-full shadow-2xl"
                src="https://pbs.twimg.com/profile_images/830533062807191552/TbkWKnnv_400x400.jpg"
                alt="Img"
              />
              <p class="mt-3 text-gray-600 text-center">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                quibusdam!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestMonial;
