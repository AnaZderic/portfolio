export interface Project {
  id: number;
  title: string;
  description: string;
  repoUrl: string;
  liveUrl?: string;
  techStack: string[];
}

export async function getProjects(): Promise<Project[]> {
  const res = await fetch("http://localhost:5189/api/projects", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
}