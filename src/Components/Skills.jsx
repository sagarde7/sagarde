import React from "react";
import { motion } from "motion/react";

function Skills() {
  return (
    <>
      <div className="skills h-[95vh] overflow-x-hidden mb-[5vh] hover:cursor-pointer">
        <div className="title mt-[5vh] mb-5  text-center text-4xl underline ">
          Technical Skills
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, translateX: "100%" }}
            whileInView={{ opacity: 1, translateX: "0" }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="box flex justify-evenly align-middle "
          >
            <div className="skill">
              <div className="box border-2 p-2 rounded-2xl hover:scale-105">
                <img
                  className="h-[8rem] w-[10rem] "
                  src="https://res.cloudinary.com/dnjkwg0lj/image/upload/v1743252058/gepv2xpcyznqivpmzlr4.png"
                />
                <div className="text text-center text-xl mt-0.5">HTML</div>
              </div>
            </div>
            <div className="skill">
              <div className="box border-2 p-2 rounded-2xl hover:scale-105">
                <img
                  className="h-[8rem] w-[10rem] "
                  src="https://res.cloudinary.com/dnjkwg0lj/image/upload/v1743252058/atjeksyhyos7qomz8p8i.png"
                  alt=""
                  srcset=""
                />
                <div className="text text-center text-xl mt-0.5 hover:scale-105">CSS</div>
              </div>
            </div>
            <div className="skill">
              <div className="box border-2 p-2 rounded-2xl hover:scale-105">
                <img
                  className="h-[8rem] w-[10rem] "
                  src="https://res.cloudinary.com/dnjkwg0lj/image/upload/v1743252058/rejv51mk4jvgtiwd4ila.png"
                  alt=""
                  srcset=""
                />
                <div className="text text-center text-xl mt-0.5 ">
                  JavaScript
                </div>
              </div>
            </div>
            <div className="skill">
              <div className="box border-2 p-2 rounded-2xl hover:scale-105">
                <img
                  className="h-[8rem] w-[10rem] "
                  src="https://res.cloudinary.com/dnjkwg0lj/image/upload/v1743252059/fm9awe0l3rujdalwixrv.png"
                  alt=""
                  srcset=""
                />
                <div className="text text-center text-xl mt-0.5 hover:scale-105">Bootstrap</div>
              </div>
            </div>
            <div className="skill">
              <div className="box border-2 p-2 rounded-2xl hover:scale-105">
                <img
                  className="h-[8rem] w-[10rem] "
                  src="https://res.cloudinary.com/dnjkwg0lj/image/upload/v1743251769/xywzs3nmhvfvdkbdzwi6.png"
                  srcset=""
                />
                <div className="text text-center text-xl mt-0.5 ">
                  Tailwind CSS
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, translateX: "-100%" }}
          whileInView={{ opacity: 1, translateX: "0" }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="box flex justify-evenly  mt-5"
        >
          <div className="skill">
            <div className="box border-2 p-2 rounded-2xl hover:scale-105">
              <img
                className="h-[8rem] w-[10rem] "
                src="https://res.cloudinary.com/dnjkwg0lj/image/upload/v1743252522/zayyabalenh7r8zlbtcn.png"
                srcset=""
              />
              <div className="text text-center text-xl mt-0.5">React.js</div>
            </div>
          </div>

          <div className="skill">
            <div className="box border-2 p-2 rounded-2xl hover:scale-105">
              <img
                className="h-[8rem] w-[10rem] "
                src="https://res.cloudinary.com/dnjkwg0lj/image/upload/v1743252522/g9crfnghvmci72553pli.png"
                srcset=""
              />
              <div className="text text-center text-xl mt-0.5">Node.js</div>
            </div>
          </div>

          <div className="skill">
            <div className="box border-2 p-2 rounded-2xl hover:scale-105">
              <img
                className="h-[8rem] w-[10rem] "
                src="https://res.cloudinary.com/dnjkwg0lj/image/upload/v1743252843/xlrpgwceomyynqdjaagk.png"
                srcset=""
              />
              <div className="text text-center text-xl mt-0.5">Express.js</div>
            </div>
          </div>

          <div className="skill">
            <div className="box border-2 p-2 rounded-2xl hover:scale-105">
              <img
                className="h-[8rem] w-[10rem] "
                src="https://res.cloudinary.com/dnjkwg0lj/image/upload/v1743252522/daaeksbcmwnykddoyft3.png"
                srcset=""
              />
              <div className="text text-center text-xl mt-0.5">Mongo DB</div>
            </div>
          </div>
          <div className="skill">
            <div className="box border-2 p-2 rounded-2xl hover:scale-105">
              <img
                className="h-[8rem] w-[10rem] "
                src="https://res.cloudinary.com/dnjkwg0lj/image/upload/v1743252522/ihylyinhh3knoghzkpjo.png"
                srcset=""
              />
              <div className="text text-center text-xl mt-0.5">MySQL</div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2}}
          viewport={{ once: true }}
          className="box flex justify-evenly  mt-5"
        >
          <div className="skill">
            <div className="box border-2 p-2 rounded-2xl hover:scale-105">
              <img
                className="h-[8rem] w-[10rem] "
                src="https://res.cloudinary.com/dnjkwg0lj/image/upload/v1743252522/hr5gejh8h0fawivmgxpw.png"
                srcset=""
              />
              <div className="text text-center text-xl mt-0.5">C++</div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Skills;
