import { display, layoutDirection, flexWrap, alignment, spacing } from "../values.js";

export function applyLayout(el, cls) {
  if (display[cls]) {
    el.style.display = display[cls];
    return true;
  }
  if (layoutDirection[cls]) {
    el.style.flexDirection = layoutDirection[cls];
    return true;
  }
  if (flexWrap[cls]) {
    el.style.flexWrap = flexWrap[cls];
    return true;
  }
  if (alignment[cls]) {
    if (cls.includes("items-")) el.style.alignItems = alignment[cls];
    else if (cls.includes("justify-")) el.style.justifyContent = alignment[cls];
    return true;
  }
  if (cls.startsWith("gap-")) {
    const key = cls.split("-").pop();
    if (spacing[key]) { el.style.gap = spacing[key]; return true; }
    else if (!isNaN(key)) { el.style.gap = key + "px"; return true; }
  }
  return false;
}
