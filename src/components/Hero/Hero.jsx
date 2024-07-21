import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./utils";


const Hero = () => {
  return (
    <div id="home" className="relative h-screen ">
        <Canvas
          camera={{
            position: [10, -17.5, -15],
          }}
          className="relative inset-0 bg-black"
        >
          {/* <OrbitControls maxDistance={20} minDistance={10} /> */}
          <directionalLight />
          <pointLight position={[-10, 0, -30]} power={10.0} />
          <PointCircle />
        </Canvas>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center pointer-events-none">
        <h1 className="text-slate-200 text-6xl md:text-9xl font-bold text-center font-Bruno">
          THE ACE <br />
          <p className="text-2xl md:text-4xl text-right">2024</p>
        </h1>
        <div className="absolute bottom-0 py-6 flex justify-between items-center w-full md:px-4 px-2 font-semibold text-lg md:text-3xl bg-black ">
          <button className="text-white w-1/3 pointer-events-auto border-r-2 hover:text-[#4440ba]">
            PARTNER WITH US
          </button>
          <button className="text-white w-1/3 pointer-events-auto border-r-2 hover:text-[#4440ba]">
            REGISTER
          </button>
          <button className="text-white w-1/3 pointer-events-auto hover:text-[#4440ba]">
            APPLY TO SPEAK
          </button>
        </div>
      </div>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 2, 5]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default Hero;

