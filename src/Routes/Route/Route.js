import { createBrowserRouter } from "react-router-dom";
import Booking from "../../Component/Booking/Booking";
import BookingUpdate from "../../Component/BookingUpdate/BookingUpdate";
import MyBooking from "../../Component/MyBooking/MyBooking";
import MyProfile from "../../Component/MyProfile/MyProfile/MyProfile";
import UpDateProfile from "../../Component/MyProfile/UpDateProfile/UpDateProfile";
import MyWishlist from "../../Component/MyWishlist/MyWishlist";
import Payment from "../../Component/Payment/Payment";
import DashBoardLayOut from "../../Layout/DashboardLayOut/DashBoardLayOut";
import Main from "../../Layout/Main/Main";
import Blog from "../../Pages/Blog/Blog";
import Destination from "../../Pages/Destination/Destination";
import Home from "../../Pages/Home/Home";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";
import LogIn from "../../Shared/LogIn/LogIn";
import SignUp from "../../Shared/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Contact from "../../Pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/destination/:id",
        loader: ({ params }) => {
          return fetch(
            `https://fancy-nomad-server.vercel.app/places/${params.id}`
          );
        },
        element: <Destination></Destination>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/booking/:id",
        loader: ({ params }) => {
          return fetch(
            `https://fancy-nomad-server.vercel.app/singlePackages/${params.id}`
          );
        },
        element: (
          <PrivateRoute>
            <Booking></Booking>
          </PrivateRoute>
        ),
      },
      {
        path: "/myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/upDateProfile",
        element: <UpDateProfile></UpDateProfile>,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage></ErrorPage>,
    element: (
      <PrivateRoute>
        <DashBoardLayOut></DashBoardLayOut>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <MyBooking></MyBooking>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/wishlist",
        element: (
          <PrivateRoute>
            <MyWishlist></MyWishlist>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/bookingUpdate/:id",
        loader: ({ params }) =>
          fetch(
            `https://fancy-nomad-server.vercel.app/myBookingUpdate/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <BookingUpdate></BookingUpdate>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        loader: ({ params }) =>
          fetch(
            `https://fancy-nomad-server.vercel.app/myBookings/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
