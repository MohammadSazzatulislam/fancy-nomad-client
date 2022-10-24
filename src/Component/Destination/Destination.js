import React from "react";

const Destination = () => {
  return (
    <div>
      <div className=" ">
        <div className="">
          <div className=" relative inset-0 mx-auto w-full h-screen   ">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1623941000186-afafbcfb65e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2VhJTIwYmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                className="w-full object-cover lg:h-screen lg:block md:hidden hidden"
                alt=""
              />
              <div className="w-full h-screen bg-black opacity-30 absolute top-0 left-0" />
              <img
                src="https://images.unsplash.com/photo-1546453159-9301aca09902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhcnJvdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                className="lg:hidden md:block hidden w-full h-screen"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1602165080370-11a4a2d18160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fHdhdGVyZmFsbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                className="lg:hidden md:hidden block w-full h-screen"
                alt=""
              />

              <div className="absolute lg:top-8 md:top-3 top-0 lg:px-7 md:px-10 px-4 py-4">
                <p className="lg:text-6xl md:text-4xl text-3xl font-semibold leading-8 lg:text-white md:text-teal-300 text-orange-400 ">
                  COX'S BUZZER
                </p>
                <p className=" leading-none text-white w-full lg:max-w-lg md:max-w-screen-lg mt-3 ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Labore facere eaque nemo placeat molestiae laudantium, beatae
                  voluptate necessitatibus quae suscipit.
                </p>
                <div className="pt-4">
                  <button className=" flex gap-2 justify-center items-center px-3 py-2 bg-blue-600 hover:bg-blue-700 border-none rounded-sm text-white font-semibold">
                    Booking
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </button>
                </div>
              </div>
                          <div className="absolute w-full mx-auto flex items-center  md:bottom-0 lg:right-0 lg:top-0 lg:w-2/4 lg:h-screen h-3/4 md:h-3/4 bottom-0 p-5 ">
                              {/* // there is a from page */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
