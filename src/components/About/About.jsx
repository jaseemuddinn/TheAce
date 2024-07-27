import React from "react";
import img from "../../assets/eventImg/1.jpeg";
import img1 from './img/1.png'
import img2 from './img/2.jpeg'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

function About() {
  return (
    <div id="about" className="bg-[#030303] text-white md:flex items-center justify-center md:px-20 px-4 text-justify md:gap-10">
      <div className="pr-10 w-full sticky">
        <h1 className="md:text-7xl text-5xl font-bold font-Montserrat">
          OUR 2024 <br />
          <span className="text-[#4440ba] font-Bruno">THE ACE</span> <br />
          VISION{" "}
        </h1>
        <p className="md:text-3xl text-2xl text-white font-semibold leading-tight">
          An 8 hour tech conference experience and takeover with emerging technologies.
        </p>
        <p className=" text-;g md:text-xl leading-loose">
          <span className="font-bold">
            We build pathways for students who are eager to learn about emerging
            technologies{" "}
          </span>{" "}
          and apply it too to solve real world problems and also empower them to
          explore for jobs and leadership roles within all business, media, and
          technology areas.{" "}
        </p>
        <ul className="md:text-3xl text-xl mt-4 leading-relaxed">
          <li>
            <span className="font-bold">10+</span> Speakers
          </li>
          <li>
            <span className="font-bold">15+</span> Breakout Session
          </li>
          <li>
            <span className="font-bold">500+</span> Attendees
          </li>
          <li>
            <span className="font-bold">5000+</span> Registration
          </li>
        </ul>
      </div>
      <div className="md:w-1/2 w-full">
        {/* <img src={img} alt="theAce" className='rounded-2xl'/> */}
        <HorizontalScrollCarousel />
      </div>
    </div>
  );
}

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const cards = [
  {
    url: img,
    title: "Chase",
    id: 1,
  },
  {
    url: img1,
    title: "IT",
    id: 2,
  },
  {
    url: img2,
    title: "UNTIL",
    id: 3,
  },
  {
    url: img,
    title: "YOU",
    id: 4,
  },
  {
    url: img1,
    title: "ACE",
    id: 5,
  },
  {
    url: img2,
    title: "IT",
    id: 6,
  },
];

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "1rem",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-Bruno font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default About;
