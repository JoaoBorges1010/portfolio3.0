"use client";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import ThemeSettings from "@/components/ThemeSettings";

export default function ThemeSettingsSafe() {
  return (
    <ErrorBoundary fallback={null}>
      <ThemeSettings />
    </ErrorBoundary>
  );
}
