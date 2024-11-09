import React from "react";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import Heading from "./Heading";

const Skills = () => {
  return (
    <div id="skills" className="container pt-52 pb-20">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl">Technologies I work with.</h2>
          <p className="text-white pt-5" data-aos="zoom-in-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque non
            laudantium, officiis voluptate cupiditate quam officia sunt quas
            esse minus sit aut in aliquam fugit a ipsa aspernatur, facere
            placeat. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Minus, consequatur? Quaerat expedita, harum sint illo fugiat in fuga
            voluptates a voluptatum labore aperiam autem incidunt, nesciunt,
            voluptate ipsa soluta nihil. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. At atque sed ipsam iure debitis, delectus commodi
            quam, eligendi doloribus ex distinctio cum voluptas voluptatibus
            ducimus aliquam. Corporis labore laboriosam ad?
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2 text-accent text-3xl sm:text-4xl">
            <div className="space-y-2">
              <h2 data-aos="zoom-in-up">
                TypeScript <SiTypescript size={30} />
              </h2>
              <h2 data-aos="zoom-in-up">
                Next.js <RiNextjsFill size={30} />
              </h2>
              <h2 data-aos="zoom-in-up">
                React.js <FaReact size={30} />
              </h2>
            </div>

            <div className="space-y-2 ">
              <h2 data-aos="zoom-in-up">
                Tailwind CSS <RiTailwindCssFill size={30} />
              </h2>
              <h2 data-aos="zoom-in-up">
                JavaScript <IoLogoJavascript size={30} />
              </h2>
              <h2 data-aos="zoom-in-up">
                Node.js <FaNodeJs size={30} />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
