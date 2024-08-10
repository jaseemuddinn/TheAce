import { Route, Router, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";
import Sponsors from "./components/Sponsors/Sponsors";
import Links from "./components/Links/Links";
// import useIntersectionObserver from "./IntersectionObserver";
// import { useState } from "react";

function App() {
  // const navigate = useNavigate();
  // const [activeSection, setActiveSection] = useState("");

  // useIntersectionObserver((section) => {
  //   setActiveSection(section);
  //   navigate(`#${section}`, { replace: true });
  // });
  return (
    <>
      {/* <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="register">
        <Register />
      </section>
      <section id="sponsors">
        <Sponsors />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Routes>
        <Route path="/links" element={<Links />} />
      </Routes> */}

      <Navbar />
      <Hero />
      <About />
      <Register />
      <Sponsors />
      <Contact />
      <Routes>
        <Route path="/links" element={<Links />} />
      </Routes>
    </>
  );
}

export default App;
