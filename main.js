import { applyTypography } from "./appliers/typography.js";
import { applyLayout } from "./appliers/layout.js";
import { applyPosition } from "./appliers/position.js";
import { applyBoxModel } from "./appliers/boxModel.js";
import { applyEffects } from "./appliers/effects.js";
import { applyBackground } from "./appliers/background.js";
import { applyImage } from "./appliers/image.js";

export function initEngine() {
  const elements = document.querySelectorAll("[class]");
  
  const modules = [
    applyTypography,
    applyLayout,
    applyPosition,
    applyBoxModel,
    applyBackground,
    applyEffects,
    applyImage
  ];

  elements.forEach((el) => {
    [...el.classList].forEach((cls) => {
      for (const applyFn of modules) {
        if (applyFn(el, cls)) break;
      }
    });
  });

  console.log("Gullu CSS Initialized");
}
