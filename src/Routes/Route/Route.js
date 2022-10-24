import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Component/Blog/Blog";
import Contact from "../../Component/Contact/Contact";
import Destination from "../../Component/Destination/Destination";
import News from "../../Component/News/News";
import Main from "../../Layout/Main/Main";
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
        loader: async () => fetch("https://travel-your-own-country-server.vercel.app/newsCard"),
        element: <News></News>,
        },
        {
            path: '/destination',
            element: <Destination></Destination>,
        },
        {
            path: '/blog',
            element: <Blog></Blog>,
        },
        {
            path: '/contact',
            element: <Contact></Contact>,
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>,
        },
        {
            path: '/login',
            element: <LogIn></LogIn>,
        },
    ],
  },
]);