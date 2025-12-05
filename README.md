# Trackifi Cart UI

Reusable shopping cart UI library with full CRUD, GearVN-inspired red styling, and zero external dependencies. Ships standardized building blocks (inputs, buttons, modals, cards) plus a ready-made `CartUI` class you can mount into any project.

## Features
- Add, edit, delete items with inline modal flow and total summary.
- Standardized UI pieces exported: `createInput`, `createButton`, `createCard`, `createModal`.
- Red-first styling inspired by gearvn.com, no design system dependencies.
- Vanilla ESM, works in any modern bundler or `<script type="module">`.

## Quick start
1) Install after publishing:  
`npm install trackifi-cart`

2) Mount the cart somewhere in your app:
```js
import { mountCart } from "trackifi-cart";
import "trackifi-cart/src/styles.css"; // adjust path if you copy assets elsewhere

const cart = mountCart("#cart-root", {
  currencySymbol: "$",
  initialItems: [
    { name: "HyperX Alloy Origins", price: 120, quantity: 1 },
    { name: "Logitech G Pro X Superlight", price: 159, quantity: 2 }
  ],
  onItemsChange: (items) => console.log("Updated cart", items)
});
```

3) Add the container to your markup:
```html
<div id="cart-root"></div>
```

### Vanilla HTML demo snippet
```html
<link rel="stylesheet" href="node_modules/trackifi-cart/src/styles.css" />
<div id="cart"></div>
<script type="module">
  import { mountCart } from "./node_modules/trackifi-cart/src/index.js";
  mountCart("#cart", { currencySymbol: "₫" });
  // CRUD actions are built-in; listen with onItemsChange if you need syncing.
</script>
```

## API surface
- `new CartUI({ container, currencySymbol?, initialItems?, onItemsChange? })`
  - `container`: HTMLElement or selector.
  - `currencySymbol`: string, defaults to `$`.
  - `initialItems`: `{ name, price, quantity }[]`.
  - `onItemsChange`: callback receiving the updated items array.
- `mountCart(selectorOrElement, options)` convenience wrapper around `CartUI`.
- UI atoms: `createButton`, `createInput`, `createCard`, `createModal`.

## File structure
- `src/index.js` – library entry, exports `CartUI`, `mountCart`, and UI atoms.
- `src/styles.css` – red GearVN-inspired theme with cards, modals, buttons, inputs.
- `package.json` – ESM entry points; `files` whitelist set for npm packaging.

## Packaging & publishing to npm
1) Update metadata in `package.json` (name, author, version).
2) Optional: validate syntax.  
   `npm run check`
3) Test the tarball locally.  
   `npm pack`
   - This produces `trackifi-cart-<version>.tgz`. Install it elsewhere with `npm install ../trackifi-cart-<version>.tgz` to verify.
4) Log in and publish:
   ```bash
   npm login
   npm version patch   # or minor/major
   npm publish --access public
   ```
5) Consumers then install with `npm install <your-package-name>` and import `src/index.js` and `src/styles.css` (or bundle them into their own build).

### Bundling notes
The code is modern ESM with no dependencies. If you want a compiled distribution, add a bundler like `tsup` or `rollup` and point `package.json` `main/module/style` to the built files, but the current setup ships as-is for simplicity.

## Customization tips
- Override colors by redefining the CSS variables in your host app (e.g., `--red-600`, `--card`, `--text`).
- Use the `onItemsChange` hook to sync totals to your backend or app state.
- Swap `currencySymbol` to match your locale without touching logic.