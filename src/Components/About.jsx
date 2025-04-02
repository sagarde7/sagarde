import React from "react";
import { motion } from "motion/react"

function About() {
  return (
    <>
    <div className="overflow-x-hidden ">
      <motion.div
      initial={{opacity:0,translateX:"10%"}}
      whileInView={{opacity:1,translateX:"0"}}
      transition={{duration:1.5}}
      viewport={{ once: true }}
      className="about
       text-center h-[70vh]  ">
        <div className="title text-4xl underline mt-[25vh]">About Me</div>
        <div className="content text-xl flex justify-center  p-[5rem]">
          I'm a Full Stack Developer with expertise in HTML, CSS, JavaScript,
          Bootstrap, Tailwind, React.js, Node.js, Express.js, MongoDB.
          I have a strong problem-solving mindset and enjoy building
          user-friendly, scalable web applications. Beyond development, I'm
          always eager to expand my knowledge in web technologies and marketing.
          I thrive on challenges that push me to solve real-world problems
          through code. Currently, I'm looking for opportunities to collaborate
          with a team that values innovation, creativity, and cutting-edge
          technology.
        </div>
      </motion.div>
      </div>
    </>
  );
}

export default About;
