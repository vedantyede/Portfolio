import { animate, motion, stagger } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
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
const sliderScroll = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="h-[calc(100vh-80px)] bg-gradient-to-b from-darkBlueBg to-lightDarkBlueBg overflow-hidden relative">
      <div className="max-w-7xl h-full m-auto ">
        <motion.div
          className="h-full flex flex-col justify-center gap-10"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            className="text-2xl text-purple-800 font-bold tracking-morewidest"
            variants={textVariants}
          >
            VEDANT YEDE
          </motion.h2>
          <motion.h1 className="w-10 lg:w-full text-7xl font-bold" variants={textVariants}>
            Frontend Developer
          </motion.h1>
          <motion.div className="" variants={textVariants}>
            <motion.button
              className="z-50 p-5 mr-2 border rounded-md cursor-pointer"
              variants={textVariants}
            >
              See the Latest Works
            </motion.button>
            <motion.button
              className="z-50 80 p-5 ml-2 border rounded-md cursor-pointer bg-white text-black absolute"
              variants={textVariants}
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            initial="initial"
            animate="scrollButton"
            src="./scroll.png"
            alt=""
            className="w-12"
          />
        </motion.div>
      </div>
      <motion.div
        className="z-0 absolute text-50vh -bottom-28 whitespace-nowrap opacity-10 w-2/4"
        variants={sliderScroll}
        initial="initial"
        animate="animate"
      >
        Full Stack Developer
      </motion.div>
      <div className="hidden sm:block h-full absolute top-0 right-24 ">
        <img src="./hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
