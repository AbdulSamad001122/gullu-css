import { bgColors } from "../values.js";

export function applyBackground(el, cls) {
  // Arbitrary background color
  if (cls.startsWith("bg-[") && cls.endsWith("]")) {
    const value = cls.slice(4, -1).trim();
    if (!value.startsWith("url(") && !value.match(/gradient\(/)) {
      el.style.backgroundColor = value;
      return true;
    }
  }

  // CSS Variables
  if (cls.startsWith("bg-(") && cls.endsWith(")")) {
    const varName = cls.slice(4, -1).trim();
    el.style.backgroundColor = `var(${varName})`;
    return true;
  }

  // Standard colors
  if (bgColors[cls]) {
    el.style.backgroundColor = bgColors[cls];
    return true;
  }

  return false;
}
