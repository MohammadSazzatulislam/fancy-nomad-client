import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserAuthContext } from "../../Context/AuthContext/AuthContext";

const MyWishlist = () => {
  const [myOrder, setMyOrder] = useState([]);
  const { user } = useContext(UserAuthContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/myBooking/${user?.email}`)
      .then((res) => setMyOrder(res.data));
  }, [user]);

  return (
    <div className="py-16">
      <div className="w-full ">
        <h1 className="text-xl mb-2 font-semibold lg:text-3xl md:text-2xl">
          My Wishlist
        </h1>
      </div>
      {myOrder.length ? (
        <div className="w-full gap-5 flex flex-col flex-wrap">
          {myOrder?.map((order) => (
            <div className=" shadow-3xl lg:w-72 md:w-72 w-full rounded-sm border border-blue-400">
              <img className="w-full" src={order.packImg} alt="" />
              <div className="p-2 bg-white">
                <h1 className="text-gray-600 text-xl ">{order.packageName}</h1>
                <h2 className="text-gray-500 text-md ">
                  Price : {order.packagePrice}
                </h2>
                <div className="flex justify-between items-center">
                  <h1 className="text-green-500 italic text-md ">Painding</h1>
                  <Link to={`/dashboard/payment/${order._id}`}>
                    <button className=" px-2 py-1 rounded-sm outline-none bg-blue-500 hover:bg-blue-700 uppercase text-md text-white ">
                      Pay
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="italic text-gray-400 font-semibold text-md uppercase">
          No Wishlist Available
        </h1>
      )}
    </div>
  );
};

export default MyWishlist;
