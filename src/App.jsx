import React from "react";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <ContactMe />
    </>
  )
}

export default App
