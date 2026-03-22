# Gullu CSS Engine

A blazing-fast, **zero-build** runtime utility CSS engine. 

Instead of waiting for Webpack or Vite to compile hundreds of gigabytes of node modules, **Gullu CSS Engine operates entirely in the browser at runtime**. By leveraging modern browser JavaScript, Gullu CSS reads your utility classes natively and injects styles dynamically. No complicated configurations. No PostCSS process. Just instantly applied styles.

📖 **[Browse Full Class Reference & Docs →](https://gullu-css.netlify.app/)**

## 🚀 Features
- **Zero Build Step:** Runs 100% in browser JS. No build pipelines.
- **200+ Semantic Tokens:** Out of the box Oklch color palettes, spacing systems, and scale tiers.
- **Arbitrary JIT Values:** On-the-fly values using square bracket syntax (e.g., `text-[35px]`). 
- **Lightweight Core:** Modularized rulesets (Layout, Typography, Backgrounds, Effects, etc.).

---

## 📦 Installation

To install via npm:
```bash
npm install gullu-css
```

*(Note: Replace `gullu-css` with the exact scoped name you push to npm).*

---

## 🛠️ Usage

Because it's an ES6 module, you can easily drop it into standard HTML, React, Vue, Next.js, or any modern framework. 

### ⚡ Vanilla HTML (Via CDN)
The easiest way to get started is to import Gullu CSS straight from `unpkg` as a module directly in your HTML. No build step required!

```html
<script type="module">
    import { initEngine } from "https://unpkg.com/gullu-css@1.0.1/main.js";
    initEngine();
</script>
```

---


### React / Next.js
You can trigger the engine during page mount or context initialization:
```jsx
import { useEffect } from 'react';
import { initEngine } from 'gullu-css';

export default function App() {
  useEffect(() => {
    // Run the engine once the DOM mounts
    initEngine();
  }, []);

  return (
    <div className="bg-slate-900 w-screen h-screen d-flex items-center justify-center">
        <h1 className="text-4xl font-bold text-emerald-400">Powered by Gullu CSS</h1>
    </div>
  );
}
```

---

## 📖 API & Feature Reference

Below is a complete reference of the modules and utility classes processed by Gullu CSS:

### 1. Typography
Control all text styling properties with simple prefixes.
- **Size Scale:** `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl` ... `text-6xl`.
- **Colors:** Support for `text-white`, `text-gray`, and scales like `text-emerald-500` or `text-blue-700`.
- **Weight:** `font-medium`, `font-bold`, `font-black`.
- **Alignment:** `text-center`, `text-right`, `text-left`.

### 2. Layout & Flex
Handle responsive positioning and flexbox models seamlessly.
- **Display Nodes:** `d-flex`, `d-inline-flex`.
- **Direction:** `flex-col`, `flex-row`.
- **Alignment (Items):** `items-start`, `items-center`, `items-end`.
- **Alignment (Content):** `justify-start`, `justify-center`, `justify-between`, `justify-around`.
- **Spacing:** `gap-1`, `gap-4`, `gap-8`.
- **Wrap:** `flex-wrap`, `flex-nowrap`.

### 3. Box Model & Spacing
Precise control over margins, padding, sizing, and borders.
- **Padding:** `p-4`, `pt-2`, `pb-8`, `px-4`, `py-6`.
- **Margin:** `m-4`, `mt-2`, `mb-8`, `mx-auto`.
- **Scale:** Spacing values map evenly from 0px up to 96px (`p-0` to `p-24`).
- **Sizing:** `w-full`, `h-screen`, `w-64`, `max-w-lg`.
- **Radius:** `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-full`.
- **Borders:** `border-2`, `border-emerald-500`.

### 4. Backgrounds & Colors
Paint any container with deep color system integration.
- **Standard Colors:** `bg-emerald-500`, `bg-slate-900`, `bg-blue-600`.
- **Special Values:** `bg-white`, `bg-black`, `bg-transparent`.
- **Color Scale:** Ranges horizontally from `50` (lightest) to `950` (darkest). All predefined palettes use perceptual color modeling.

### 5. Images 
Style responsive web images seamlessly. 
- **Background Size/Position:** `bg-cover`, `bg-contain`, `bg-auto`, `bg-center`, `bg-top`.
- **Object Fits (for Native Images):** `object-cover`, `object-contain`, `object-center`.
- **Direct URLs:** Embed background images flawlessly via `bg-[url('https://link.com/photo.jpg')]`.

### 6. Effects
Bring interactions alive.
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg` (maps high fidelity CSS box-shadows).
- **Interactivity:** `cursor-pointer`, `transition`, `opacity-50`, `opacity-75`.
- **Overflow:** `overflow-hidden`, `overflow-visible`.

### 7. Arbitrary Constraints JIT `[...]`
Sometimes you need to escape the token system. Whenever that happens, cleanly use square bracket arbitrary values.
- **Custom Texts:** `text-[35px]`
- **Custom Colors:** `bg-[#ff6b6b]`, `text-[oklch(65%_0.2_145)]`
- **Dynamic Variables:** `bg-(--brand-color)`

---

## ⚙️ Architecture Core
Gullu CSS is built to be maximally performant at runtime. When `initEngine()` runs, it gathers the DOM layer into `document.querySelectorAll("[class]")` and iterates through standard HTML classes mapping directly up to our array of isolated rule tests (located in cleanly decoupled feature files: `layout.js`, `typography.js`, etc.). If a rule hits dynamically, it instantly overrides the element's inline `.style`, avoiding reflow latency whenever feasible.

---
### Building the Future of Styling.
*Developed for unparalleled runtime simplicity.*
