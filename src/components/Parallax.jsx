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

  return (
    <div
      ref={ref}
      className={`overflow-hidden h-full w-full flex items-center justify-center ${
        type === "services"
          ? "bg-gradient-to-b from-lightDarkBlueBg to-darkBlueBg"
          : "bg-gradient-to-b from-darkBlueBg to-lightDarkBlueBg"
      }`}
    >
      <motion.h1 style={{ y: yText }} className="text-8xl">
        {type == "services" ? "What we Do?" : "What we Did?"}
      </motion.h1>
      <motion.div
        style={{ x: yBg }}
        className="bg-[url('/stars.png')] bg-cover bg-bottom w-full h-full absolute"
      ></motion.div>
      <motion.div
        style={{ y: yBg }}
        className={`${
          type === "services"
            ? 'bg-[url("/planets.png")]'
            : 'bg-[url("/sun.png")]'
        } bg-cover bg-bottom w-full h-full absolute`}
      ></motion.div>
      <motion.div className="bg-[url('/mountains.png')] bg-cover bg-bottom w-full h-full absolute"></motion.div>
    </div>
  );
};

export default Parallax;
