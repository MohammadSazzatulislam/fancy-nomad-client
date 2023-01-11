import React, { useState } from "react";
import { FaShoppingCart, FaDollarSign } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import "./DashBoardLayOut.css";

const DashBoardLayOut = () => {
  return (
    <div className="bg-white">
      <Header></Header>
      <div class="relative min-h-screen md:flex" data-dev-hint="container">
        <input type="checkbox" id="menu-open" class="hidden" />

        <label
          data-dev-hint="mobile menu bar"
          for="menu-open"
          id="mobile-menu-button"
          class=" absolute lg:hidden md:hidden right-5 top-0 p-2 outline-none cursor-pointer  rounded-none"
        >
          <svg
            id="menu-open-icon"
            class="h-6 w-6 transition duration-200 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            id="menu-close-icon"
            class="h-6 w-6 transition duration-200 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </label>

        <aside
          id="sidebar"
          class="bg-gray-800 text-gray-100 md:w-64 w-1/2  absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-500 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto"
          data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
        >
          <nav data-dev-hint="main navigation">
            <ul className="   p-5 ">
              <Link
                to="/dashboard"
                class="flex gap-2 mb-4 text-md font-semibold items-center transition duration-200 hover:bg-gray-700"
              >
                <FaShoppingCart className="w-6-h-6"></FaShoppingCart>
                <span>My Booking</span>
              </Link>
              <Link
                to="/dashboard/wishlist"
                class="flex gap-2 text-md font-semibold items-center transition duration-200 hover:bg-gray-700"
              >
                <FaDollarSign className="w-6-h-6"></FaDollarSign>
                <span>My Wishlist</span>
              </Link>
            </ul>
          </nav>
        </aside>

        <main id="content" class="flex-1 p-5 overflow-x-auto ">
          <div>
            <div class="w-full h-screen lg:pt-5 md:pt-5 mx-auto ">
              <Outlet></Outlet>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashBoardLayOut;
