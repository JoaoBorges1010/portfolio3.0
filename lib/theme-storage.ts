import {
  DEFAULT_COLOR,
  DEFAULT_MODE,
  DEFAULT_THEME_PREFERENCE,
  type ResolvedThemeMode,
  type ThemePreference,
} from "@/constants/site";

export const THEME_STORAGE_KEY = "themeMode";
export const COLOR_STORAGE_KEY = "colorMode";

const THEME_PREFERENCES: ThemePreference[] = ["Light", "Dark", "System"];

export function getSystemTheme(): ResolvedThemeMode {
  if (typeof window === "undefined") {
    return DEFAULT_MODE;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "Dark"
    : "Light";
}

export function resolveThemeMode(preference: ThemePreference): ResolvedThemeMode {
  if (preference === "System") {
    return getSystemTheme();
  }
  return preference;
}

export function readStoredThemePreference(): ThemePreference {
  if (typeof window === "undefined") {
    return DEFAULT_THEME_PREFERENCE;
  }
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored && THEME_PREFERENCES.includes(stored as ThemePreference)) {
    return stored as ThemePreference;
  }
  if (stored === "Light" || stored === "Dark") {
    return stored;
  }
  return DEFAULT_THEME_PREFERENCE;
}

/** Resolved light/dark mode applied to the document */
export function readStoredTheme(): ResolvedThemeMode {
  return resolveThemeMode(readStoredThemePreference());
}

export function readStoredColor(): string {
  if (typeof window === "undefined") {
    return DEFAULT_COLOR;
  }
  return localStorage.getItem(COLOR_STORAGE_KEY) || DEFAULT_COLOR;
}

export function persistThemePreference(preference: ThemePreference) {
  localStorage.setItem(THEME_STORAGE_KEY, preference);
}

export function persistTheme(preference: ThemePreference) {
  persistThemePreference(preference);
}

export function persistColor(color: string) {
  localStorage.setItem(COLOR_STORAGE_KEY, color);
}

export function applyThemeToDocument(
  mode: ResolvedThemeMode,
  color: string
) {
  if (typeof document === "undefined") {
    return;
  }
  document.documentElement.classList.toggle("dark", mode === "Dark");
  document.documentElement.style.setProperty("--accent-color", color);
}
