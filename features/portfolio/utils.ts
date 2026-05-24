import { projectsData, type Project } from "@/data/projects";

export function getProjectById(id: string): Project | undefined {
  return projectsData.find((project) => project.id === id);
}
