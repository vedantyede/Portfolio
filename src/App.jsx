import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Parallax from "./components/Parallax";
import Sidebar from "./components/Sidebar";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="">
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="About Me">
        <Parallax type="About Me" />
      </section>
      <section id="Education">
        <Education />
      </section>
      <section id="Experience">
        <Experience />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="My Work">
        <Parallax type="My Work" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      <Sidebar />
    </div>
  );
};

export default App;
