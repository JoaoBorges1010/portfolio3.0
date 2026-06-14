import { describe, expect, it } from "vitest";
import {
  getFeaturedProjectId,
  getProjectById,
  getSortedProjects,
} from "@/features/portfolio/utils";

describe("portfolio utils", () => {
  it("returns a project when id exists", () => {
    const project = getProjectById("project-5");
    expect(project?.title).toBe("Spotify Clone");
  });

  it("returns undefined when id does not exist", () => {
    expect(getProjectById("missing")).toBeUndefined();
  });

  it("returns featured project id", () => {
    expect(getFeaturedProjectId()).toBe("project-5");
  });

  it("sorts projects with featured sortOrder first", () => {
    const sorted = getSortedProjects();
    expect(sorted[0]?.id).toBe("project-5");
  });
});
