import { describe, expect, it } from "vitest";
import { getProjectById } from "@/features/portfolio/utils";

describe("getProjectById", () => {
  it("returns a project when id exists", () => {
    const project = getProjectById("project-5");
    expect(project?.title).toBe("Spotify Clone");
  });

  it("returns undefined when id does not exist", () => {
    expect(getProjectById("missing")).toBeUndefined();
  });
});
