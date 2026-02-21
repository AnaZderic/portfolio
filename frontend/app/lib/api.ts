export interface Project {
  id: number;
  title: string;
  description: string;
  repoUrl: string;
  liveUrl?: string;
  techStack: string[];
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchProjects = async () => {
  const res = await fetch(`${API_URL}/api/projects`, {
    cache: "no-store" 
  });

  if (!res.ok) throw new Error("Failed to fetch projects ${res.statusText}");
  return res.json();
};