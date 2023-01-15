import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { UserAuthContext } from "../../Context/AuthContext/AuthContext";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const Blog = () => {
  const { user } = useContext(UserAuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const comment = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    fetch("https://fancy-nomad-server.vercel.app/userComment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Successfully add comment");
        }
      });
  };

  const { data, refetch } = useQuery({
    queryKey: ["data"],
    queryFn: () =>
      fetch("https://fancy-nomad-server.vercel.app/userComment").then((res) =>
        res.json()
      ),
  });

  const handleDeleteComment = (id) => {
    fetch(`https://fancy-nomad-server.vercel.app/userComment/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Successfully Delete comment");
        }
      });
  };

  if (data.length) {
    refetch();
  }

  if (!data) {
    return <Loading></Loading>;
  }

  return (
    <div className="bg-black text-white p-5 ">
      <div className="w-full mx-auto rounded border">
        <img
          alt=""
          src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1000/public/2021-04/GettyImages-531284657-2000px.jpg?itok=AI2DCjiV"
          className="w-full h-[400px]"
        />
        <div className="m-5 ">
          <h1 className="text-2xl font-semibold leading-7">
            Beautiful Travel Blog
          </h1>
          <p className="my-2">
            Whether you are a brand new church planter with a dream to change
            the world or a seasoned ministry veteran with decades of experience,
            these posts will help you articulate what you've always felt deep
            within you.
          </p>
          <p className="my-2">
            Measuring Your Goals It’s that time of year again. The time when
            everybody is setting goals…and usually failing at them. One of the
            biggest mistakes I see people making when they set goals is not
            measuring them, or not measuring them very well. Typically, if we
            measure our goals, we only have one way of…
          </p>
          <p className="my-2">
            In 2023, we have an audacious goal. If you’ve been reading our blog,
            then you’ve heard about the world reach NewBreed currently has.
          </p>
        </div>
      </div>
      <div className="py-28">
        <h1 className="font-semibold text-xl mb-10">
          Comment - {data?.length}
        </h1>
        {/* coment section  */}
        <div className="flex gap-5 flex-wrap">
          {data?.length ? (
            <>
              {data?.map((comment) => (
                <div
                  key={comment._id}
                  className="flex gap-3 mb-10 items-center"
                >
                  {user?.photoURL ? (
                    <img
                      className="w-16 p-1 border rounded-full"
                      src={user?.photoURL}
                      alt="userPhoto"
                    />
                  ) : (
                    <FaUser className="w-16 h-16 p-1 text-white border rounded-full "></FaUser>
                  )}
                  <div>
                    <div className="flex justify-between items-center">
                      <h1 className="text-semibold">{comment.name}</h1>

                      <p
                        onClick={() => handleDeleteComment(comment._id)}
                        className="italic text-md font-semibold text-gray-400"
                      >
                        Cancle
                      </p>
                    </div>
                    <p className="text-gray-400">{comment.massage}</p>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <p className=" upperCase mb-5 italic text-gray-400 font-semibold text-md ">
              No comment available
            </p>
          )}
        </div>

        {/* form section */}
        <div className="w-full">
          <h1 className="text-xl font-semibold mb-10">Leave a Comment</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-2 my-7 justify-center items-center">
              <div className=" flex-grow relative inputBox">
                <input
                  {...register("name", { required: true })}
                  className="bg-transparent text-white border-none outline-none w-full shadow-none px-2 pb-2 leading-3 text-md"
                  required
                  type="text"
                  name="name"
                />
                <span className="absolute uppercase pointer-events-none left-0  leading-3 text-white font-semibold ">
                  Name
                </span>
                <i className="absolute left-0 bottom-0 w-full bg-white overflow-hidden h-1"></i>
              </div>
              <div className="flex-grow relative inputBox">
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
            </div>
            <div className="my-7 relative inputBox ">
              <textarea
                {...register("message", { required: true })}
                required
                type="text"
                className="bg-transparent text-white border-none outline-none w-full shadow-none px-2 pb-2 leading-3 text-md"
                name="message"
                cols="10"
                rows="5"
              ></textarea>
              <span className="absolute uppercase pointer-events-none left-0  leading-3 text-white font-semibold ">
                Message
              </span>
              <i className="absolute left-0 bottom-0 w-full bg-white overflow-hidden h-1"></i>
            </div>
            <button
              type="submit"
              className="w-full  py-2 bg-blue-600 text-white font-semibold text-md leading-tight uppercase rounded shadow-2xl hover:bg-blue-700 "
            >
              Add Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blog;
