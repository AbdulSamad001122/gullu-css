// values.js - Central Token Registry

// 1. Typography (Sizing, Alignment, Weight)
export const textSizing = {
  xs: "12px",
  sm: "12px",
  base: "16px",
  lg: "18px",
  xl: "20px",
  "2xl": "24px",
  "3xl": "30px",
  "4xl": "36px",
  "5xl": "48px",
  "6xl": "60px",
  "7xl": "72px",
  "8xl": "96px",
  "9xl": "128px",
};

export const textColor = {
  white: "#ffffff",
  black: "#000000",
  gray: "#6b7280",
  red: "oklch(63.7% 0.237 25.331)",
  blue: "oklch(62.3% 0.214 259.815)",
  green: "oklch(72.3% 0.219 149.579)",
  "red-500": "oklch(63.7% 0.237 25.331)",
  "blue-500": "oklch(62.3% 0.214 259.815)",
  "gray-500": "oklch(55.1% 0.027 264.364)",
};

export const typographyMisc = {
  "font-bold": "bold",
  "font-medium": "500",
  "text-center": "center",
  "text-left": "left",
  "text-right": "right",
};

// 2. Background Colors
export const bgColors = {
  "bg-inherit": "inherit",
  "bg-current": "currentColor",
  "bg-transparent": "transparent",
  "bg-black": "#000",
  "bg-white": "#fff",

  // Red
  "bg-red-50": "oklch(97.1% 0.013 17.38)",
  "bg-red-100": "oklch(93.6% 0.032 17.717)",
  "bg-red-200": "oklch(88.5% 0.062 18.334)",
  "bg-red-300": "oklch(80.8% 0.114 19.571)",
  "bg-red-400": "oklch(70.4% 0.191 22.216)",
  "bg-red-500": "oklch(63.7% 0.237 25.331)",
  "bg-red-600": "oklch(57.7% 0.245 27.325)",
  "bg-red-700": "oklch(50.5% 0.213 27.518)",
  "bg-red-800": "oklch(44.4% 0.177 26.899)",
  "bg-red-900": "oklch(39.6% 0.141 25.723)",
  "bg-red-950": "oklch(25.8% 0.092 26.042)",

  // Orange
  "bg-orange-50": "oklch(98% 0.016 73.684)",
  "bg-orange-100": "oklch(95.4% 0.038 75.164)",
  "bg-orange-200": "oklch(90.1% 0.076 70.697)",
  "bg-orange-300": "oklch(83.7% 0.128 66.29)",
  "bg-orange-400": "oklch(75% 0.183 55.934)",
  "bg-orange-500": "oklch(70.5% 0.213 47.604)",
  "bg-orange-600": "oklch(64.6% 0.222 41.116)",
  "bg-orange-700": "oklch(55.3% 0.195 38.402)",
  "bg-orange-800": "oklch(47% 0.157 37.304)",
  "bg-orange-900": "oklch(40.8% 0.123 38.172)",
  "bg-orange-950": "oklch(26.6% 0.079 36.259)",

  // Amber
  "bg-amber-50": "oklch(98.7% 0.022 95.277)",
  "bg-amber-100": "oklch(96.2% 0.059 95.617)",
  "bg-amber-200": "oklch(92.4% 0.12 95.746)",
  "bg-amber-300": "oklch(87.9% 0.169 91.605)",
  "bg-amber-400": "oklch(82.8% 0.189 84.429)",
  "bg-amber-500": "oklch(76.9% 0.188 70.08)",
  "bg-amber-600": "oklch(66.6% 0.179 58.318)",
  "bg-amber-700": "oklch(55.5% 0.163 48.998)",
  "bg-amber-800": "oklch(47.3% 0.137 46.201)",
  "bg-amber-900": "oklch(41.4% 0.112 45.904)",
  "bg-amber-950": "oklch(27.9% 0.077 45.635)",

  // Yellow
  "bg-yellow-50": "oklch(98.7% 0.026 102.212)",
  "bg-yellow-100": "oklch(97.3% 0.071 103.193)",
  "bg-yellow-200": "oklch(94.5% 0.129 101.54)",
  "bg-yellow-300": "oklch(90.5% 0.182 98.111)",
  "bg-yellow-400": "oklch(85.2% 0.199 91.936)",
  "bg-yellow-500": "oklch(79.5% 0.184 86.047)",
  "bg-yellow-600": "oklch(68.1% 0.162 75.834)",
  "bg-yellow-700": "oklch(55.4% 0.135 66.442)",
  "bg-yellow-800": "oklch(47.6% 0.114 61.907)",
  "bg-yellow-900": "oklch(42.1% 0.095 57.708)",
  "bg-yellow-950": "oklch(28.6% 0.066 53.813)",

  // Lime
  "bg-lime-50": "oklch(98.6% 0.031 120.757)",
  "bg-lime-100": "oklch(96.7% 0.067 122.328)",
  "bg-lime-200": "oklch(93.8% 0.127 124.321)",
  "bg-lime-300": "oklch(89.7% 0.196 126.665)",
  "bg-lime-400": "oklch(84.1% 0.238 128.85)",
  "bg-lime-500": "oklch(76.8% 0.233 130.85)",
  "bg-lime-600": "oklch(64.8% 0.2 131.684)",
  "bg-lime-700": "oklch(53.2% 0.157 131.589)",
  "bg-lime-800": "oklch(45.3% 0.124 130.933)",
  "bg-lime-900": "oklch(40.5% 0.101 131.063)",
  "bg-lime-950": "oklch(27.4% 0.072 132.109)",

  // Green
  "bg-green-50": "oklch(98.2% 0.018 155.826)",
  "bg-green-100": "oklch(96.2% 0.044 156.743)",
  "bg-green-200": "oklch(92.5% 0.084 155.995)",
  "bg-green-300": "oklch(87.1% 0.15 154.449)",
  "bg-green-400": "oklch(79.2% 0.209 151.711)",
  "bg-green-500": "oklch(72.3% 0.219 149.579)",
  "bg-green-600": "oklch(62.7% 0.194 149.214)",
  "bg-green-700": "oklch(52.7% 0.154 150.069)",
  "bg-green-800": "oklch(44.8% 0.119 151.328)",
  "bg-green-900": "oklch(39.3% 0.095 152.535)",
  "bg-green-950": "oklch(26.6% 0.065 152.934)",

  // Emerald
  "bg-emerald-50": "oklch(97.9% 0.021 166.113)",
  "bg-emerald-100": "oklch(95% 0.052 163.051)",
  "bg-emerald-200": "oklch(90.5% 0.093 164.15)",
  "bg-emerald-300": "oklch(84.5% 0.143 164.978)",
  "bg-emerald-400": "oklch(76.5% 0.177 163.223)",
  "bg-emerald-500": "oklch(69.6% 0.17 162.48)",
  "bg-emerald-600": "oklch(59.6% 0.145 163.225)",
  "bg-emerald-700": "oklch(50.8% 0.118 165.612)",
  "bg-emerald-800": "oklch(43.2% 0.095 166.913)",
  "bg-emerald-900": "oklch(37.8% 0.077 168.94)",
  "bg-emerald-950": "oklch(26.2% 0.051 172.552)",

  // Teal
  "bg-teal-50": "oklch(98.4% 0.014 180.72)",
  "bg-teal-100": "oklch(95.3% 0.051 180.801)",
  "bg-teal-200": "oklch(91% 0.096 180.426)",
  "bg-teal-300": "oklch(85.5% 0.138 181.071)",
  "bg-teal-400": "oklch(77.7% 0.152 181.912)",
  "bg-teal-500": "oklch(70.4% 0.14 182.503)",
  "bg-teal-600": "oklch(60% 0.118 184.704)",
  "bg-teal-700": "oklch(51.1% 0.096 186.391)",
  "bg-teal-800": "oklch(43.7% 0.078 188.216)",
  "bg-teal-900": "oklch(38.6% 0.063 188.416)",
  "bg-teal-950": "oklch(27.7% 0.046 192.524)",

  // Cyan
  "bg-cyan-50": "oklch(98.4% 0.019 200.873)",
  "bg-cyan-100": "oklch(95.6% 0.045 203.388)",
  "bg-cyan-200": "oklch(91.7% 0.08 205.041)",
  "bg-cyan-300": "oklch(86.5% 0.127 207.078)",
  "bg-cyan-400": "oklch(78.9% 0.154 211.53)",
  "bg-cyan-500": "oklch(71.5% 0.143 215.221)",
  "bg-cyan-600": "oklch(60.9% 0.126 221.723)",
  "bg-cyan-700": "oklch(52% 0.105 223.128)",
  "bg-cyan-800": "oklch(45% 0.085 224.283)",
  "bg-cyan-900": "oklch(39.8% 0.07 227.392)",
  "bg-cyan-950": "oklch(30.2% 0.056 229.695)",

  // Sky
  "bg-sky-50": "oklch(97.7% 0.013 236.62)",
  "bg-sky-100": "oklch(95.1% 0.026 236.824)",
  "bg-sky-200": "oklch(90.1% 0.058 230.902)",
  "bg-sky-300": "oklch(82.8% 0.111 230.318)",
  "bg-sky-400": "oklch(74.6% 0.16 232.661)",
  "bg-sky-500": "oklch(68.5% 0.169 237.323)",
  "bg-sky-600": "oklch(58.8% 0.158 241.966)",
  "bg-sky-700": "oklch(50% 0.134 242.749)",
  "bg-sky-800": "oklch(44.3% 0.11 240.79)",
  "bg-sky-900": "oklch(39.1% 0.09 240.876)",
  "bg-sky-950": "oklch(29.3% 0.066 243.157)",

  // Blue
  "bg-blue-50": "oklch(97% 0.014 254.604)",
  "bg-blue-100": "oklch(93.2% 0.032 255.585)",
  "bg-blue-200": "oklch(88.2% 0.059 254.128)",
  "bg-blue-300": "oklch(80.9% 0.105 251.813)",
  "bg-blue-400": "oklch(70.7% 0.165 254.624)",
  "bg-blue-500": "oklch(62.3% 0.214 259.815)",
  "bg-blue-600": "oklch(54.6% 0.245 262.881)",
  "bg-blue-700": "oklch(48.8% 0.243 264.376)",
  "bg-blue-800": "oklch(42.4% 0.199 265.638)",
  "bg-blue-900": "oklch(37.9% 0.146 265.522)",
  "bg-blue-950": "oklch(28.2% 0.091 267.935)",

  // Slate
  "bg-slate-50": "oklch(98.4% 0.003 247.858)",
  "bg-slate-100": "oklch(96.8% 0.007 247.896)",
  "bg-slate-200": "oklch(92.9% 0.013 255.508)",
  "bg-slate-300": "oklch(86.9% 0.022 252.894)",
  "bg-slate-400": "oklch(70.4% 0.04 256.788)",
  "bg-slate-500": "oklch(55.4% 0.046 257.417)",
  "bg-slate-600": "oklch(44.6% 0.043 257.281)",
  "bg-slate-700": "oklch(37.2% 0.044 257.287)",
  "bg-slate-800": "oklch(27.9% 0.041 260.031)",
  "bg-slate-900": "oklch(20.8% 0.042 265.755)",
  "bg-slate-950": "oklch(12.9% 0.042 264.695)",

  // Gray
  "bg-gray-50": "oklch(98.5% 0.002 247.839)",
  "bg-gray-100": "oklch(96.7% 0.003 264.542)",
  "bg-gray-200": "oklch(92.8% 0.006 264.531)",
  "bg-gray-300": "oklch(87.2% 0.01 258.338)",
  "bg-gray-400": "oklch(70.7% 0.022 261.325)",
  "bg-gray-500": "oklch(55.1% 0.027 264.364)",
  "bg-gray-600": "oklch(44.6% 0.03 256.802)",
  "bg-gray-700": "oklch(37.3% 0.034 259.733)",
  "bg-gray-800": "oklch(27.8% 0.033 256.848)",
  "bg-gray-900": "oklch(21% 0.034 264.665)",
  "bg-gray-950": "oklch(13% 0.028 261.692)",

  // Zinc
  "bg-zinc-50": "oklch(98.5% 0 0)",
  "bg-zinc-100": "oklch(96.7% 0.001 286.375)",
  "bg-zinc-200": "oklch(92% 0.004 286.32)",
  "bg-zinc-300": "oklch(87.1% 0.006 286.286)",
  "bg-zinc-400": "oklch(70.5% 0.015 286.067)",
  "bg-zinc-500": "oklch(55.2% 0.016 285.938)",
  "bg-zinc-600": "oklch(44.2% 0.017 285.786)",
  "bg-zinc-700": "oklch(37% 0.013 285.805)",
  "bg-zinc-800": "oklch(27.4% 0.006 286.033)",
  "bg-zinc-900": "oklch(21% 0.006 285.885)",
  "bg-zinc-950": "oklch(14.1% 0.005 285.823)",
};

