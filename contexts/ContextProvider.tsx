"use client";

import type { ReactNode } from "react";

import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import { UIProvider, useUI } from "@/contexts/UIContext";

export function ContextProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <UIProvider>{children}</UIProvider>
    </ThemeProvider>
  );
}

export { useTheme } from "@/contexts/ThemeContext";
export { useUI } from "@/contexts/UIContext";

/** @deprecated Prefer useTheme() or useUI() for selective subscriptions */
export function useStateContext() {
  return { ...useTheme(), ...useUI() };
}
