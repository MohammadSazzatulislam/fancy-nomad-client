import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { useMotionValue, useTransform, motion } from "framer-motion";

const Placess = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotatey = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <div className="py-28 px-5 bg-white">
      <div>
        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
          className="lg:text-5xl text-center textGradient  md:text-4xl text-3xl font-bold uppercase leading-8 "
        >
          Travel Most Popular Place In
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
          className="lg:text-5xl text-center textGradient  md:text-4xl text-3xl font-bold uppercase leading-8 "
        >
          Bangladesh
        </h2>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        style={{ perspective: 2000 }}
        className="flex flex-wrap justify-center items-center gap-5 mt-28"
      >
        {/* <!--Card 1--> */}
        <motion.div
          style={{ x, y, rotateX, rotatey, z: 100 }}
          drag
          dragElastic={0.18}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
          whileHover={{ scaleY: 1.2 }}
          className="w-full  lg:w-96 cursor-grab md:w-80 border  rounded overflow-hidden shadow-lg"
        >
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1590603740183-980e7f6920eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y294cyUyMGJhemFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="Mountain"
          />
          <div className="px-6 py-4 flex gap-2 justify-center items-center">
            <FaLocationArrow className="w-5 h-5"></FaLocationArrow>
            <p className="font-bold text-xl mb-2">Cox's Buzzer ,</p>
            <p className="font-bold text-xl mb-2">Chattogram</p>
          </div>
        </motion.div>
        {/* <!--Card 1--> */}
        {/* <!--Card 1--> */}
        <motion.div
          style={{ x, y, rotateX, rotatey, z: 100 }}
          drag
          dragElastic={0.18}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
          whileHover={{ scaleY: 1.2 }}
          className="w-full  lg:w-96 cursor-grab md:w-80 border  rounded overflow-hidden shadow-lg"
        >
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1590603740183-980e7f6920eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y294cyUyMGJhemFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="Mountain"
          />
          <div className="px-6 py-4 flex gap-2 justify-center items-center">
            <FaLocationArrow className="w-5 h-5"></FaLocationArrow>
            <p className="font-bold text-xl mb-2">Cox's Buzzer ,</p>
            <p className="font-bold text-xl mb-2">Chattogram</p>
          </div>
        </motion.div>
        {/* <!--Card 1--> */}
        {/* <!--Card 1--> */}
        <motion.div
          style={{ x, y, rotateX, rotatey, z: 100 }}
          drag
          dragElastic={0.18}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
          whileHover={{ scaleY: 1.2 }}
          className="w-full  lg:w-96 cursor-grab md:w-80 border  rounded overflow-hidden shadow-lg"
        >
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1590603740183-980e7f6920eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y294cyUyMGJhemFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="Mountain"
          />
          <div className="px-6 py-4 flex gap-2 justify-center items-center">
            <FaLocationArrow className="w-5 h-5"></FaLocationArrow>
            <p className="font-bold text-xl mb-2">Cox's Buzzer ,</p>
            <p className="font-bold text-xl mb-2">Chattogram</p>
          </div>
        </motion.div>
        {/* <!--Card 1--> */}
        {/* <!--Card 1--> */}
        <motion.div
          style={{ x, y, rotateX, rotatey, z: 100 }}
          drag
          dragElastic={0.18}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
          whileHover={{ scaleY: 1.2 }}
          className="w-full  lg:w-96 cursor-grab md:w-80 border  rounded overflow-hidden shadow-lg"
        >
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1590603740183-980e7f6920eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y294cyUyMGJhemFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="Mountain"
          />
          <div className="px-6 py-4 flex gap-2 justify-center items-center">
            <FaLocationArrow className="w-5 h-5"></FaLocationArrow>
            <p className="font-bold text-xl mb-2">Cox's Buzzer ,</p>
            <p className="font-bold text-xl mb-2">Chattogram</p>
          </div>
        </motion.div>
        {/* <!--Card 1--> */}
        {/* <!--Card 1--> */}
        <motion.div
          style={{ x, y, rotateX, rotatey, z: 100 }}
          drag
          dragElastic={0.18}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
          whileHover={{ scaleY: 1.2 }}
          className="w-full  lg:w-96 cursor-grab md:w-80 border  rounded overflow-hidden shadow-lg"
        >
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1590603740183-980e7f6920eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y294cyUyMGJhemFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="Mountain"
          />
          <div className="px-6 py-4 flex gap-2 justify-center items-center">
            <FaLocationArrow className="w-5 h-5"></FaLocationArrow>
            <p className="font-bold text-xl mb-2">Cox's Buzzer ,</p>
            <p className="font-bold text-xl mb-2">Chattogram</p>
          </div>
        </motion.div>
        {/* <!--Card 1--> */}
        {/* <!--Card 1--> */}
        <motion.div
          style={{ x, y, rotateX, rotatey, z: 100 }}
          drag
          dragElastic={0.18}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
          whileHover={{ scaleY: 1.2 }}
          className="w-full  lg:w-96 cursor-grab md:w-80 border  rounded overflow-hidden shadow-lg"
        >
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1590603740183-980e7f6920eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y294cyUyMGJhemFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="Mountain"
          />
          <div className="px-6 py-4 flex gap-2 justify-center items-center">
            <FaLocationArrow className="w-5 h-5"></FaLocationArrow>
            <p className="font-bold text-xl mb-2">Cox's Buzzer ,</p>
            <p className="font-bold text-xl mb-2">Chattogram</p>
          </div>
        </motion.div>
        {/* <!--Card 1--> */}
      </div>
    </div>
  );
};

export default Placess;
