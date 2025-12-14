"use client";

import { useEffect, useState } from "react";
import { fetchProjects, Project } from "../lib/api";
import { ProjectCard } from "./ProjectCard";

export const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects()
      .then((data) => setProjects(
        data.map((p: Project) => ({
          ...p,
          imageUrl: `/projects/${p.title.toLowerCase().replace(/\s/g, "-")}.png`
        }))
      ))
      .catch((err) => {
        console.error(err);
        setError("Failed to load projects. Make sure your backend is running.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return <p className="text-center py-20 text-gray-600 dark:text-gray-300">Loading projects...</p>;

  if (error)
    return <p className="text-center py-20 text-red-500">{error}</p>;

  return (
    <section id="projects" className="py-20 bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold font-heading text-center mb-12">Projects</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};