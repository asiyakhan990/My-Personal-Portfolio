import React from "react";
import Navbar from "./Navbar";

const hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-[url(/avatar.png)] bg-right lg:bg-[15%] bg-cover"
      style={{
        backgroundSize: "35%",
        backgroundPosition: "left 100px top 150px",
      }}
    >
      <Navbar />

      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="hidden lg:block"></div>
        <div className="text-[20px] sm:text-[20px] leading-tight flex justify-center items-center">
          <div>
            <p data-aos="zoom-in-up" className="font-bold text-8xl mt-40">
              Hi,
            </p>
            <p data-aos="zoom-in-up" className="font-bold text-8xl">
              I'm Asiya Khan
            </p>
            <p data-aos="zoom-in-up" className="text-[20px] sm:[20px] mt-4">
              Welcome to my portfolio! I’m Asiya, "A
              Web Designer" or "AI Enthusiast" passionate about creating
              impactful and innovative solutions. Here, you'll find a showcase
              of my work, from projects and case studies to skills and
              experience. Each piece represents my commitment to quality,
              creativity, and growth. Let’s build something amazing together!
            </p>
            <button
              data-aos="zoom-in-up"
              id="button"
              className="flex justify-center items-center w-40 h-20 ml-[60%] rounded-lg bg-gray-700 text-white transform transition hover:bg-slate-900"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
