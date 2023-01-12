import React from "react";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const { packageName, packagePrice } = useLoaderData();

  return (
    <div className="py-16">
          <h1 className="font-semibold text-xl ">{`Payment for ${packageName} and Price is ${packagePrice}`}</h1>
    </div>
  );
};

export default Payment;
