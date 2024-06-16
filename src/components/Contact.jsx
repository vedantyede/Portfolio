import { delay, motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      y: 10,
      opacity: 0,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="h-screen max-w-screen-xl m-auto flex items-center gap-10"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="flex-1 flex flex-col gap-10" variants={variants}>
        <motion.h1 className="text-7xl font-bold">
          Let's Work Together
        </motion.h1>
        <motion.div className="" variants={variants}>
          <h2 className="font-bold">Mail</h2>
          <span>vedantyede@gmail.com</span>
        </motion.div>
        <motion.div className="" variants={variants}>
          <h2 className="font-bold">Address</h2>
          <span>Gondia, Maharashtra - 441614</span>
        </motion.div>
        <motion.div className="" variants={variants}>
          <h2 className="font-bold">Phone</h2>
          <span>+91 9604065882</span>
        </motion.div>
      </motion.div>
      <div className="flex-1 flex flex-col gap-10">
        <motion.div
          className="stroke-amber-500 absolute m-auto"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="450px"
            height="450px"
            viewBox="0 0 64 64"
            fill="none"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 2 }}
              d="M53.26 54.62a4.09 4.09 0 0 0 2.51-5.22l-1.36-3.87A4.1 4.1 0 0 0 49.18 43c-7.73 2.71-10.45-5-11.81-8.88S33.3 22.55 41 19.83a4.1 4.1 0 0 0 2.51-5.22l-1.36-3.87A4.1 4.1 0 0 0 37 8.23c-9.66 3.4-14.1 9.3-7.31 28.63S43.6 58 53.26 54.62z"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 1, delay: 2 }}
              d="M34.81 48.18A4 4 0 0 0 32 52a4 4 0 0 1-8 0 4 4 0 0 0-8 0 4 4 0 0 1-8 0"
            />
          </svg>
        </motion.div>
        <motion.form
          className="flex flex-col"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input
            className="p-5 bg-transparent border text-white rounded-md m-2"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="p-5 bg-transparent border text-white rounded-md m-2"
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            className="p-5 bg-transparent border text-white rounded-md m-2"
            rows={8}
            placeholder="Message"
          ></textarea>
          <button className="bg-orange-500 border-none rounded-lg w-48 text-black m-2 p-2 cursor-pointer font-semibold">
            Submit
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
