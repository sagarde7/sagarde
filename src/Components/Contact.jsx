import React from "react";
import { motion } from "motion/react"

function Contact() {
  return (
    <>
      <div className="contact h-[90vh]">
        <div className="titles text-4xl mt-[3vh] text-center underline">
          Feel Free To Contact Me
        </div>
        <div className="form  text-center mt-[3vh] text-2xl">
          <form action="https://formspree.io/f/xanedbbz" method="POST">
            <div className="email">
              <label>
                Your email:
                <input
                  type="email"
                  name="email"
                  required
                  className="border-2 rounded-b-lg m-5"
                />
              </label>
            </div>
            <div className="name">
              <label>
                Your Name:
                <input
                  type="text"
                  name="name"
                  className="border-2 rounded-b-lg m-5"
                  required
                />
              </label>
            </div>
            <div className="msg">
              Your message:
              <div>
                <textarea
                  name="message"
                  className="border-2 rounded-b-lg m-5 h-[18rem] w-[28rem]"
                  required
                ></textarea>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="h-12 w-25 font-bold bg-white text-black border-2 rounded-lg hover:cursor-pointer"
            >
              Submit
            </motion.button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
