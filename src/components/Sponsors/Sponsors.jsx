import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import hackquest from "../../assets/img/hackquest.jpg";
import xyz from '../../assets/img/xyz.svg';

const Sponsors = () => {
  return (
    <>
      <h1
        id="sponsors"
        className="text-white text-center text-4xl md:text-6xl font-bold font-Bruno mb-10"
      >
        Our Sponsors
      </h1>
      <div className="w-full flex gap-10 flex-wrap place-content-center px-4 text-slate-900">
        <div className="flex justify-center items-center mb-10">
          <TiltCard
            img={"https://placehold.co/150x150/png"}
            tier={"Power"}
            sponsorsName={"TBD"}
            backgroundColor={"linear-gradient(to right, #002366, #1E90FF)"}
          />
        </div>
        <div className="flex justify-center items-center mb-10">
          <TiltCard
            img={"https://placehold.co/150x150/png"}
            tier={"Title"}
            sponsorsName={"TBD"}
            backgroundColor={"linear-gradient(to right, #4B0082, #8A2BE2)"}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-20">
        <TiltCard
          img={hackquest}
          tier={"Platinum"}
          sponsorsName={"HackQuest"}
          backgroundColor={"linear-gradient(to right, #E5E4E2, #B0C4DE)"}
        />
        <TiltCard
          img={xyz}
          tier={"Gold"}
          sponsorsName={".XYZ"}
          backgroundColor={"linear-gradient(to right, #FFD700, #FFEC8B)"}
        />
        <TiltCard
          img={"https://placehold.co/150x150/png"}
          tier={"Silver"}
          sponsorsName={"TBD"}
          backgroundColor={"linear-gradient(to right, #C0C0C0, #A9A9A9)"}
        />
      </div>
    </>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ sponsorsName, backgroundColor, tier, img }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
        background: backgroundColor,
      }}
      className="relative h-96 w-72 rounded-xl"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        <h1 className="text-center font-semibold text-2xl mb-4">{tier}</h1>
        <img
          src={img}
          className="rounded-full"
          alt=""
          style={{
            transform: "translateZ(75px)",
            height: "150px",
            width: "150px",
          }}
        />
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
          {sponsorsName}
        </p>
      </div>
    </motion.div>
  );
};

export default Sponsors;
