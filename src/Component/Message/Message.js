import React from "react";

const Message = () => {
  return (
    <div className="px-5 py-28 bg-black text-white ">
      <div className="flex relative justify-center items-center flex-wrap gap-5 w-full ">
        <img
          className="w-full h-[250px] rounded "
          src="https://media.istockphoto.com/id/1351756759/photo/blue-curve-shapes-soft-defocused-blurred-motion-abstract-background.jpg?b=1&s=170667a&w=0&k=20&c=l3d4NBJA1tppryMSNmogfovn2AnWFDhvV8I04oko9dg="
          alt=""
        />
        <h1 className="absolute text-center pb-16 text-xl md:text-3xl lg:text-4xl ">
          Get our offers to your inbox
        </h1>
        <div className="absolute pt-16 w-full lg:w-3/4 md:w-2/3 px-5">
          <div className="relative w-full">
            <input
              className="bg-white w-full px-5 focus:outline-none text-md  border-4 border-white text-black py-3 rounded-full "
              type="email"
              placeholder="Your Email"
            />
            <button className="px-7 py-3 border-4 border-white right-0 absolute  bg-blue-500 hover:bg-blue-700 text-white uppercase text-md font-semibold outline-none rounded-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
