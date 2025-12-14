"use client";

import { FaCode, FaServer, FaPaintBrush } from "react-icons/fa";

export const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-[rgb(var(--card))] transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
       
        <div>
          <h2 className="font-heading text-4xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-lg leading-relaxed mb-6 text-[rgb(var(--foreground))]/80">
            I’m a full-stack developer specializing in building modern,
            scalable web applications using <strong>Next.js</strong> and{" "}
            <strong>.NET</strong>. I enjoy transforming complex problems
            into clean, intuitive solutions.
          </p>

          <p className="text-lg leading-relaxed text-[rgb(var(--foreground))]/80">
            My focus is on performance, maintainability, and elegant user
            experiences — from database design to polished UI.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <SkillCard
            icon={<FaCode />}
            title="Frontend"
            skills="Next.js, React, TypeScript, Tailwind CSS"
          />
          <SkillCard
            icon={<FaServer />}
            title="Backend"
            skills=".NET 8, Minimal APIs, EF Core, SQL"
          />
          <SkillCard
            icon={<FaPaintBrush />}
            title="UI & UX"
            skills="Responsive Design, Accessibility, Animations"
          />
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({
  icon,
  title,
  skills,
}: {
  icon: React.ReactNode;
  title: string;
  skills: string;
}) => (
  <div className="p-6 rounded-xl bg-[rgb(var(--background))] border border-[rgb(var(--border))] shadow-sm hover:shadow-md transition">
    <div className="text-2xl text-[rgb(var(--primary))] mb-4">
      {icon}
    </div>
    <h3 className="font-heading text-xl font-bold mb-2">
      {title}
    </h3>
    <p className="text-sm text-[rgb(var(--foreground))]/70">
      {skills}
    </p>
  </div>
);