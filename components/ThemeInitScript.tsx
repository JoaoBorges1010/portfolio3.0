import { DEFAULT_COLOR } from "@/constants/site";
import { COLOR_STORAGE_KEY, THEME_STORAGE_KEY } from "@/lib/theme-storage";

const themeInitScript = `
(function() {
  try {
    var theme = localStorage.getItem("${THEME_STORAGE_KEY}");
    var color = localStorage.getItem("${COLOR_STORAGE_KEY}");
    var root = document.documentElement;
    if (theme === "Light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
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
