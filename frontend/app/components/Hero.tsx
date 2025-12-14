"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const phrases = [
  "Full-Stack Developer",
  "Tech Innovator",
  "Problem Solver",
  "Next.js & .NET Expert",
];

export const Hero = () => {
  const [text, setText] = useState(phrases[0]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % phrases.length;
      setText(phrases[i]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/*Floating Shapes */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <h1 className="font-heading text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
        Hi, I'm Ana Zderic
      </h1>
      <p className="text-xl md:text-2xl opacity-80 mb-8 h-10">{text}</p>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <Button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
          See My Work
        </Button>
        <Button variant="outline" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
          Contact Me
        </Button>
      </div>

      <div className="flex justify-center gap-6 text-2xl opacity-80">
        <a href="https://github.com/AnaZderic" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/ana-%C5%BEderi%C4%87-434a3926a/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};