import React, { useContext, useEffect, useState } from 'react';
import { UserAuthContext } from '../../Context/AuthContext/AuthContext';

const MyWishlist = () => {

    const [myOrder, setMyOrder] = useState([]);
    const { user } = useContext(UserAuthContext);

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
            My Wishlist
          </h1>
        </div>
        {myOrder.length ? (
          <><h1>hello</h1></>
        ) : (
          <h1 className="italic text-gray-400 font-semibold text-md uppercase">
            No Wishlist Available
          </h1>
        )}
      </div>
    );
};

export default MyWishlist;