import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { UserAuthContext } from "../../Context/AuthContext/AuthContext";

const Header = () => {

  const { user, userSignOut } = useContext(UserAuthContext);

  const handleSignOut = () => {
    userSignOut()
  }

  return (
    <div>
      <div className="navbar gradient text-white   flex justify-between items-center">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5  "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact text-black dropdown-content mt-3 p-2 shadow rounded-sm bg-base-100  w-52"
            >
              <li className="font-semibold">
                <Link to="/">News</Link>
              </li>
              <li className="font-semibold">
                <Link to="/destination">Destination</Link>
              </li>
              <li className="font-semibold">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="font-semibold">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-md lg:text-xl md:text-xl"
          >
            Travel Your Own Country
          </Link>
        </div>

        <div>
          <div className=" justify-between items-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0  ">
              <li className="font-semibold">
                <Link to="/">News</Link>
              </li>
              <li className="font-semibold">
                <Link to="/destination">Destination</Link>
              </li>
              <li className="font-semibold">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="font-semibold">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className=" flex justify-between items-center">
            <div className="flex justify-between gap-2 items-center">
              {user?.uid ? (
                <Link to="/">
                  <button
                    onClick={handleSignOut}
                    className="lg:px-4 lg:py-2 px-2 py-1 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-sm border-none"
                  >
                    Log Out
                  </button>
                </Link>
              ) : (
                <>
                  <Link to="/signup">
                    <button className="lg:px-4 lg:py-2 px-2 py-1 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-sm border-none">
                      Sign Up
                    </button>
                  </Link>
                  <Link to="/login">
                    <button className="lg:px-4 lg:py-2 px-2 py-1 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-sm border-none">
                      Log In
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
