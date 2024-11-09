import React from "react";
import Heading from "./Heading";
import Card from "./Card";

const data = [
  {
    id: 0,
    title: "Todo List",
    desc: "A Next.js & TypeScript based app for managing & organizing",
    img: "/todoapp.png",
    tags: ["React", "Node", "CSS", "HTML", "TypeScript"],
  },
  {
    id: 1,
    title: "Countdown Timer",
    desc: "A Countdown Timer app helps you set and track time for various tasks, events, or goals. It allows users to specify a duration or end time",
    img: "/countdowntimer.png",
    tags: ["React", "Node", "CSS", "HTML", "TypeScript"],
  },
  {
    id: 2,
    title: "Adventure Game",
    desc: "A TypeScript based Adventure game. Perfect for players who enjoy a blend of problem-solving and action within a dynamic, coded world.",
    img: "/Adventuregame.png",
    tags: ["React", "Node", "CSS", "HTML", "TypeScript"],
  },
  {
    id: 3,
    title: "Login Form",
    desc: "A simple login form in HTML and CSS provides a basic, styled layout for user authentication, including fields for a username and password, and a submit button.",
    img: "/Loginform.png",
    tags: ["React", "Node", "CSS", "HTML", "TypeScript"],
  },
  {
    id: 4,
    title: "Word Counter",
    desc: "A Word Counter in TypeScript is a command-line tool that counts the words in a given text input. Users can enter text in the terminal, and the program calculates and displays the total word count instantly. ",
    img: "/wordcounter.png",
    tags: ["React", "Node", "CSS", "HTML", "TypeScript"],
  },
  {
    id: 5,
    title: "Birthday Project",
    desc: "A Birthday Project in Next.js is a web app that celebrates birthdays with personalized features, such as countdown timers, custom messages, or themed pages for the person being celebrated.",
    img: "/Birthdayproject.png",
    tags: ["React", "Node", "CSS", "HTML", "TypeScript"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="Container pt-32">
      <Heading title="My Projects" />
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center ]">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
