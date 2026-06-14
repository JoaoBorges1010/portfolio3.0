import { describe, expect, it, beforeEach, vi } from "vitest";
import {
  COLOR_STORAGE_KEY,
  THEME_STORAGE_KEY,
  getSystemTheme,
  persistColor,
  persistThemePreference,
  readStoredColor,
  readStoredTheme,
  readStoredThemePreference,
  resolveThemeMode,
} from "@/lib/theme-storage";
import { DEFAULT_COLOR, DEFAULT_THEME_PREFERENCE } from "@/constants/site";

describe("theme-storage", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.spyOn(window, "matchMedia").mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
  });

  it("reads default theme when storage is empty", () => {
    expect(readStoredThemePreference()).toBe(DEFAULT_THEME_PREFERENCE);
    expect(readStoredTheme()).toBe("Light");
    expect(readStoredColor()).toBe(DEFAULT_COLOR);
  });

  it("persists and reads theme values", () => {
    persistThemePreference("Light");
    persistColor("#2196f3");

    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("Light");
    expect(localStorage.getItem(COLOR_STORAGE_KEY)).toBe("#2196f3");
    expect(readStoredThemePreference()).toBe("Light");
    expect(readStoredTheme()).toBe("Light");
    expect(readStoredColor()).toBe("#2196f3");
  });

  it("persists System preference and resolves from matchMedia", () => {
    vi.spyOn(window, "matchMedia").mockImplementation((query: string) => ({
      matches: query === "(prefers-color-scheme: dark)",
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    persistThemePreference("System");
    expect(readStoredThemePreference()).toBe("System");
    expect(readStoredTheme()).toBe("Dark");
    expect(getSystemTheme()).toBe("Dark");
    expect(resolveThemeMode("System")).toBe("Dark");
  });
});
