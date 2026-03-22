import { boxSizing, spacing, sizing, borderRadius, borderWidth, borderColor } from "../values.js";

export function applyBoxModel(el, cls) {
  // 1. Box Sizing
  if (boxSizing[cls]) { el.style.boxSizing = boxSizing[cls]; return true; }

  // 2. Spacing
  const pmMap = { p: "padding", m: "margin" };
  const sideMap = { t: "Top", b: "Bottom", l: "Left", r: "Right" };

  for (const [pre, prop] of Object.entries(pmMap)) {
      if (cls.startsWith(`${pre}-`)) {
          const key = cls.split("-").pop();
          if (spacing[key]) { el.style[prop] = spacing[key]; return true; }
          else if (!isNaN(key)) { el.style[prop] = key + "px"; return true; }
      }
      for (const [s, side] of Object.entries(sideMap)) {
          if (cls.startsWith(`${pre}${s}-`)) {
              const key = cls.split("-").pop();
              if (spacing[key]) { el.style[`${prop}${side}`] = spacing[key]; return true; }
              else if (!isNaN(key)) { el.style[`${prop}${side}`] = key + "px"; return true; }
          }
      }
  }

  // 3. Width and Height
  if (sizing[cls]) {
      if (cls.startsWith("w-")) el.style.width = sizing[cls];
      if (cls.startsWith("h-")) el.style.height = sizing[cls];
      if (cls.startsWith("max-w-")) el.style.maxWidth = sizing[cls];
      return true;
  }
  if (cls.startsWith("w-")) {
      const val = cls.split("-").pop();
      el.style.width = isNaN(val) ? val : val + "px";
      return true;
  }
  if (cls.startsWith("h-")) {
      const val = cls.split("-").pop();
      el.style.height = isNaN(val) ? val : val + "px";
      return true;
  }

  // 4. Borders & Radius
  if (borderRadius[cls]) { el.style.borderRadius = borderRadius[cls]; return true; }
  if (borderWidth[cls]) {
    el.style.borderWidth = borderWidth[cls];
    el.style.borderStyle = "solid";
    return true;
  }
  if (borderColor[cls]) {
    el.style.borderColor = borderColor[cls];
    if (!el.style.borderStyle) el.style.borderStyle = "solid";
    return true;
  }

  return false;
}
