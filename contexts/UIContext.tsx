"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface UIContextValue {
  activeMenu: boolean;
  themeSettings: boolean;
  setActiveMenu: (value: boolean) => void;
  setThemeSettings: (value: boolean) => void;
}

const UIContext = createContext<UIContextValue | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
  const [activeMenu, setActiveMenuState] = useState(false);
  const [themeSettings, setThemeSettingsState] = useState(false);

  const setActiveMenu = useCallback((value: boolean) => {
    setActiveMenuState(value);
  }, []);

  const setThemeSettings = useCallback((value: boolean) => {
    setThemeSettingsState(value);
  }, []);

  const value = useMemo(
    () => ({
      activeMenu,
      themeSettings,
      setActiveMenu,
      setThemeSettings,
    }),
    [activeMenu, themeSettings, setActiveMenu, setThemeSettings]
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUI must be used within UIProvider");
  }
  return context;
}
