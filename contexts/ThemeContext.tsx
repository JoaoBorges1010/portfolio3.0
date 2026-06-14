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

import { DEFAULT_COLOR, DEFAULT_MODE, type ThemeMode } from "@/constants/site";
import {
  applyThemeToDocument,
  persistColor,
  persistTheme,
  readStoredColor,
  readStoredTheme,
} from "@/lib/theme-storage";

interface ThemeContextValue {
  currentColor: string;
  currentMode: ThemeMode;
  isHydrated: boolean;
  setColor: (color: string) => void;
  setMode: (e: ChangeEvent<HTMLInputElement>) => void;
  setModeValue: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentColor, setCurrentColor] = useState(DEFAULT_COLOR);
  const [currentMode, setCurrentMode] = useState<ThemeMode>(DEFAULT_MODE);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const mode = readStoredTheme();
    const color = readStoredColor();
    setCurrentMode(mode);
    setCurrentColor(color);
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }
    applyThemeToDocument(currentMode, currentColor);
  }, [currentMode, currentColor, isHydrated]);

  const setModeValue = useCallback((mode: ThemeMode) => {
    setCurrentMode(mode);
    persistTheme(mode);
  }, []);

  const setMode = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setModeValue(e.target.value as ThemeMode);
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
      isHydrated,
      setColor,
      setMode,
      setModeValue,
    }),
    [currentColor, currentMode, isHydrated, setColor, setMode, setModeValue]
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
