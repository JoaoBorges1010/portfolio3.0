"use client";

import type { ReactNode } from "react";
import * as React from "react";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { shouldUseViewTransitions } from "@/lib/view-transition";

type ViewTransitionComponent = React.ComponentType<{
  name: string;
  children: ReactNode;
}>;

const ViewTransition = (
  React as typeof React & { ViewTransition?: ViewTransitionComponent }
).ViewTransition;

interface ProjectTransitionSurfaceProps {
  name: string;
  children: ReactNode;
}

export function ProjectTransitionSurface({
  name,
  children,
}: ProjectTransitionSurfaceProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (
    !ViewTransition ||
    !shouldUseViewTransitions(prefersReducedMotion)
  ) {
    return <>{children}</>;
  }

  return <ViewTransition name={name}>{children}</ViewTransition>;
}
