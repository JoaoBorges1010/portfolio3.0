export function getProjectViewTransitionName(projectId: string): string {
  return `project-${projectId}`;
}

export function supportsViewTransitions(): boolean {
  if (typeof document === "undefined") {
    return false;
  }
  return "startViewTransition" in document;
}

export function shouldUseViewTransitions(
  prefersReducedMotion: boolean
): boolean {
  return supportsViewTransitions() && !prefersReducedMotion;
}
