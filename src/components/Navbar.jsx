import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex justify-around items-center h-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-lg antialiased font-semibold"
        >
          vedantyede
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center"
        >
          <a
            href="https://www.linkedin.com/in/vedantyede/"
            target="_blank"
            className="mx-2"
          >
            <img className="h-5" src="./linkedIn.png" alt="" />
          </a>
          <a
            href="https://github.com/vedantyede"
            target="_blank"
            className="mx-2"
          >
            <img className="h-5" src="./github.png" alt="" />
          </a>
          <a
            href="https://leetcode.com/vedantyede/"
            target="_blank"
            className="mx-2"
          >
            <img className="h-5" src="./leetcode.png" alt="" />
          </a>
          <a
            href="https://www.hackerrank.com/profile/vedantyede"
            target="_blank"
            className="mx-2"
          >
            <img className="h-5" src="./hackerrank.png" alt="" />
          </a>
          <a
            href="https://www.instagram.com/vedantyede/"
            target="_blank"
            className="mx-2"
          >
            <img className="h-5" src="./instagram.png" alt="" />
          </a>
          <a
            href="https://www.facebook.com/vedant.yede/"
            target="_blank"
            className="mx-2"
          >
            <img className="h-5" src="./facebook.png" alt="" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
