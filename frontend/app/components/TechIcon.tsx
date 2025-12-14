"use client";

import { JSX } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiDotnet,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className }) => {
  const size = 16;

  const icons: Record<string, JSX.Element> = {
    "Next.js": <SiNextdotjs size={size} />,
    React: <SiReact size={size} />,
    TypeScript: <SiTypescript size={size} />,
    Tailwind: <SiTailwindcss size={size} />,
    ".NET": <SiDotnet size={size} />,
    PostgreSQL: <SiPostgresql size={size} />,
    HTML: <SiHtml5 size={size} />,
    CSS: <SiCss3 size={size} />,
    JavaScript: <SiJavascript size={size} />,
    "Node.js": <FaNodeJs size={size} />
  };

  return (
    <span className={`inline-flex items-center justify-center ${className}`}>
      {icons[name] ?? null}
    </span>
  );
};