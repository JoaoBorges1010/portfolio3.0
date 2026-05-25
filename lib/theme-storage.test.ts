import { describe, expect, it, beforeEach, vi } from "vitest";
import {
  COLOR_STORAGE_KEY,
  THEME_STORAGE_KEY,
  persistColor,
  persistTheme,
  readStoredColor,
  readStoredTheme,
} from "@/lib/theme-storage";
import { DEFAULT_COLOR, DEFAULT_MODE } from "@/constants/site";

describe("theme-storage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("reads default theme when storage is empty", () => {
    expect(readStoredTheme()).toBe(DEFAULT_MODE);
    expect(readStoredColor()).toBe(DEFAULT_COLOR);
  });

  it("persists and reads theme values", () => {
    persistTheme("Light");
    persistColor("#2196f3");

    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("Light");
    expect(localStorage.getItem(COLOR_STORAGE_KEY)).toBe("#2196f3");
    expect(readStoredTheme()).toBe("Light");
    expect(readStoredColor()).toBe("#2196f3");
  });
});
