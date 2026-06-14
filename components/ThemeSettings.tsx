"use client";

import { useCallback, useEffect, useRef } from "react";
import { FiSettings } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";

import { useTheme, useUI } from "@/contexts/ContextProvider";
import { themeColors } from "@/constants";
import ColorLogo from "@/components/ColorLogo";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { ThemePreference } from "@/constants/site";

const THEME_OPTIONS: { value: ThemePreference; label: string }[] = [
  { value: "Light", label: "Light" },
  { value: "Dark", label: "Dark" },
  { value: "System", label: "System" },
];

function ThemePreview({
  accentColor,
  resolvedMode,
}: {
  accentColor: string;
  resolvedMode: string;
}) {
  const isDark = resolvedMode === "Dark";

  return (
    <div
      className={cn(
        "rounded-md border p-3 space-y-2",
        isDark ? "bg-dark border-light-gray/30" : "bg-lighter-gray border-light-gray/40"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between rounded px-2 py-1 text-xs",
          isDark ? "bg-light-gray/20 text-basic-white" : "bg-basic-white text-dark"
        )}
      >
        <span>nav</span>
        <span
          className="rounded px-2 py-0.5 text-[10px] font-semibold text-basic-white"
          style={{ backgroundColor: accentColor }}
        >
          accent
        </span>
      </div>
      <div
        className={cn(
          "h-2 rounded-full w-3/4",
          isDark ? "bg-light-gray/30" : "bg-light-gray/50"
        )}
      />
      <div
        className="h-6 w-20 rounded text-[10px] font-semibold text-basic-white flex items-center justify-center"
        style={{ backgroundColor: accentColor }}
      >
        button
      </div>
    </div>
  );
}

const ThemeSettings = () => {
  const {
    currentMode,
    themePreference,
    currentColor,
    setColor,
    setThemePreference,
  } = useTheme();
  const { themeSettings, setThemeSettings } = useUI();
  const prefersReducedMotion = usePrefersReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const closePanel = useCallback(() => {
    setThemeSettings(false);
    triggerRef.current?.focus();
  }, [setThemeSettings]);

  useEffect(() => {
    if (!themeSettings) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePanel();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [themeSettings, closePanel]);

  useEffect(() => {
    if (!themeSettings || !panelRef.current) {
      return;
    }

    const panel = panelRef.current;
    const focusable = panel.querySelectorAll<HTMLElement>(
      "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || focusable.length === 0) {
        return;
      }
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    panel.addEventListener("keydown", onKeyDown);
    return () => panel.removeEventListener("keydown", onKeyDown);
  }, [themeSettings]);

  const panelMotion = prefersReducedMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { y: 24, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: 16, opacity: 0 },
      };

  return (
    <div className="fixed right-6 bottom-[10%] z-40">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setThemeSettings(!themeSettings)}
        aria-expanded={themeSettings}
        aria-haspopup="dialog"
        aria-label="Appearance settings"
        className="text-2xl text-basic-white p-3 rounded-full shadow-custom transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 accent-outline"
        style={{ backgroundColor: currentColor }}
      >
        <FiSettings />
      </button>

      <AnimatePresence>
        {themeSettings && (
          <>
            <motion.button
              type="button"
              aria-label="Close appearance settings"
              className="fixed inset-0 z-40 bg-half-transparent cursor-default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePanel}
            />
            <motion.div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label="Appearance settings"
              className={cn(
                "fixed z-50 w-[min(100vw-2rem,20rem)] rounded-lg shadow-custom border accent-border",
                "dark:bg-basic-white bg-light-gray",
                "right-6 bottom-[calc(10%+4.5rem)] md:right-6 md:bottom-[calc(10%+4.5rem)]",
                "max-md:left-4 max-md:right-4 max-md:bottom-4 max-md:w-auto"
              )}
              {...panelMotion}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between p-4 border-b border-light-gray/30">
                <h2 className="font-header text-lg dark:text-light-gray text-basic-white">
                  Appearance
                </h2>
                <button
                  type="button"
                  onClick={closePanel}
                  aria-label="Close"
                  className="p-2 rounded-full text-light-gray hover:bg-light-gray/20 transition-colors"
                >
                  <MdOutlineClose size={22} />
                </button>
              </div>

              <div className="p-4 space-y-5">
                <ThemePreview
                  accentColor={currentColor}
                  resolvedMode={currentMode}
                />

                <div>
                  <p className="font-semibold text-sm dark:text-light-gray text-basic-white mb-3">
                    Theme
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {THEME_OPTIONS.map(({ value, label }) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setThemePreference(value)}
                        className={cn(
                          "px-3 py-1.5 rounded-full text-sm border-2 transition-colors",
                          themePreference === value
                            ? "text-basic-white accent-bg accent-border"
                            : "dark:text-light-gray text-basic-white border-light-gray/40 hover:border-current"
                        )}
                        aria-pressed={themePreference === value}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-sm dark:text-light-gray text-basic-white mb-3">
                    Accent color
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    {themeColors.map(({ color, name }) => (
                      <button
                        key={name}
                        type="button"
                        aria-label={`Accent color ${name}`}
                        aria-pressed={currentColor === color}
                        onClick={() => setColor(color)}
                        className={cn(
                          "h-10 w-10 rounded-full flex justify-center items-center border-2 transition-all",
                          currentColor === color
                            ? "scale-110 accent-border"
                            : "border-transparent hover:scale-105"
                        )}
                      >
                        <ColorLogo
                          fill={currentColor === color ? color : "transparent"}
                          stroke={currentColor === color ? "black" : color}
                          width={currentColor === color ? 32 : 24}
                          height={currentColor === color ? 32 : 24}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSettings;
