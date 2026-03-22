import { positions, spacing } from "../values.js";

export function applyPosition(el, cls) {
  if (positions[cls]) {
    el.style.position = positions[cls];
    return true;
  }
  
  const offsets = ["top", "right", "bottom", "left"];
  for (const side of offsets) {
    if (cls.startsWith(`${side}-`)) {
      const val = cls.split("-").pop();
      if (spacing[val]) { el.style[side] = spacing[val]; }
      else if (!isNaN(val)) { el.style[side] = val + "px"; }
      else { el.style[side] = val; }
      return true;
    }
  }
  return false;
}
