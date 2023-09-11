"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface StateContextProps {
  currentColor: string;
  currentMode: string;
  themeSettings: boolean;
  activeMenu: boolean;
  setCurrentColor: (value: string) => void;
  setCurrentMode: (value: string) => void;
  setThemeSettings: (value: boolean) => void;
  setActiveMenu: (value: boolean) => void;
  setMode: (value: string) => void;
  setColor: (value: string) => void;
}

// @ts-ignore
const StateContext = createContext<StateContextProps>();

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentColor, setCurrentColor] = useState("#ff5722");
  const [currentMode, setCurrentMode] = useState("Dark");
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);

  const setMode = (e: any) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
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
        setCurrentColor,
        setCurrentMode,
        setThemeSettings,
        setMode,
        setColor,
        activeMenu,
        setActiveMenu,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