// 3. Layout (Display, Direction, Wrap)
export const display = {
  "d-block": "block",
  "d-inline": "inline",
  "d-inline-block": "inline-block",
  "d-flex": "flex",
  "d-inline-flex": "inline-flex",
  "d-grid": "grid",
  "d-inline-grid": "inline-grid",
  "d-hidden": "none",
  "d-contents": "contents",
  flex: "flex",
  "inline-flex": "inline-flex",
};

export const layoutDirection = {
  "flex-col": "column",
  "flex-row": "row",
  "d-flex-col": "column",
  "d-flex-row": "row",
  "d-flex-col-reverse": "column-reverse",
  "d-flex-row-reverse": "row-reverse",
};

export const flexWrap = {
  "flex-wrap": "wrap",
  "flex-nowrap": "nowrap",
  "flex-wrap-reverse": "wrap-reverse",
};

// 4. Alignment
export const alignment = {
  "items-center": "center",
  "items-start": "flex-start",
  "items-end": "flex-end",
  "justify-center": "center",
  "justify-between": "space-between",
  "justify-around": "space-around",
};

// 5. Positioning
export const positions = {
  relative: "relative",
  absolute: "absolute",
  fixed: "fixed",
  "pos-static": "static",
  "pos-fixed": "fixed",
  "pos-absolute": "absolute",
  "pos-relative": "relative",
  "pos-sticky": "sticky",
};

