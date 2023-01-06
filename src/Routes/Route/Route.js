import { createBrowserRouter } from "react-router-dom";
import Booking from "../../Component/Booking/Booking";
import MyProfile from "../../Component/MyProfile/MyProfile/MyProfile";
import UpDateProfile from "../../Component/MyProfile/UpDateProfile/UpDateProfile";
import Main from "../../Layout/Main/Main";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import Destination from "../../Pages/Destination/Destination";
import Home from "../../Pages/Home/Home";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";
import LogIn from "../../Shared/LogIn/LogIn";
import SignUp from "../../Shared/SignUp/SignUp";

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
        path: "/destination",
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
        path: "/booking",
        element: <Booking></Booking>,
      },
      {
        path: "/myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: '/upDateProfile',
        element: <UpDateProfile></UpDateProfile>,
      }
    ],
  },
]);
