import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="bg-gray-900 text-white font-poppins">
      <Navbar />
      <section id="home" className="pt-1"><Home /></section>
      <section id="about" className="pt-5"><About /></section>
      <section id="skills" className="pt-5"><Skills /></section>
      <section id="projects" className="pt-5"><Projects /></section>
      <section id="contact" className="pt-5"><Contact /></section>
    </div>
  );
}

export default App;
