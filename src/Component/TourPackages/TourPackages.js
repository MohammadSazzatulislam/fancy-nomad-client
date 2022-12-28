import React from "react";

const TourPackages = () => {
  return (
    <div className="pb-28 px-5">
      <div>
        <h1 className="text-xl font-semibold textGradient ">
          Popular Tour Package
        </h1>
        <h1 className="lg:text-5xl textGradient  md:text-4xl text-3xl font-bold uppercase leading-8">
          The Best Of Our Packages
        </h1>
      </div>
      <div className="pt-28 flex flex-wrap justify-center items-center gap-4">
        {/* card 1 */}
        <div className="relative flex flex-col lg:flex-col md:flex-row  rounded-sm shadow-lg  w-full lg:w-96  border border-green">
          <div className="w-full">
            <img
              src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="tailwind logo"
              className="rounded-sm w-full h-72"
            />
          </div>
          <div className="w-full p-4">
            <div className="flex justify-between p-1 item-center">
              <p className="text-gray-500 font-medium hidden md:block">
                Vacations
              </p>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p className="text-gray-600 font-bold text-sm ml-1">
                  4.96
                  <span className="text-gray-500 font-normal">
                    (76 reviews)
                  </span>
                </p>
              </div>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-pink-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <h3 className=" font-semibold md:text-3xl text-lg">
              The Majestic and Wonderful Bahamas
            </h3>
            <small className="">
              The best kept secret of The Bahamas is the country’s sheer size
              and diversity. With 16 major islands, The Bahamas is an unmatched
              destination
            </small>
            <p className="text-xl font-black text-gray-800">
              $110
              <span className="font-normal text-gray-600 text-base">
                /night
              </span>
            </p>
          </div>
        </div>
        {/* card 1 */}
        {/* card 1 */}
        <div className="relative flex flex-col lg:flex-col md:flex-row  rounded-sm shadow-lg  w-full lg:w-96  border border-green">
          <div className="w-full">
            <img
              src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="tailwind logo"
              className="rounded-sm w-full h-72"
            />
          </div>
          <div className="w-full p-4">
            <div className="flex justify-between p-1 item-center">
              <p className="text-gray-500 font-medium hidden md:block">
                Vacations
              </p>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p className="text-gray-600 font-bold text-sm ml-1">
                  4.96
                  <span className="text-gray-500 font-normal">
                    (76 reviews)
                  </span>
                </p>
              </div>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-pink-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <h3 className=" font-semibold md:text-3xl text-lg">
              The Majestic and Wonderful Bahamas
            </h3>
            <small className="">
              The best kept secret of The Bahamas is the country’s sheer size
              and diversity. With 16 major islands, The Bahamas is an unmatched
              destination
            </small>
            <p className="text-xl font-black text-gray-800">
              $110
              <span className="font-normal text-gray-600 text-base">
                /night
              </span>
            </p>
          </div>
        </div>
        {/* card 1 */}
        {/* card 1 */}
        <div className="relative flex flex-col lg:flex-col md:flex-row  rounded-sm shadow-lg  w-full lg:w-96  border border-green">
          <div className="w-full">
            <img
              src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="tailwind logo"
              className="rounded-sm w-full h-72"
            />
          </div>
          <div className="w-full p-4">
            <div className="flex justify-between p-1 item-center">
              <p className="text-gray-500 font-medium hidden md:block">
                Vacations
              </p>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p className="text-gray-600 font-bold text-sm ml-1">
                  4.96
                  <span className="text-gray-500 font-normal">
                    (76 reviews)
                  </span>
                </p>
              </div>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-pink-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <h3 className=" font-semibold md:text-3xl text-lg">
              The Majestic and Wonderful Bahamas
            </h3>
            <small className="">
              The best kept secret of The Bahamas is the country’s sheer size
              and diversity. With 16 major islands, The Bahamas is an unmatched
              destination
            </small>
            <p className="text-xl font-black text-gray-800">
              $110
              <span className="font-normal text-gray-600 text-base">
                /night
              </span>
            </p>
          </div>
        </div>
        {/* card 1 */}
      </div>
    </div>
  );
};

export default TourPackages;
