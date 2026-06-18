"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type ReactNode,
} from "react";

import {
  DEFAULT_COLOR,
  type ResolvedThemeMode,
  type ThemePreference,
} from "@/constants/site";
import {
  applyThemeToDocument,
  getSystemTheme,
  persistColor,
  persistThemePreference,
  readStoredColor,
  readStoredThemePreference,
  resolveThemeMode,
} from "@/lib/theme-storage";

interface ThemeContextValue {
  currentColor: string;
  /** Resolved light/dark applied to the document */
  currentMode: ResolvedThemeMode;
  themePreference: ThemePreference;
  isHydrated: boolean;
  setColor: (color: string) => void;
  setMode: (e: ChangeEvent<HTMLInputElement>) => void;
  setModeValue: (preference: ThemePreference) => void;
  setThemePreference: (preference: ThemePreference) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themePreference, setThemePreferenceState] =
    useState<ThemePreference>("System");
  const [currentMode, setCurrentMode] = useState<ResolvedThemeMode>("Dark");
  const [currentColor, setCurrentColor] = useState(DEFAULT_COLOR);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const preference = readStoredThemePreference();
    const color = readStoredColor();
    setThemePreferenceState(preference);
    setCurrentMode(resolveThemeMode(preference));
    setCurrentColor(color);
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }
    applyThemeToDocument(currentMode, currentColor);
  }, [currentMode, currentColor, isHydrated]);

  useEffect(() => {
    if (!isHydrated || themePreference !== "System") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      setCurrentMode(getSystemTheme());
    };

    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, [isHydrated, themePreference]);

  const setThemePreference = useCallback((preference: ThemePreference) => {
    setThemePreferenceState(preference);
    setCurrentMode(resolveThemeMode(preference));
    persistThemePreference(preference);
  }, []);

  const setModeValue = useCallback(
    (preference: ThemePreference) => {
      setThemePreference(preference);
    },
    [setThemePreference]
  );

  const setMode = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setModeValue(e.target.value as ThemePreference);
    },
    [setModeValue]
  );

  const setColor = useCallback((color: string) => {
    setCurrentColor(color);
    persistColor(color);
  }, []);

  const value = useMemo(
    () => ({
      currentColor,
      currentMode,
      themePreference,
      isHydrated,
      setColor,
      setMode,
      setModeValue,
      setThemePreference,
    }),
    [
      currentColor,
      currentMode,
      themePreference,
      isHydrated,
      setColor,
      setMode,
      setModeValue,
      setThemePreference,
    ]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
