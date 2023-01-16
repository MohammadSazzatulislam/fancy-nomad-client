import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
import ScrollToTopOnMount from "../ScrollToTop/ScrollToTop";
const stripePromise = loadStripe(
  "pk_test_51M6AleA0eu7K8wmEIEjjGIs1uXaNQ0GZUzVXwLyhG93R76Q9aRCztKXCJoVY80NvlivYezUcPIW3PjSomrWkatrE00I8V7vbbZ"
);

const Payment = () => {
  const { packageName, packagePrice, firstName, lastName, email, _id } =
    useLoaderData();

  return (
    <div className="py-16">
      <ScrollToTopOnMount></ScrollToTopOnMount>
      <h1 className="font-semibold text-xl ">{`Payment for ${packageName} and Price is $${packagePrice}`}</h1>
      <div className="w-full rounded-sm border border-blue-500 p-5 lg:w-[500px] md:w-[500px] mt-10">
        <Elements stripe={stripePromise}>
          <CheckOutForm
            packagePrice={packagePrice}
            firstName={firstName}
            lastName={lastName}
            email={email}
            id={_id}
          ></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
