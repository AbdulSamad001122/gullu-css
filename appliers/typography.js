import { textSizing, textColor, typographyMisc } from "../values.js";

export function applyTypography(el, cls) {
  // 1. Arbitrary values: text-[35px]
  if (cls.startsWith("text-[") && cls.endsWith("]")) {
    const value = cls.slice(6, -1).trim();
    if (/^\d+(px|rem|em|vh|vw|%)$/.test(value)) {
      el.style.fontSize = value;
      return true;
    }
  }

  // 2. Font Sizing & Typography Misc
  if (textSizing[cls]) {
    el.style.fontSize = textSizing[cls];
    return true;
  } 
  
  if (typographyMisc[cls]) {
    if (cls.includes("text-")) el.style.textAlign = typographyMisc[cls];
    else if (cls.includes("font-")) el.style.fontWeight = typographyMisc[cls];
    return true;
  }

  // 3. Text Color
  if (textColor[cls]) {
    el.style.color = textColor[cls];
    return true;
  } 
  
  if (cls.startsWith("text-")) {
    const key = cls.replace("text-", "");
    if (textSizing[key]) { 
      el.style.fontSize = textSizing[key]; 
      return true; 
    }
    if (textColor[key]) { 
      el.style.color = textColor[key]; 
      return true; 
    }
  }

  return false;
}