// 6. Box Model (Spacing, Sizing, Borders)
export const boxSizing = {
  "box-border": "border-box",
  "box-content": "content-box",
};

export const spacing = {
  "0": "0px",
  "1": "4px",
  "2": "8px",
  "3": "12px",
  "4": "16px",
  "6": "24px",
  "8": "32px",
  "12": "48px",
  "16": "64px",
  "20": "80px",
  "24": "96px",
  "full": "100%",
  "screen": "100vh",
  "fit": "fit-content",
  "auto": "auto",
};

export const sizing = {
  "w-full": "100%",
  "w-screen": "100vh",
  "w-fit": "fit-content",
  "h-full": "100%",
  "h-screen": "100vh",
  "max-w-sm": "640px",
  "max-w-md": "768px",
  "max-w-lg": "1024px",
};

export const borderRadius = {
  "rounded-sm": "4px",
  "rounded-md": "8px",
  "rounded-lg": "12px",
  "rounded-xl": "16px",
  "rounded-full": "9999px",
  "rounded-none": "0px",
  "rounded": "4px",
};

export const borderWidth = {
  border: "1px",
  "border-2": "2px",
  "border-4": "4px",
  "border-8": "8px",
  "border-0": "0px",
};

export const borderColor = {
  "border-black": "#000",
  "border-white": "#fff",
  "border-red-500": "oklch(63.7% 0.237 25.331)",
  "border-blue-500": "oklch(62.3% 0.214 259.815)",
  "border-gray-100": "oklch(96.7% 0.003 264.542)",
};

