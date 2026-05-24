"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ChangeEvent,
  type ReactNode,
} from "react";

interface StateContextValue {
  currentColor: string;
  currentMode: string;
  themeSettings: boolean;
  activeMenu: boolean;
  isHydrated: boolean;
  setCurrentColor: (value: string) => void;
  setCurrentMode: (value: string) => void;
  setThemeSettings: (value: boolean) => void;
  setActiveMenu: (value: boolean) => void;
  setMode: (e: ChangeEvent<HTMLInputElement>) => void;
  setColor: (color: string) => void;
}

const StateContext = createContext<StateContextValue | undefined>(undefined);

const DEFAULT_COLOR = "#ff5722";
const DEFAULT_MODE = "Dark";

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentColor, setCurrentColor] = useState(DEFAULT_COLOR);
  const [currentMode, setCurrentMode] = useState(DEFAULT_MODE);
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const storedColor = localStorage.getItem("colorMode");
    const storedTheme = localStorage.getItem("themeMode");

    if (storedColor) {
      setCurrentColor(storedColor);
    }
    if (storedTheme) {
      setCurrentMode(storedTheme);
    }
    setIsHydrated(true);
  }, []);

  const setMode = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCurrentMode(value);
    localStorage.setItem("themeMode", value);
  };

  const setColor = (color: string) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  return (
    <StateContext.Provider
      value={{
        currentColor,
        currentMode,
        themeSettings,
        activeMenu,
        isHydrated,
        setCurrentColor,
        setCurrentMode,
        setThemeSettings,
        setActiveMenu,
        setMode,
        setColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateContext must be used within ContextProvider");
  }
  return context;
};
