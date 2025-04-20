import React from "react";
import Cursor from "@/styles/cursor";
import Mountains from "./mountains";
import About from "./about";
import Projects from "./projects";
import Experiences from "./experiences";
import Footer from "./footer";

export default function EntirePage() {
  return (
    <main>
      <Cursor />
      <Mountains />
      <About />
      <Projects />
      <Experiences />
      <Footer />
    </main>
  );
}
