import React from "react";
import { motion, useScroll } from "framer-motion";

const Parallax = ({ type }) => {
  const {scrollYProgress} = useScroll({
    target
  });
  return (
    <div
      className={`h-full w-full flex items-center justify-center ${
        type === "services"
          ? "bg-gradient-to-b from-lightDarkBlueBg to-darkBlueBg"
          : "bg-gradient-to-b from-darkBlueBg to-lightDarkBlueBg"
      }`}
    >
      <motion.h1 className="text-8xl">
        {type == "services" ? "What we Do?" : "What we Did?"}
      </motion.h1>
      <motion.div className="bg-[url('/stars.png')] bg-cover bg-bottom w-full h-full absolute"></motion.div>
      <motion.div className="bg-[url('/planets.png')] bg-cover bg-bottom w-full h-full absolute"></motion.div>
      <motion.div className="bg-[url('/mountains.png')] bg-cover bg-bottom w-full h-full absolute"></motion.div>
    </div>
  );
};

export default Parallax;
