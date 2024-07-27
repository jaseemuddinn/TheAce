import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="mx-auto px-6 py-12 text-slate-800">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-4xl font-bold md:text-5xl text-gray-200">
          You can Contact us <br />
          <span className="text-slate-400">through different platform</span>
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-lg bg-slate-200 px-4 py-2 font-medium text-black shadow-xl transition-colors hover:bg-slate-300"
        >
          More Links
        </motion.button>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <a href="mailto:contact@theace.tech">
            <CardTitle>On Mail</CardTitle>
            <div
              className="absolute bottom-0 left-4 right-4 top-2 translate-y-8 rounded-t-2xl p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url('https://cdn1.iconfinder.com/data/icons/google-new-logos-1/32/gmail_new_logo-512.png')`,
              }}
            ></div>
          </a>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <a href="https://www.linkedin.com/company/theacetech" target="_blank">
            <CardTitle>Also on LinkedIn</CardTitle>
            <div
              className="absolute left-1/2 transform -translate-x-1/2 right-4 top-20 w-56 h-56 flex justify-center items-center translate-y-8 rounded-t-2xl p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] bg-cover bg-ceter bg-no-repeat sm:block md:hidden"
              style={{
                backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png")`,
              }}
            ></div>

            <div
              className="absolute bottom-0 left-4 right-4 top-20 translate-y-8 rounded-t-2xl p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] bg-cover bg-center bg-no-repeat hidden md:block"
              style={{
                backgroundImage: `url("https://download.logo.wine/logo/LinkedIn/LinkedIn-Logo.wine.png")`,
              }}
            ></div>
          </a>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
          <a href="https://instagram.com/theacetech" target="_blank">
            <CardTitle>And this too</CardTitle>
            <div
              className="absolute left-1/2 transform -translate-x-1/2 right-4 top-16 w-56 h-56 flex justify-center items-center translate-y-8 rounded-t-2xl p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] bg-cover bg-ceter bg-no-repeat sm:block md:hidden"
              style={{
                backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png")`,
              }}
            ></div>
            <div
              className="absolute bottom-0 left-4 right-4 top-20 translate-y-8 rounded-t-2xl p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] bg-cover bg-center bg-no-repeat hidden md:block"
              style={{
                backgroundImage: `url("https://www.shawspaving.co.uk/wp-content/uploads/2019/01/instagram-font-logo-white-png-300x114.png")`,
              }}
            ></div>
          </a>
        </BounceCard>

        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>And finally this</CardTitle>
          <a href="https://x.com/theace_tech" target="_blank">
            <div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 right-4 top-12 w-56 h-56 flex justify-center items-center translate-y-8 rounded-t-2xl  p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] bg-cover bg-ceter bg-no-repeat"
              style={{
                backgroundImage: `url("https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-white-icon.png")`,
              }}
            ></div>
          </a>
        </BounceCard>
      </div>
    </section>
  );
}

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-black shadow-white-sm p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold text-white">
      {children}
    </h3>
  );
};

export default Contact;
