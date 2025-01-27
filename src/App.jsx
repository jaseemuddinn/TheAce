
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
