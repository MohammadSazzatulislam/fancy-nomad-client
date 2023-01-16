import React from "react";
import {
  FaShoppingCart,
  FaDollarSign,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import ScrollToTopOnMount from "../../Component/ScrollToTop/ScrollToTop";
import Header from "../../Shared/Header/Header";

const DashBoardLayOut = () => {
  return (
    <div className="bg-white ">
      <ScrollToTopOnMount></ScrollToTopOnMount>
      <Header></Header>
      <div className="drawer drawer-mobile relative">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className=" drawer-content p-5">
          <label
            htmlFor="my-drawer-2"
            className=" absolute right-8 lg:hidden"
          >
            <FaAngleDoubleRight className="w-7 h-7"></FaAngleDoubleRight>
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side  ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="  menu w-80 p-5 bg-gray-800 text-gray-100   ">
            <Link
              to="/dashboard"
              className="flex gap-2 mb-4 text-md font-semibold items-center transition duration-200 hover:bg-gray-700"
            >
              <FaShoppingCart className="w-6-h-6"></FaShoppingCart>
              <span>My Booking</span>
            </Link>
            <Link
              to="/dashboard/wishlist"
              className="flex gap-2 text-md font-semibold items-center transition duration-200 hover:bg-gray-700"
            >
              <FaDollarSign className="w-6-h-6"></FaDollarSign>
              <span>My Wishlist</span>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayOut;
