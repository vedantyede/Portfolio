import { motion } from "framer-motion";
const Skills = () => {
  const skillsData = [
    {
      id: 1,
      url: "./html-icon.png",
      name: "HTML"
    },
    {
      id: 2,
      url: "./css-icon.png",
      name: "CSS"
    },
    {
      id: 3,
      url: "./javascript-programming-language-icon.png",
      name: "JavaScript"
    },
    {
      id: 4,
      url: "./typescript-programming-language-icon.png",
      name: "Typescript"
    },
    {
      id: 5,
      url: "./react-js-icon.png",
      name: "ReactJS"
    },
    {
      id: 6,
      url: "./redux-icon.png",
      name: "Redux"
    },
    {
      id: 7,
      url: "./mongodb-icon.png",
      name: "MongoDB"
    },
    {
      id: 8,
      url: "./express-js-icon.png",
      name: "ExpressJS"
    },
    {
      id: 9,
      url: "./node-js-icon.png",
      name: "NodeJS"
    },
    {
      id: 10,
      url: "./tailwind-css-icon.png",
      name: "Tailwind"
    },
    {
      id: 11,
      url: "./sass-icon.png",
      name: "Sass"
    },
    {
      id: 12,
      url: "./bootstrap-5-logo-icon.png",
      name: "Bootstrap"
    },
    {
      id: 13,
      url: "./webpack-icon.png",
      name: "Webpack"
    },
    {
      id: 14,
      url: "./aws-icon.png",
      name: "AWS"
    },
    {
      id: 15,
      url: "./git-icon.png",
      name: "GIT"
    },

  ]
  return (
    <div className="bg-gradient-to-b to-darkBlueBg from-lightDarkBlueBg overflow-hidden relative">
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <div className="text-5xl sm:text-8xl font-bold mb-10">Technologis, I worked on!</div>
        <div className="">
          <ul className="flex justify-center gap-10 flex-wrap lg:m-20">
            {skillsData.map((item) => (
              <li className="" key={item.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                  }}
                >
                  <a href="" className="flex flex-col justify-center items-center lg:w-24">
                    <img src={item.url} alt="" className="w-10" />
                    <span>{item.name}</span>
                  </a>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills