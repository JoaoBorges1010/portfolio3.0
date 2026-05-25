import { DEFAULT_COLOR, DEFAULT_MODE, type ThemeMode } from "@/constants/site";

export const THEME_STORAGE_KEY = "themeMode";
export const COLOR_STORAGE_KEY = "colorMode";

export function readStoredTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return DEFAULT_MODE;
  }
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  return stored === "Light" || stored === "Dark" ? stored : DEFAULT_MODE;
}

export function readStoredColor(): string {
  if (typeof window === "undefined") {
    return DEFAULT_COLOR;
  }
  return localStorage.getItem(COLOR_STORAGE_KEY) || DEFAULT_COLOR;
}

export function persistTheme(mode: ThemeMode) {
  localStorage.setItem(THEME_STORAGE_KEY, mode);
}

export function persistColor(color: string) {
  localStorage.setItem(COLOR_STORAGE_KEY, color);
}

export function applyThemeToDocument(mode: ThemeMode, color: string) {
  if (typeof document === "undefined") {
    return;
  }
  document.documentElement.classList.toggle("dark", mode === "Dark");
  document.documentElement.style.setProperty("--accent-color", color);
}
