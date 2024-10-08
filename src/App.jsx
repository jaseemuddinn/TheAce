// import { Route, Router, Routes, useNavigate } from "react-router-dom";
// import "./App.css";
// import About from "./components/About/About";
// import Contact from "./components/Contact/Contact";
// import Hero from "./components/Hero/Hero";
// import Navbar from "./components/Navbar/Navbar";
// import Register from "./components/Register/Register";
// import Sponsors from "./components/Sponsors/Sponsors";
// import Links from "./components/Links/Links";

// function App() {

//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <About />
//       <Register />
//       <Sponsors />
//       <Contact />
//       <Routes>
//         <Route path="/links" element={<Links />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { Suspense, lazy } from "react";
import SkeletonCard from "./components/Skeleton/SkeletonCard";

// Lazy load components
const About = lazy(() => import("./components/About/About"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Register = lazy(() => import("./components/Register/Register"));
const Sponsors = lazy(() => import("./components/Sponsors/Sponsors"));

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense
        fallback={
          <div>
            <SkeletonCard />
          </div>
        }
      >
        <About />
        <Register />
        <Sponsors />
        <Contact />
      </Suspense>
    </>
  );
}

export default App;
