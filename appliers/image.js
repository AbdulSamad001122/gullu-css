import { objectFits, objectPositions, bgSizes, bgRepeats, bgPositions } from "../values.js";

export function applyImage(el, cls) {
  if (cls.startsWith("bg-[url(") && cls.endsWith(")]")) {
    const urlStr = cls.slice(4, -1).trim();
    el.style.backgroundImage = urlStr;
    return true;
  }
  if (objectFits[cls]) {
    el.style.objectFit = objectFits[cls];
    return true;
  }
  if (objectPositions[cls]) {
    el.style.objectPosition = objectPositions[cls];
    return true;
  }
  if (bgSizes[cls]) {
    el.style.backgroundSize = bgSizes[cls];
    return true;
  }
  if (bgRepeats[cls]) {
    el.style.backgroundRepeat = bgRepeats[cls];
    return true;
  }
  if (bgPositions[cls]) {
    el.style.backgroundPosition = bgPositions[cls];
    return true;
  }
  return false;
}
