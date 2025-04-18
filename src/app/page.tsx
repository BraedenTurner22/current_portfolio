import React from "react";
import Mountains from "./mountains";
import About from "./about";
import Projects from "./projects";
import Cursor from "@/styles/cursor";

export default function EntirePage() {
  return (
    <main>
      <Cursor />
      <Mountains />
      <About />
      <Projects />
    </main>
  );
}
