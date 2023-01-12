import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="flex bg-black justify-center items-center h-screen">
        <div className="relative w-16 h-16 animate-spin rounded-full bg-gradient-to-r from-blue-400 via-orange-500 to-green-400 ">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12  bg-black rounded-full "></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
