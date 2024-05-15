import React, { useState } from "react";
import ToggleButton from "./Sidebar/ToggleButton";
import Links from "./Sidebar/Links";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1000px at 50px 50px)",
      transition:{
        type: "spring",
        stiffness: 80,
        damping: 10,
      }
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition:{
        delay: 0.2,
        type: "spring",
        stiffness: 500,
        damping: 40,
      }
    },
  };
  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="flex flex-col items-center justify-center bg-white text-black"
    >
      <motion.div
        variants={variants}
        className="top-0 left-0 bottom-0 w-96 bg-white fixed"
      >
        <Links setOpen={setOpen}/>
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
