import { projectsData, type Project } from "@/data/projects";

export function getProjectById(id: string): Project | undefined {
  return projectsData.find((project) => project.id === id);
}

export function getSortedProjects(): Project[] {
  return [...projectsData].sort((a, b) => {
    const orderA = a.sortOrder ?? 0;
    const orderB = b.sortOrder ?? 0;
    if (orderA !== orderB) {
      return orderB - orderA;
    }
    return a.title.localeCompare(b.title);
  });
}

export function getFeaturedProjectId(): string {
  const featured = projectsData.find((project) => project.featured);
  return featured?.id ?? projectsData[projectsData.length - 1]?.id ?? "";
}
