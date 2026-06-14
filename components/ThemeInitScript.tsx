import { DEFAULT_COLOR, DEFAULT_THEME_PREFERENCE } from "@/constants/site";
import { COLOR_STORAGE_KEY, THEME_STORAGE_KEY } from "@/lib/theme-storage";

const themeInitScript = `
(function() {
  try {
    var theme = localStorage.getItem("${THEME_STORAGE_KEY}");
    var color = localStorage.getItem("${COLOR_STORAGE_KEY}");
    var root = document.documentElement;
    var isDark = theme === "Dark" || (theme !== "Light" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (theme === "Light") {
      root.classList.remove("dark");
    } else if (theme === "Dark") {
      root.classList.add("dark");
    } else {
      if (isDark) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }
    root.style.setProperty("--accent-color", color || "${DEFAULT_COLOR}");
  } catch (e) {}
})();
`;

export default function ThemeInitScript() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: themeInitScript }}
    />
  );
}
