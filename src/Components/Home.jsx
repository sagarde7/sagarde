import React from "react";
import { motion } from "motion/react";
import Typewriter from "react-typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="home flex justify-between  mt-40 h-[65vh] w-full "
      >
        <div className="left ml-50 ">
          <div className="content1 text-2xl">Hello,</div>
          <div className="content2 text-4xl">My Name is</div>
          <div className="content3 text-6xl">Sagar De</div>
          <div className="text-4xl font-bold flex items-center">
            <span>I'm a &nbsp;</span>
            <Typewriter
              textStyle={{
                fontSize: "5rem",
                fontWeight: "bold"
              }}
              cursorColor="white"
              multiText={["Web Developer","", "& Problem Solver"]}
              typeSpeed={100}
              deleteSpeed={50}
              autoStart={true}
              multiTextLoop={true}
            />
          </div>
          <div className="desc text-xl my-4.5">Skilled Web Developer and AI Enthusiast.
           Transforming ideas into reality</div>
          <div className="icons text-2xl flex gap-[1.8rem] mt-5">
            <a
              href="https://www.linkedin.com/in/sagarde"
              target="_blank"
              className="icon1"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="p-2 border-2 rounded-[50%] hover:bg-blue-700 hover:cursor-pointer"
              />
            </a>
            <a href="https://github.com/sagarde7" className="icon2">
              <FontAwesomeIcon
                icon={faGithub}
                className="p-2 border-2 rounded-[50%] hover:bg-blue-700 hover:cursor-pointer"
              />
            </a>
            <a href="mailto:sagarde103@gmail.com" className="icon3">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="p-2 border-2 rounded-[50%] hover:bg-blue-700 hover:cursor-pointer"
              />
            </a>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border mt-7 hover:cursor-pointer bg-blue-600 rounded-2xl p-3"
          >
            Download Resume
            <FontAwesomeIcon
              icon={faDownload}
              className="ml-2"
            ></FontAwesomeIcon>
          </motion.button>
        </div>

        <div className="right mr-[10rem]">
          <img
            src="https://res.cloudinary.com/dnjkwg0lj/image/upload/v1743583212/Profile_picture_1_bjkg7a.png"
            alt=""
            className="h-[20rem] w-[20rem] rounded-[50%]"
          />
        </div>
      </motion.div>
    </>
  );
}

export default Home;
