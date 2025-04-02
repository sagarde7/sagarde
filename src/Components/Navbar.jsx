import React, { useState } from 'react';
import { useEffect } from 'react';

function Navbar() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="navbar z-1 text-xl flex justify-center bg-gray-900 text-white sticky top-0">
        <div className="logo mr-40 mt-2.5 text-2xl">
          Sagar De
        </div>
        <div className='flex gap-15 mt-2.5 list-none'>
          <li 
            className={`hover:cursor-pointer ${active === "home" ? "text-blue-500" : ""}`}
            onClick={() => setActive("home")}
          >
            <a href="#home">Home</a>
          </li>
          <li 
            className={`hover:cursor-pointer ${active === "about" ? "text-blue-500" : ""}`}
            onClick={() => setActive("about")}
          >
            <a href="#about">About</a>
          </li>
          <li 
            className={`hover:cursor-pointer ${active === "skills" ? "text-blue-500" : ""}`}
            onClick={() => setActive("skills")}
          >
            <a href="#skills">Skills</a>
          </li>
          <li 
            className={`hover:cursor-pointer ${active === "projects" ? "text-blue-500" : ""}`}
            onClick={() => setActive("projects")}
          >
            <a href="#projects">Projects</a>
          </li>
          <li 
            className={`hover:cursor-pointer ${active === "contact" ? "text-blue-500" : ""}`}
            onClick={() => setActive("contact")}
          >
            <a href="#contact">Contact Me</a>
          </li>
        </div>
      </div>
    </>
  );
}

export default Navbar;
