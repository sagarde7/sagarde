import React from "react";
import { motion } from "framer-motion";

function Projects() {
  return (
    <>
      <motion.div className="projects h-[85vh] z-0 ">
        <div className="title mt-[15vh] text-4xl text-center underline
         font-bold mb-10">My Projects</div>
        <div className="container flex justify-around mt-5">
          <motion.div className="project" whileHover={{ scale: 1.05 }}>
            <div className="box h-[27rem] w-[30rem] border-2 rounded-2xl overflow-hidden relative">
              <img src="https://res.cloudinary.com/dnjkwg0lj/image/upload/v1743256280/dafsqjm5rqnbwx5nsz8n.png" alt="" className="rounded-2xl w-full h-full object-cover" />
              <motion.div 
                initial={{ opacity: 0 }} 
                whileHover={{ opacity: 1 }} 
                transition={{ duration: 0.3 }} 
                className="absolute z-0 inset-0 bg-gray-900 bg-opacity-80 flex flex-col justify-center items-center text-white p-5">
                <div className="sub2 text-center text-xl font-bold">LivelySync - A real time documentation webapp</div>
                <div className="sub3 m-3 text-center">It is a real time documentation webapp which is integrated with AI feature which helps in making notes as well doing anything related to documentations.</div>
                <div className="sub4 text-center">
                  <button className="border bg-blue-600 rounded-2xl p-3"><a href="https://livelysync.vercel.app/" target="_blank">Visit Website</a></button>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div className="project" whileHover={{ scale: 1.05 }}>
            <div className="box h-[27rem] w-[30rem] border-2 rounded-2xl overflow-hidden relative">
              <img src="https://res.cloudinary.com/dnjkwg0lj/image/upload/v1743258331/gfoguvclazb279bo7sjx.png" alt="" className="rounded-2xl w-full h-full object-cover" />
              <motion.div 
                initial={{ opacity: 0 }} 
                whileHover={{ opacity: 1 }} 
                transition={{ duration: 0.3 }} 
                className="absolute inset-0 bg-gray-900 bg-opacity-80 flex flex-col justify-center items-center text-white p-5">
                <div className="sub2 text-center text-xl font-bold">NewsUS</div>
                <div className="sub3 m-3 text-center">It is a real time News Webapp made using API fetch. It provides users with the latest news. Users can filter news by categories and stay informed about events.</div>
                <div className="sub4 text-center">
                  <button className="border bg-blue-600 rounded-2xl p-3">
                  <a href="https://newswebtail.vercel.app/" target="_blank">Visit Website</a>
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div className="project" whileHover={{ scale: 1.05 }}>
            <div className="box h-[27rem] w-[30rem] border-2 rounded-2xl overflow-hidden relative">
              <img src="https://res.cloudinary.com/dnjkwg0lj/image/upload/v1743259219/cz5zq0c8k3bnqtobf1sf.png" alt="" className="rounded-2xl w-full h-full object-cover" />
              <motion.div 
                initial={{ opacity: 0 }} 
                whileHover={{ opacity: 1 }} 
                transition={{ duration: 0.3 }} 
                className="absolute inset-0 bg-gray-900 bg-opacity-80 flex flex-col justify-center items-center text-white p-5">
                <div className="sub2 text-center text-xl font-bold">TrendyMusic - Music that's on Trends</div>
                <div className="sub3 m-3 text-center">TrendyMusic is a web application that allows users to explore and listen to the latest trending music. The app is designed with download and playback speed feature.</div>
                <div className="sub4 text-center">
                  <button className="border bg-blue-600 rounded-2xl p-3">
                    <a href="https://sagarde7.github.io/trendymusic/" target="_blank">Visit Website</a>
                    </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default Projects;