import React, { useState } from "react";
import { FaShare, FaShoppingCart, FaDollarSign } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import "./DashBoardLayOut.css";

const DashBoardLayOut = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    if (toggle === false) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

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
            <ul>
              <Link
                to="/dashboard"
                class="flex items-center transition duration-200 hover:bg-gray-700 hover:text-white"
              >
                My Booking
              </Link>
              <Link
                to="/dashboard/wishlist"
                class="flex items-center transition duration-200 hover:bg-gray-700 hover:text-white"
              >
                My Wishlist
              </Link>
            </ul>
          </nav>
        </aside>

        <main id="content" class="flex-1 p-6 lg:px-8">
          <div>
            <div class="p-5 w-full h-screen  mx-auto ">
              <Outlet></Outlet>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashBoardLayOut;
