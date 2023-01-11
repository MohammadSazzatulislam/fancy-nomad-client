import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { UserAuthContext } from "../../Context/AuthContext/AuthContext";
import { FaUser } from "react-icons/fa";

const MyBooking = () => {
  const [myOrder, setMyOrder] = useState([]);
  const { user } = useContext(UserAuthContext);
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/myBooking/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
       setMyOrder(data);
      });
  }, [user]);

  return (
    <div>
      <div className="w-full ">
        <h1 className="text-xl mb-2 font-semibold lg:text-3xl md:text-2xl">
          My Booking
        </h1>
      </div>
      <div className="w-full ">
        <div className="bg-white  shadow-2xl overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16  w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-left pl-5">Profile</th>
                <th className="font-normal text-left pl-5">Packages</th>
                <th className="font-normal text-left pl-5">user Info</th>
                <th className="font-normal text-left pl-5">user Info</th>
                <th className="font-normal text-left pl-5">user Info</th>
                <th className="font-normal text-left pl-5">Stutas</th>
                <th className="font-normal text-left pl-5 pr-5">Action</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {myOrder?.map((order) => (
                <>
                  <tr
                    key={order._id}
                    className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
                  >
                    <td className="pl-5 ">
                      <div className="flex gap-2 items-center">
                        {user?.photoURL ? (
                          <img
                            className="w-10 border rounded-full"
                            src={user?.photoURL}
                            alt="userPhoto"
                          />
                        ) : (
                          <FaUser className="w-6 h-6"></FaUser>
                        )}
                        <div className="pl-5">
                          <p className="font-medium">{order.userName}</p>
                          <p className="text-xs leading-3 text-gray-600 pt-2">
                            {order.email}
                          </p>
                          <p className="text-xs leading-3 text-gray-600 pt-2">
                            {order.number}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="pl-5">
                      <div>
                        <p className="font-medium">{order.packageName}</p>
                        <p className="text-xs leading-3 text-gray-600 pt-2">
                          {order.packagePrice}
                        </p>
                        <p className="text-xs leading-3 text-gray-600 pt-2">
                          {order.checInDate - order.checkOutDate}
                        </p>
                      </div>
                    </td>
                    <td className="pl-5">
                      <div>
                        <p className="font-medium">{order.city}</p>
                        <p className="text-xs leading-3 text-gray-600 pt-2">
                          {order.postCode}
                        </p>
                        <p className="text-xs leading-3 text-gray-600 pt-2">
                          {order.address}
                        </p>
                      </div>
                    </td>
                    <td className="pl-5">
                      <div>
                        <p className="font-medium">{order.country}</p>
                        <p className="text-xs leading-3 text-gray-600 pt-2">
                          {order.nationality}
                        </p>
                        <p className="text-xs leading-3 text-gray-600 pt-2">
                         Room : {order.rooms}
                        </p>
                      </div>
                    </td>
                    <td className="pl-5">
                      <div>
                        <p className="font-medium">
                         Adults: {order.adults}
                        </p>
                        <p className="text-xs leading-3 text-gray-600 pt-2">
                         Children: {order.children}
                        </p>
                        <p className="text-xs leading-3 text-gray-600 pt-2">
                          Herman Group
                        </p>
                      </div>
                    </td>
                    <td className="pl-5">
                      <p className="text-orange-400">un paid</p>
                    </td>
                    <td className=" pr-5 ">
                      {show === 0 ? (
                        <button
                          onClick={() => setShow(null)}
                          className="focus:outline-none pl-7"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                              stroke="#A1A1AA"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                              stroke="#A1A1AA"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                              stroke="#A1A1AA"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      ) : (
                        <button
                          onClick={() => setShow(0)}
                          className="focus:outline-none pl-7"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                              stroke="#A1A1AA"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                              stroke="#A1A1AA"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                              stroke="#A1A1AA"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      )}
                      {show === 0 && (
                        <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
                          <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                            <p>Edit</p>
                          </div>
                          <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                            <p>Delete</p>
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
