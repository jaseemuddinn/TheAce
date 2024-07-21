import React from "react";
import commudleLogo from "../../assets/img/CommudleLogo.svg";

function Register() {
  const navigateToCommudle = () => {
    window.open("https://commudle.com/theace24", "_blank");
  };
  return (
    <div className="mb-20">
      <div onClick={navigateToCommudle} className="bg-[#2c2b2b] h-96 mx-10 rounded-2xl hover:shadow-white-xl shadow-white-lg transition-shadow cursor-pointer">
        <h1 className="text-white text-center pt-10 md:text-5xl text-2xl font-bold font-Bruno">
          REGISTRATION
        </h1>
        <div className="justify-center flex flex-col items-center gap-8 mt-16">
          <p className="text-white text-center md:text-3xl text-2xl">
            Register for{" "}
            <span className="text-[#4440ba] font-Bruno md:text-5xl text-3xl">
              {" "}
              THE ACE'24{" "}
            </span>{" "}
            on
          </p>
          <img className="w-52 md:w-96" src={commudleLogo} alt="Commudle" />
        </div>
      </div>
    </div>
  );
}

export default Register;
