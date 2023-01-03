import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

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
        <div className="mx-auto  h-[300px] flex justify-center">
          <div className=" w-full h-[300px] ">
            {/* Carousel for Small-Sized Screen */}
            <CarouselProvider
              className="relative block sm:hidden"
              naturalSlideWidth={100}
              isIntrinsicHeight={true}
              totalSlides={3}
              visibleSlides={1}
              step={1}
              infinite={true}
            >
              <div className="js-flickity  h-[300px] flex justify-center items-center">
                <ButtonBack
                  role="button"
                  aria-label="slide backward"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                  id="prev"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 1L1 7L7 13"
                      stroke="black"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonBack>
                <Slider>
                  <Slide index={0}>
                    <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                      <div className="relative w-full h-full lg:block hidden">
                        <img
                          src="https://i.ibb.co/VSsN4Jt/carousel-2.png"
                          alt="sitting area"
                          className="object-center object-cover w-full h-[300px]"
                        />
                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                          <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                            Lounge Interior
                          </h1>
                        </div>
                      </div>
                      <div className="relative w-full h-full lg:hidden">
                        <img
                          src="https://i.ibb.co/tMB5CZW/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-3-1.png"
                          alt="sitting area"
                          className="object-center object-cover w-full h-[300px]"
                        />
                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                          <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                            Lounge Interior
                          </h1>
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                      <div className="relative w-full h-full lg:block hidden">
                        <img
                          src="https://i.ibb.co/phw8yGZ/sven-brandsma-Qz6-Zx4-Rjd-D8-unsplash-1.png"
                          alt="chairs"
                          className="object-center object-cover w-full h-[300px]"
                        />
                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                          <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                            Lounge Interior
                          </h1>
                        </div>
                      </div>
                      <div className="relative w-full h-full lg:hidden">
                        <img
                          src="https://i.ibb.co/g74VYR2/Group-46.png"
                          alt="chairs"
                          className="object-center object-cover w-full h-[300px]"
                        />
                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                          <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                            Lounge Interior
                          </h1>
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                      <div className="relative w-full h-full lg:block hidden">
                        <img
                          src="https://i.ibb.co/92ZYJyK/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1.png"
                          alt="chair"
                          className="object-center object-cover w-full h-[300px]"
                        />
                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                          <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                            Lounge Interior
                          </h1>
                        </div>
                      </div>
                      <div className="relative w-full h-full lg:hidden">
                        <img
                          src="https://i.ibb.co/372ryYP/sven-brandsma-Qz6-Zx4-Rjd-D8-unsplash-3-1.png"
                          alt="chair"
                          className="object-center object-cover w-full h-[300px]"
                        />
                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                          <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                            Lounge Interior
                          </h1>
                        </div>
                      </div>
                    </div>
                  </Slide>
                </Slider>
                <ButtonNext
                  role="button"
                  aria-label="slide forward"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  id="next"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L7 7L1 13"
                      stroke="black"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonNext>
              </div>
            </CarouselProvider>

            {/* Carousel for Medium and Large-Sized Screen */}
            <CarouselProvider
              className="relative hidden sm:block"
              naturalSlideWidth={100}
              isIntrinsicHeight={true}
              totalSlides={3}
              visibleSlides={1}
              step={1}
              infinite={true}
              currentSlide={1}
            >
              <div className="js-flickity  h-[300px] flex justify-center items-center">
                <ButtonBack
                  role="button"
                  aria-label="slide backward"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                  id="prev"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 1L1 7L7 13"
                      stroke="black"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonBack>
                <Slider className="carousel__sliderLarge">
                  <Slide className="carousel__inner-slideLarge" index={0}>
                    <div className="gallery-cell w-full h-full">
                      <div className="relative w-full h-full lg:block hidden">
                        <img
                          src="https://i.ibb.co/VSsN4Jt/carousel-2.png"
                          alt="sitting area"
                          className="object-center object-cover w-full h-[300px]"
                        />
                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                          <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                            Lounge Interior
                          </h1>
                        </div>
                      </div>
                      <div className="relative w-full h-full lg:hidden">
                        <img
                          src="https://i.ibb.co/tMB5CZW/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-3-1.png"
                          alt="sitting area"
                          className="object-center object-cover w-full h-[300px]"
                        />
                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                          <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                            Lounge Interior
                          </h1>
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide className="carousel__inner-slideLarge" index={1}>
                    <div className="gallery-cell w-full h-full">
                      <div className="relative w-full h-full lg:block hidden">
                        <img
                          src="https://i.ibb.co/phw8yGZ/sven-brandsma-Qz6-Zx4-Rjd-D8-unsplash-1.png"
                          alt="chairs"
                          className="object-center object-cover w-full h-[300px]"
                        />
                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                          <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                            Lounge Interior
                          </h1>
                        </div>
                      </div>
                      <div className="relative w-full h-full lg:hidden">
                        <img
                          src="https://i.ibb.co/g74VYR2/Group-46.png"
                          alt="chairs"
                          className="object-center object-cover w-full h-[300px]"
                        />
                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                          <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                            Lounge Interior
                          </h1>
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide className="carousel__inner-slideLarge" index={2}>
                    <div className="gallery-cell w-full h-full">
                      <div className="relative w-full h-full lg:block hidden">
                        <img
                          src="https://i.ibb.co/92ZYJyK/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1.png"
                          alt="chair"
                          className="object-center object-cover w-full h-[300px]"
                        />
                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                          <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                            Lounge Interior
                          </h1>
                        </div>
                      </div>
                      <div className="relative w-full h-full lg:hidden">
                        <img
                          src="https://i.ibb.co/372ryYP/sven-brandsma-Qz6-Zx4-Rjd-D8-unsplash-3-1.png"
                          alt="chair"
                          className="object-center object-cover w-full h-[300px]"
                        />
                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                          <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                            Lounge Interior
                          </h1>
                        </div>
                      </div>
                    </div>
                  </Slide>
                </Slider>
                <ButtonNext
                  role="button"
                  aria-label="slide forward"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  id="next"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L7 7L1 13"
                      stroke="black"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestMonial;
