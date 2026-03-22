import { shadows, miscEffects } from "../values.js";

export function applyEffects(el, cls) {
  if (shadows[cls]) {
    el.style.boxShadow = shadows[cls];
    return true;
  }

  if (miscEffects[cls]) {
    if (cls.includes("transition")) el.style.transition = miscEffects[cls];
    else if (cls.includes("cursor")) el.style.cursor = miscEffects[cls];
    else if (cls.includes("opacity")) el.style.opacity = miscEffects[cls];
    else if (cls.includes("overflow")) el.style.overflow = miscEffects[cls];
    return true;
  }

  return false;
}
