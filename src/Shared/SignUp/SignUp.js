import React, { useContext, useState } from "react";
import { UserAuthContext } from "../../Context/AuthContext/AuthContext";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import "./SignUp.css";

const SignUp = () => {
  const [signError, setSignError] = useState("");
  const { signUpNewUser, updateName, googleLogin, gitbutLogIn } =
    useContext(UserAuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const name = data.firstName + " " + data.lastName;
    signUpNewUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        if (user.uid) {
          updateName(name);
          navigate(from, { replace: true });
        }
      })
      .catch((error) => setSignError(error.message));
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        if (user.uid) {
          navigate(from, { replace: true });
        }
      })
      .catch((error) => console.log(error.message));
  };
  const handleGithubLogin = () => {
    gitbutLogIn()
      .then((result) => {
        const user = result.user;
        if (user.uid) {
          navigate(from, { replace: true });
        }
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <div className="relative">
        <img
          src="https://wallpaperset.com/w/full/2/b/0/221375.jpg"
          className="absolute inset-0 object-cover w-full h-full "
          alt=""
        />
        <div className="relative opacity-100 bg-deep-purple-accent-900">
          <svg
            className="absolute inset-x-0 bottom-0 text-white"
            viewBox="0 0 1160 163"
          >
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
          </svg>
          <div className=" flex w-full justify-center lg:justify-end items-centee">
            <div className="p-5 ">
              <div className=" lg:w-[450px] signUpForm outline-none relative mx-auto overflow-hidden w-full border-none text-white rounded shadow-5xl p-5 ">
                <h3 className="lg:text-5xl textGradient  md:text-4xl text-3xl font-bold uppercase leading-8 my-3 text-center ">
                  Sign Up
                </h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex gap-2 my-7 justify-center items-center">
                    <div className=" flex-grow relative inputBox">
                      <input
                        {...register("firstName", { required: true })}
                        className="bg-transparent text-white border-none outline-none w-full shadow-none px-2 pb-2 leading-3 text-md"
                        required
                        type="text"
                        name="firstName"
                      />
                      <span className="absolute uppercase pointer-events-none left-0  leading-3 text-white font-semibold ">
                        First name
                      </span>
                      <i className="absolute left-0 bottom-0 w-full bg-white overflow-hidden h-1"></i>
                    </div>
                    <div className="flex-grow relative inputBox">
                      <input
                        {...register("lastName", { required: true })}
                        className="bg-transparent text-white border-none outline-none w-full shadow-none px-2 pb-2 leading-3 text-md"
                        required
                        type="text"
                        name="lastName"
                      />
                      <span className="absolute uppercase pointer-events-none left-0  leading-3 text-white font-semibold ">
                        Last name
                      </span>
                      <i className="absolute left-0 bottom-0 w-full bg-white overflow-hidden h-1"></i>
                    </div>
                  </div>
                  {errors.firstName && (
                    <span className="text-red-500">
                      {errors.firstName?.message}
                    </span>
                  )}
                  {errors.lastName && (
                    <span className="text-red-500">
                      {errors.lastName?.message}
                    </span>
                  )}
                  <div className=" mb-7 flex-grow relative inputBox">
                    <input
                      {...register("email", { required: true })}
                      className="bg-transparent text-white border-none outline-none w-full shadow-none px-2 pb-2 leading-3 text-md"
                      required
                      type="email"
                      name="email"
                    />
                    <span className="absolute uppercase pointer-events-none left-0  leading-3 text-white font-semibold ">
                      Email
                    </span>
                    <i className="absolute left-0 bottom-0 w-full bg-white overflow-hidden h-1"></i>
                  </div>
                  {errors.email && (
                    <span className="text-red-500">
                      {errors.email?.message}
                    </span>
                  )}
                  <div className=" mb-7 flex-grow relative inputBox">
                    <input
                      {...register("password", { required: true })}
                      className="bg-transparent text-white border-none outline-none w-full shadow-none px-2 pb-2 leading-3 text-md"
                      required
                      type="password"
                      name="password"
                    />
                    <span className="absolute uppercase pointer-events-none left-0  leading-3 text-white font-semibold ">
                      Password
                    </span>
                    <i className="absolute left-0 bottom-0 w-full bg-white overflow-hidden h-1"></i>
                  </div>
                  {errors.email && (
                    <spna className="text-red-500">
                      {errors.password?.message}
                    </spna>
                  )}
                  {signError && (
                    <span className="text-red-500">{signError}</span>
                  )}
                  <button
                    type="submit"
                    className=" w-full uppercase font-semibold tracking-wide py-2 bg-blue-500 hover:bg-blue-700 outline-none  rounded-sm shadow-xl "
                  >
                    Sign Up
                  </button>
                  <div className="flex mt-3 justify-between items-center ">
                    <h1>Already have any account?</h1>
                    <Link to="/login">
                      <p className="font-semibold underline">Log In</p>
                    </Link>
                  </div>
                </form>
                <div className=" mt-7">
                  <div className="divider">OR</div>
                  <div className="flex justify-center items-center gap-5">
                    <FaGoogle
                      onClick={handleGoogleLogin}
                      className="w-12 h-12 cursor-pointer"
                    ></FaGoogle>
                    <FaGithub
                      onClick={handleGithubLogin}
                      className="w-12 h-12 cursor-pointer"
                    ></FaGithub>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
