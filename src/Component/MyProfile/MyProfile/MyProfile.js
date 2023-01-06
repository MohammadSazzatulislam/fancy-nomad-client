import React, { useContext } from "react";
import { FaUser, FaEdit } from "react-icons/fa";
import { UserAuthContext } from "../../../Context/AuthContext/AuthContext";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const { user } = useContext(UserAuthContext);
  return (
    <div className="p-5 bg-black ">
      <div className="w-full h-96 justify-center items-center flex-col flex">
        <div className="lg:w-[600px] w-full  p-5 text-white  card rounded-sm ">
          <div className="w-full mb-3 flex justify-between items-start">
            <h1 className="text-2xl font-semibold ">My Profile</h1>
            <Link
              
              className="font-semibold text-lg flex items-center justify-center gap-1"
            >
              <FaEdit className="w-6 h-6 text-pink-700"></FaEdit>
              <span>Edit</span>
            </Link>
          </div>
          <div className="flex  justify-center items-center w-full">
            {user?.photoURL ? (
              <img
                className="w-48 border rounded-full"
                src={user?.photoURL}
                alt="userPhoto"
              />
            ) : (
              <FaUser className="w-48 h-48 text-white "></FaUser>
            )}
          </div>
          <h1 className="text-md font-semibold mt-3">
            Name : {user?.displayName}
          </h1>
          <h2 className="text-md font-semibold mt-3">Email : {user?.email}</h2>
          <h3 className="text-md font-semibold mt-3">
            Phone : {user?.phoneNumber}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
