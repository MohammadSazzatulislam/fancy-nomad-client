import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserAuthContext } from "../../Context/AuthContext/AuthContext";
import Loading from "../../Shared/Loading/Loading";

const MyWishlist = () => {
  const [myOrder, setMyOrder] = useState([]);
  const [payInfo, setPayInfo] = useState([]);
  const { user } = useContext(UserAuthContext);

  useEffect(() => {
    axios
      .get(`https://fancy-nomad-server.vercel.app/myBooking/${user?.email}`)
      .then((res) => setMyOrder(res.data));
  }, [user]);

  useEffect(() => {
    axios
      .get(`https://fancy-nomad-server.vercel.app/payUserInfo/${user?.email}`)
      .then((res) => setPayInfo(res.data));
  }, [user]);

  if (!myOrder) {
    return <Loading></Loading>;
  }
  return (
    <div className="py-16">
      <div className="w-full ">
        <h1 className="text-xl mb-2 font-semibold lg:text-3xl md:text-2xl">
          My Wishlist
        </h1>
      </div>
      {myOrder.length ? (
        <div className="w-full gap-5 flex flex-wrap">
          {myOrder?.map((order) => (
            <div className=" shadow-3xl lg:w-72 md:w-72 w-full rounded-sm border border-blue-400">
              <img className="w-full" src={order.packImg} alt="" />
              <div className="p-2 bg-white">
                <h1 className="text-gray-600 text-xl ">{order.packageName}</h1>
                <h2 className="text-gray-500 text-md ">
                  Price : ${order.packagePrice}
                </h2>
                <h1 className="italic font-semibold   ">
                  TransactionId : {payInfo.transactionId}
                </h1>
                <div className="flex justify-between items-center">
                  {order.status === true ? (
                    <h1 className="text-green-500 italic font-semibold uppercase text-md ">
                      Paid
                    </h1>
                  ) : (
                    <>
                      <h1 className="text-orange-500 italic font-semibold uppercase text-md ">
                        Painding
                      </h1>
                      <Link to={`/dashboard/payment/${order._id}`}>
                        <button className=" px-2 py-1 rounded-sm outline-none bg-blue-500 hover:bg-blue-700 uppercase text-md text-white ">
                          Pay
                        </button>
                      </Link>
                    </>
                  )}
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
