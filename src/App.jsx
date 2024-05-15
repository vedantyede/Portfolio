import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Parallax from "./components/Parallax";
import Sidebar from "./components/Sidebar";
import Education from "./components/Education";

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
      <section>
        <Education />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
      <Sidebar />
    </div>
  );
};

export default App;
