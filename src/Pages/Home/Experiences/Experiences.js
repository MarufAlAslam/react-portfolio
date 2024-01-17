import React from "react";
import ExperienceCard from "./ExperienceCard";
import "./Experiences.css";

const Experiences = () => {
  const experiences = [
    {
      id: 1,
      title: "Web Developer",
      company: "Independent Telivision LTD.",
      location: "Dhaka, Bangladesh",
      duration: "December, 2023 - Present",
      description:
        "React.js, JSX, Tailwind, HTML, CSS, Bootstrap, Component Libraries, Node.js, Express.js, Git, Github, Web Mail, News Media, SaaS, CMS, PHP, Xampp, MySQL, MongoDB, Mongoose, Redux ",
    },
    {
        id: 2,
        title: "Freelance Web Developer",
        company: "Fiverr",
        location: "Remote",
        duration: "October, 2020 - Present",
        description:
          "HTML, CSS, Javascript, React.js, Next.js, Node.js, Express.js, jQuery, Bootstrap, Tailwind, MongoDB, Firebase, PHP, MySQL, WordPress, Elementor, PSD to HTML, Figma to HTML, XD to HTML.",
      },
    {
      id: 3,
      title: "Software Engineer",
      company: "Jadroo E-Commerce LTD",
      location: "Dhaka, Bangladesh",
      duration: "April, 2023 - December, 2023",
      description:
        "React.js, JSX, Tailwind, HTML, CSS, Bootstrap, Component Libraries, Node.js, Express.js, Git, Github, Asana, PostMan, Express Generator, MongoDB, Mongoose, Redux ",
    },
    {
      id: 4,
      title: "Software Engineer - L1",
      company: "CoreXLab Limited",
      location: "Dhaka, Bangladesh",
      duration: "December, 2022 - April, 2023",
      description:
        "React.js, JSX, Tailwind, HTML, CSS, Bootstrap, Component Libraries, Node.js, Express.js, Git, Github, Asana, PostMan, Express Generator, MongoDB, Mongoose, Redux ",
    },
    {
      id: 5,
      title: "Trainer - Responsive web design and Development",
      company: "LEDP",
      location: "Dinajpur, Bangladesh",
      duration: "February, 2021 - May, 2022",
      description:
        "Basic Computer, Internet Browsing, HTML, CSS, Bootstrap, Javascript, jQuery, PSD to HTML, XD to HTML, Figma to HTML, WordPress, WooCommerce.",
    },
  ];
  return (
    <div
      className="py-10 lg:w-5/6 w-full lg:px-0 px-4 mx-auto"
      id="experiences"
    >
      <h2 className="text-3xl mb-3">My Experiences</h2>

      <div className="exp-card">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience}></ExperienceCard>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
