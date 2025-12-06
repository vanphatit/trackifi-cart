# Trackifi Cart UI

A zero-dependency shopping cart UI kit with GearVN-inspired red styling. Ships a ready-to-mount `CartUI` plus small UI atoms (button, input, card, modal) you can reuse in any project.

## Highlights
- Full cart CRUD (add, edit, delete) with totals + empty state built in.
- Modern ESM, no frameworks required; works in bundlers or plain `<script type="module">`.
- Drop-in styling via `styles.css` (customize with CSS variables).
- Tiny API surface: `CartUI`, `mountCart`, and UI atoms `createButton`, `createInput`, `createCard`, `createModal`.

## Install
```bash
npm install trackifi-cart
# or local tarball after `npm pack`
# npm install ../trackifi-cart-0.1.0.tgz
```

## Quick usage (vanilla HTML)
```html
<link rel="stylesheet" href="node_modules/trackifi-cart/src/styles.css" />
<div id="cart"></div>
<script type="module">
  import { mountCart } from "./node_modules/trackifi-cart/src/index.js";

  mountCart("#cart", {
    currencySymbol: "₫",
    initialItems: [
      { name: "RTX 4070", price: 14990000, quantity: 1 },
      { name: "SSD 1TB", price: 2100000, quantity: 2 }
    ],
    onItemsChange: (items) => console.log("Cart updated", items)
  });
</script>
```

## Usage in React (or any framework)
```jsx
import { useEffect, useRef } from "react";
import { mountCart } from "trackifi-cart";
import "trackifi-cart/src/styles.css";

export default function CartWidget() {
  const ref = useRef(null);

  useEffect(() => {
    const cart = mountCart(ref.current, {
      currencySymbol: "$",
      initialItems: [{ name: "Monitor 240Hz", price: 329, quantity: 1 }],
      onItemsChange: (items) => console.log(items),
    });
    return () => {
      if (ref.current) ref.current.innerHTML = "";
    };
  }, []);

  return <div ref={ref} />;
}
```

## API
- `mountCart(selectorOrElement, options)` → `CartUI` instance.
- `new CartUI({ container, currencySymbol?, initialItems?, onItemsChange? })`
  - `container`: DOM element or selector string (required).
  - `currencySymbol`: string prefix for prices, default `$`.
  - `initialItems`: array of `{ name, price, quantity }`.
  - `onItemsChange(items)`: callback fired after any CRUD action.
- UI atoms you can reuse:
  - `createButton({ label, variant?, type?, onClick? })`
  - `createInput({ label, name, type?, placeholder?, value?, required? })`
  - `createCard({ title, meta?, body, footer })`
  - `createModal(title)` → `{ overlay, open, close, setBody }`

## Styling & theming
Override the CSS variables in your host app to theme quickly:
```css
:root {
  --red-600: #d6001c;
  --card: #161616;
  --text: #f7f7f7;
  --radius: 14px;
}
```
The `style` field in `package.json` points to `src/styles.css`; most bundlers will include it when you import the CSS directly (`import "trackifi-cart/src/styles.css"`).

## Local development & validation
- Syntax check: `npm run check` (pure JS syntax validation). Your environment needs Node installed.
- Demo page: open `index.html` in a browser to see the cart running with sample data.
- Publish flow:
  ```bash
  npm pack                              # create trackifi-cart-<version>.tgz
  npm version patch|minor|major         # bump
  npm publish --access public           # push to npm
  ```

## Notes
- The library is framework-agnostic; it manages its own DOM and styling.
- Use `onItemsChange` to sync with your app state/backend or to drive analytics.
- If you need a bundled/compiled build, add a bundler (Rollup/tsup) and point `main/module/style` to the dist files.
