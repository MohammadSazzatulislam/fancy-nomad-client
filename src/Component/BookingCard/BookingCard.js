import React from "react";

const BookingCard = ({ news }) => {
  const { name, img } = news;
  return (
    <div>
      <img className="w-full h-fit" src={img} alt="Women" />
      <div className=" absolute top-0 left-0 w-full h-full flex justify-start lg:items-end md:items-top items-top opacity-0 hover:border-2 rounded-lg hover:border-sky-500 hover:opacity-100 p-8">
        <p className=" font-semibold text-2xl leading-6 text-white">{name}</p>
      </div>
    </div>
  );
};

export default BookingCard;
