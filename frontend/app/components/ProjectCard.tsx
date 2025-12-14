"use client";

import Image from "next/image";
import { TechIcon } from "./TechIcon";

interface ProjectCardProps {
  title: string;
  description: string;
  repoUrl: string;
  liveUrl?: string;
  techStack: string[];
  imageUrl?: string; 
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  repoUrl,
  liveUrl,
  techStack,
  imageUrl,
}) => {
  return (
    <div className="group relative rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl duration-300">
      
      <div className="absolute -top-4 -left-4 w-20 h-20 bg-cyan-400/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>

      {imageUrl && (
        <div className="relative w-full h-40 mb-4 overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <h3 className="font-heading text-xl font-bold mb-3 transition-colors group-hover:text-[rgb(var(--primary))]">
        {title}
      </h3>

      <p className="text-sm text-[rgb(var(--foreground))]/80 mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-[rgb(var(--muted))] text-[rgb(var(--foreground))]/80 transition-colors group-hover:bg-[rgb(var(--primary))]/20"
          >
            <TechIcon name={tech} />
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-auto">
        <a
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-[rgb(var(--primary))] hover:underline transition-colors"
        >
          GitHub
        </a>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-[rgb(var(--primary))] hover:underline transition-colors"
          >
            Live Demo
          </a>
        )}
      </div>

      <div className="absolute inset-0 rounded-xl bg-linear-to-tr from-transparent to-[rgb(var(--primary))]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};