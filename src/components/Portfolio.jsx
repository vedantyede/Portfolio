import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Portfolio Website",
    img: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Developed a personal portfolio website using ReactJS, Tailwind CSS, and Framer Motion libraries. This project aimed to showcase my frontend development skills with a responsive layout and modern design. Utilizing Tailwind CSS for rapid styling, I integrated smooth animations with Framer Motion to enhance user engagement. This project highlights my ability to create dynamic and user-centric web experiences.",
    visit: "https://vedantyede.netlify.app/",
  },
  {
    id: 2,
    title: "E-commerce App",
    img: "https://plus.unsplash.com/premium_photo-1683758342885-7acf321f5d53?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Develop a furniture e-commerce website, using ReactJS, Tailwind CSS, and Framer Motion for the frontend, and Node.js with Express and MongoDB for the backend. This project prioritized a modern and intuitive user interface, ensuring seamless navigation. Backend integration with Node.js and Express facilitated efficient data processing and inventory management, while MongoDB ensured scalability. Employing responsive design principles, I optimized the website for diverse devices, showcasing my proficiency in full-stack web development.",
    visit: "https://furnik.netlify.app/",
  },
  // {
  //   id: 3,
  //   title: "Weather App",
  //   img: "https://images.unsplash.com/photo-1614480633894-f3b7f4bb0e76?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   desc: "Develop a furniture e-commerce website, using ReactJS, Tailwind CSS, and Framer Motion for the frontend, and Node.js with Express and MongoDB for the backend. This project prioritized a modern and intuitive user interface, ensuring seamless navigation. Backend integration with Node.js and Express facilitated efficient data processing and inventory management, while MongoDB ensured scalability. Employing responsive design principles, I optimized the website for diverse devices, showcasing my proficiency in full-stack web development.",
  //   visit: "https://furnik.netlify.app/",
  // },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  return (
    <section id="Portfolio">
      <div className="flex items-center justify-center w-full h-screen overflow-hidden">
        <div className="max-w-screen-xl h-full flex gap-14 items-center justify-center m-auto">
          <div className="flex-1 h-1/2" ref={ref}>
            <img
              className="object-cover h-full w-full rounded-xl"
              src={item.img}
              alt=""
            />
          </div>
          <motion.div className="flex-1 flex flex-col" style={{ y }}>
            <h2 className="text-xl">{item.title}</h2>
            <p className="text-slate-500 mt-2">{item.desc}</p>
            <a href={item.visit} target="_blank" rel="noreferrer">
              <button className="bg-orange-500 border-none rounded-lg w-48 text-black mt-2 p-2 cursor-pointer font-semibold">
                Visit Website
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="relative" ref={ref}>
      <div className="sticky top-0 left-0 pt-10 text-center text-orange-500 font-bold text-5xl">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="h-3 bg-white my-2"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
