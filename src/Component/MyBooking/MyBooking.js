import React, { useContext } from "react";
import { UserAuthContext } from "../../Context/AuthContext/AuthContext";
import { FaUser, FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";

const MyBooking = () => {
  const { user } = useContext(UserAuthContext);
  const {
    isLoading,
    data = [],
    refetch,
  } = useQuery({
    queryKey: ["data"],
    queryFn: () =>
      fetch(`http://localhost:5000/myBooking/${user?.email}`).then((res) =>
        res.json()
      ),
  });

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/myBooking/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully Delete");
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="py-10">
      <div className="w-full ">
        <h1 className="text-xl mb-2 font-semibold lg:text-3xl md:text-2xl">
          My Booking
        </h1>
      </div>
      {data.length ? (
        <>
          <div className="w-full ">
            <div className="bg-white  shadow-2xl overflow-y-auto">
              <table className="w-full overflow-x-auto whitespace-nowrap">
                <thead>
                  <tr className="h-16  w-full text-sm leading-none text-gray-800">
                    <th className="font-normal text-left p-5">Profile</th>
                    <th className="font-normal text-left pl-20 p-5">
                      Packages
                    </th>
                    <th className="font-normal text-left pl-20 p-5">
                      user Info
                    </th>
                    <th className="font-normal text-left pl-20 p-5">
                      user Info
                    </th>
                    <th className="font-normal text-left pl-20 p-5">
                      user Info
                    </th>
                    <th className="font-normal text-left pl-20 p-5">Stutas</th>
                    <th className="font-normal text-left pl-20 pr-6">Action</th>
                  </tr>
                </thead>
                <tbody className="w-full overflow-x-auto overflow-y-auto">
                  {data?.map((order) => (
                    <>
                      <tr
                        key={order._id}
                        className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
                      >
                        <td className="p-5 ">
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
                            <div className="flex flex-col flex-wrap ">
                              <p className="font-medium">
                                Name :{order.firstName} {order.lastName}
                              </p>
                              <p className="text-xs leading-3 text-gray-600 pt-2">
                                Email : {order.email}
                              </p>
                              <p className="text-xs leading-3 text-gray-600 pt-2">
                                Number : {order.number}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="p-5 pl-20 ">
                          <div className="flex flex-col flex-wrap ">
                            <p className="font-medium">{order.packageName}</p>
                            <p className="text-xs leading-3 text-gray-600 pt-2">
                              Price : {order.packagePrice}
                            </p>
                            <div className="flex gap-2">
                              <p className="text-xs leading-3 text-gray-600 pt-2">
                                Check In : {order.checkInDate}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <p className="text-xs leading-3 text-gray-600 pt-2">
                                Check Out : {order.checkOutDate}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="p-5 pl-20">
                          <div className="flex flex-col flex-wrap ">
                            <p className="font-medium"> City:{order.city}</p>
                            <p className="text-xs leading-3 text-gray-600 pt-2">
                              Post/ZIP: {order.postCode}
                            </p>
                            <p className="text-xs leading-3 text-gray-600 pt-2">
                              Address : {order.address}
                            </p>
                          </div>
                        </td>
                        <td className="p-5 pl-20">
                          <div className="flex flex-col flex-wrap ">
                            <p className="font-medium">
                              Country : {order.country}
                            </p>
                            <p className="text-xs leading-3 text-gray-600 pt-2">
                              Nationality : {order.nationality}
                            </p>
                            <p className="text-xs leading-3 text-gray-600 pt-2">
                              Room : {order.rooms}
                            </p>
                          </div>
                        </td>
                        <td className="p-5 pl-20">
                          <div>
                            <p className="font-medium">
                              Adults: {order.adults}
                            </p>
                            <p className="text-xs leading-3 text-gray-600 pt-2">
                              Children: {order.children}
                            </p>
                          </div>
                        </td>
                        <td className="p-5 pl-20">
                          <p className="text-orange-400">un paid</p>
                        </td>
                        <td className=" p-6 pl-20 ">
                          <div className="flex gap-5 justify-center items-center">
                            <Link to={`/dashboard/bookingUpdate/${order._id}`}>
                              <FaEdit className="w-5 h-5 "></FaEdit>
                            </Link>
                            <Link onClick={() => handleDelete(order._id)}>
                              <FaTrashAlt className="w-5 h-5 text-red-500"></FaTrashAlt>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <h1 className="italic text-gray-400 font-semibold text-md uppercase">
          No Booking Available
        </h1>
      )}
    </div>
  );
};

export default MyBooking;
