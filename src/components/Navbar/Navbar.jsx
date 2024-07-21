import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HamburgerButton from "../HamburgerButton/Hamburger";

const menuItems = ["Home", "About", "Event", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };


  const menuVariants = {
    hidden: { x: "-100%" },
    visible: {
      x: 0,
      transition: {
        staggerChildren: 0.25,
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    exit: {
      x: "-100%",
      transition: {
        staggerChildren: 0.25,
        staggerDirection: 1,
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const itemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: -10, opacity: 0 },
  };

  return (
    <div className="relative">
      <div
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 p-2 text-white rounded"
      >
        <HamburgerButton />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed inset-0 bg-[#4440ba] bg-opacity-100 flex flex-col items-start justify-center space-y-4 p-8 z-40"
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={`#${item.toLowerCase()}`}
                className="md:text-9xl text-6xl font-bold text-gray-400 transition duration-900 ease-in-out scale-50 hover:text-white"
                onClick={closeMenu}
              >
                {item}
              </motion.a>
            ))}
            
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
