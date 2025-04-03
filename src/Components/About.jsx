import React from "react";
import { motion } from "motion/react";

function About() {
  return (
    <>
      <div className="overflow-x-hidden ">
        <div
          
          className="about
       text-center h-[75vh]  "
        >
          <div className="title text-4xl underline mt-[18vh] font-bold">About Me</div>
          <motion.div 
          initial={{ opacity: 0, translateX: "100%" }}
          whileInView={{ opacity: 1, translateX: "0" }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="content text-xl  text-justify  p-[5rem]">
          <div className="para1 my-4">
          I'm a third-year student at Chandigarh University with a deep passion
          for Data Structures & Algorithms (DSA) and Web Development. I love
          tackling challenges, building solutions from scratch, and crafting
          elegant, user-friendly websites that offer a seamless experience.
          Striving for optimal solutions while solving problems is a core part
          of my approach, as I firmly believe in the power of code to create
          meaningful and impactful solutions.
          </div>
          
          <div className="para2 my-4">
          Beyond academics, I have actively participated in hackathons and tech
          communities, achieving notable milestones. My team ranked Top 27 out
          of 600+ teams in the Internal Smart India Hackathon (SIH) and secured
          a Top 10 position in the Hack Tech Hackathon. I am also an active
          Student Member of the Computer Society of India (CSI), where I
          continuously embrace new learning opportunities and innovative
          problem-solving approaches.
          </div>
          
          <div className="para3 my-4">
          Driven by the passion to transform ideas into reality, my goal is to
          create impactful solutions and contribute meaningfully through
          technology.
          </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default About;