// 7. Effects & Misc
export const shadows = {
  "shadow-sm": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  "shadow-md": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  "shadow-lg": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
};

export const miscEffects = {
  transition: "all 0.3s ease",
  "cursor-pointer": "pointer",
  "overflow-hidden": "hidden",
  "opacity-50": "0.5",
  "opacity-75": "0.75",
  "opacity-100": "1",
};

// 8. Image & Background Image
export const objectFits = {
  "object-contain": "contain",
  "object-cover": "cover",
  "object-fill": "fill",
  "object-none": "none",
  "object-scale-down": "scale-down",
};

export const objectPositions = {
  "object-bottom": "bottom",
  "object-center": "center",
  "object-left": "left",
  "object-left-bottom": "left bottom",
  "object-left-top": "left top",
  "object-right": "right",
  "object-right-bottom": "right bottom",
  "object-right-top": "right top",
  "object-top": "top",
};

export const bgSizes = {
  "bg-auto": "auto",
  "bg-cover": "cover",
  "bg-contain": "contain",
};

export const bgRepeats = {
  "bg-repeat": "repeat",
  "bg-no-repeat": "no-repeat",
  "bg-repeat-x": "repeat-x",
  "bg-repeat-y": "repeat-y",
  "bg-repeat-round": "round",
  "bg-repeat-space": "space",
};

export const bgPositions = {
  "bg-bottom": "bottom",
  "bg-center": "center",
  "bg-left": "left",
  "bg-left-bottom": "left bottom",
  "bg-left-top": "left top",
  "bg-right": "right",
  "bg-right-bottom": "right bottom",
  "bg-right-top": "right top",
  "bg-top": "top",
};