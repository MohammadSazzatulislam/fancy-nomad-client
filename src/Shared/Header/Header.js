import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserAuthContext } from "../../Context/AuthContext/AuthContext";
import "./Header.css";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { user, userSignOut } = useContext(UserAuthContext);
  const [navbar, setNavbar] = useState(false);

  const handleSignOut = () => {
    userSignOut();
  };

  return (
    <div>
      <nav className="w-full px-5 gradient shadow">
        <div className="justify-between  mx-auto items-center md:flex ">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link to="/">
                <h2 className="text-2xl bounce-in-top  font-bold text-white">
                  Fancy nomad
                </h2>
              </Link>
              <div className="md:hidden flex items-center gap-2">
                {user?.uid ? (
                  <>
                    <div className="dropdown dropdown-end">
                      <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                          <span className="badge badge-sm indicator-item">
                            8
                          </span>
                        </div>
                      </label>
                      <div
                        tabIndex={0}
                        className="mt-3 card card-compact dropdown-content w-52 rounded-sm "
                      >
                        <div className="card-body">
                          <span className="font-bold text-lg">8 Items</span>
                          <button className="w-full py-2 bg-blue-500 text-white uppercase hover:bg-blue-700 rounded-sm outline-none">
                            View cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown dropdown-end">
                      <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                      >
                        {user?.photoURL ? (
                          <img
                            className="w-10 rounded-full"
                            src={user?.photoURL}
                            alt="userPhoto"
                          />
                        ) : (
                          <FaUser className="w-6 h-6 text-white "></FaUser>
                        )}
                      </label>
                      <ul
                        tabIndex={0}
                        className="menu card menu-compact dropdown-content mt-3 p-2 rounded-sm w-52"
                      >
                        <li>
                          <Link to="/myProfile">Profile</Link>
                        </li>
                        <li>
                          <Link>Settings</Link>
                        </li>
                        <li>
                          <Link onClick={handleSignOut} to="/">
                            Log Out
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link to="/Login">
                    <button className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800">
                      Log In
                    </button>
                  </Link>
                )}
                <button
                  className="p-2 text-gray-700 rounded-md outline-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <Link to="/">
                  <li className="text-white hover:text-indigo-200">Home</li>
                </Link>
                <Link to="/destination">
                  <li className="text-white hover:text-indigo-200">
                    Destination
                  </li>
                </Link>
                <Link to="/blog">
                  <li className="text-white hover:text-indigo-200">Blog</li>
                </Link>
                <Link to="/contact">
                  <li className="text-white hover:text-indigo-200">
                    Contact US
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="hidden  lg:flex items-center space-x-2 md:inline-block">
            {user?.uid ? (
              <>
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="badge badge-sm indicator-item">8</span>
                    </div>
                  </label>
                  <div
                    tabIndex={0}
                    className="mt-3 card card-compact dropdown-content w-52 rounded-sm "
                  >
                    <div className="card-body">
                      <span className="font-bold text-lg">8 Items</span>
                      <button className="w-full py-2 bg-blue-500 text-white uppercase hover:bg-blue-700 rounded-sm outline-none">
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    {user?.photoURL ? (
                      <img
                        className="w-10 rounded-full"
                        src={user?.photoURL}
                        alt="userPhoto"
                      />
                    ) : (
                      <FaUser className="w-6 h-6 text-white "></FaUser>
                    )}
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu card menu-compact dropdown-content mt-3 p-2 rounded-sm w-52"
                  >
                    <li>
                      <Link to="/myProfile">Profile</Link>
                    </li>
                    <li>
                      <Link>Settings</Link>
                    </li>
                    <li>
                      <Link onClick={handleSignOut} to="/">
                        Log Out
                      </Link>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <Link to="/Login">
                <button className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800">
                  Log In
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
