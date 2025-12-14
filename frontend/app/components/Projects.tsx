import { ProjectCard } from "./ProjectCard";
import { Project, getProjects } from "../lib/api";

export const Projects = async () => {
  const projects: Project[] = await getProjects();

  return (
    <section
      id="projects"
      className="py-28 bg-[rgb(var(--background))] transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-heading text-4xl font-bold text-center mb-16">
          Projects
        </h2>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              repoUrl={project.repoUrl}
              liveUrl={project.liveUrl}
              techStack={project.techStack}
            />
          ))}
        </div>
      </div>
    </section>
  );
};