import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

  return (
    <div
      ref={ref}
      className={`overflow-hidden h-full w-full flex items-center justify-center ${
        type === "About Me"
          ? "bg-gradient-to-b from-lightDarkBlueBg to-darkBlueBg"
          : "bg-gradient-to-b from-darkBlueBg to-lightDarkBlueBg"
      }`}
    >
      {/* <motion.div
        style={{ y: yBg2 }}
        className="bg-[url('./stars.png')] bg-cover bg-bottom w-full h-full absolute"
      ></motion.div> */}
      <motion.div
        style={{ y: yBg2 }}
        className={`${
          type === "About Me"
            ? 'bg-[url("./planets.png")]'
            : 'bg-[url("./sun.png")]'
        } bg-cover bg-bottom w-full h-full absolute`}
      ></motion.div>
      <motion.div className="bg-[url('./mountains.png')] bg-cover sm:mt-0 mt-12 bg-bottom w-full h-full absolute"></motion.div>
      <motion.h1 style={{ y: yText }} className="">
        <div className="text-8xl text-slate-400 font-bold">
          {type == "About Me" ? "ABOUT ME" : "MY WORK"}
        </div>
        <div className="max-w-3xl text-slate-200">
          {type == "About Me"
            ? "Highly skilled Frontend Developer with 3 years of experience in building and maintaining scalable web applications using ReactJS. Proficient in integrating RESTful APIs, implementing state management with Redux, and applying modern frontend technologies. Strong problem-solving skills and a collaborative team player with a focus on delivering high-quality code and user experiences."
            : ""}
        </div>
      </motion.h1>
    </div>
  );
};

export default Parallax;
