import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="pt-32 container">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-8">
          <h2 className="text-7xl font-bold" data-aos="zoom-in-up">
            Get in touch
          </h2>
          <p className="text-white text-[18xl] pt-2" data-aos="zoom-in-up">
            Give me a call or send me a message, send me email. Let’s connect!
            Feel free to reach out for collaboration or inquiries.
          </p>
          <div className="flex gap-3 items-center" data-aos="zoom-in-up">
            <AiOutlineMail size={30} /> asiyakhan02123@gmail.com
          </div>

          <div className="flex gap-3 items-center" data-aos="zoom-in-up">
            <BsTelephone size={30} /> 03113318859
          </div>

          <div className="flex gap-3 items-center" data-aos="zoom-in-up">
            <GrLinkedin size={30} /> Asiya Khan
          </div>

          <div className="flex gap-3 items-center" data-aos="zoom-in-up">
            <FaGithub  size={30} /> asiyakhan990
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="h-[40px] bg-transparent border border-black "
              id="name"
            />
          </div>

          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="h-[40px] bg-transparent border border-black"
              id="email"
            />
          </div>

          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="msg">Message</label>
            <textarea
              className=" bg-transparent border border-black"
              id="msg"
              rows={8}
            >
              {" "}
            </textarea>
          </div>
          <button
            className="bg-gray-700 p-2 px-6 hover:bg-slate-900"
            data-aos="zoom-in-up"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
