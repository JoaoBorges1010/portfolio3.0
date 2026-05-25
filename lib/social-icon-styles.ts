export function getSocialIconColor(
  bgColor: string,
  currentMode: string,
  isHovered: boolean
): string {
  const isTransparent = bgColor === "transparent";
  const isLight = currentMode === "Light";

  if (isTransparent) {
    if (isLight) {
      return isHovered ? "var(--accent-color)" : "#383838";
    }
    return isHovered ? "var(--accent-color)" : "#fffffc";
  }

  return isLight
    ? isHovered
      ? "#fffffc"
      : "#383838"
    : "#fffffc";
}

export function getSocialIconBackground(
  bgColor: string,
  currentMode: string,
  isHovered: boolean
): string {
  if (bgColor === "transparent") {
    return "transparent";
  }

  if (isHovered) {
    return "var(--accent-color)";
  }

  if (currentMode === "Light") {
    return "#f7f7f7";
  }

  return bgColor;
}
