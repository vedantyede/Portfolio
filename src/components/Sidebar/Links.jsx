import { animate, motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({ setOpen }) => {
  const items = ["Homepage", "About Me", "Portfolio", "Contact", "About"];
  return (
    <motion.ul
      variants={variants}
      className="flex flex-col items-center justify-center gap-5 absolute w-full h-screen "
    >
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          className="font-light text-2xl"
          variants={itemVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => setOpen((prev) => !prev)}
        >
          {item}
        </motion.a>
      ))}
    </motion.ul>
  );
};

export default Links;
