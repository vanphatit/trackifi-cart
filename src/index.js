import "./styles.css";

let idCounter = 0;

const generateId = () => {
  idCounter += 1;
  return `cart-item-${idCounter}-${Date.now()}`;
};

const createElement = (tag, className, attributes = {}) => {
  const el = document.createElement(tag);
  if (className) el.className = className;
  Object.entries(attributes).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      el.setAttribute(key, value);
    }
  });
  return el;
};

export const createButton = ({ label, variant = "primary", type = "button", onClick }) => {
  const button = createElement("button", `cart-btn cart-btn-${variant}`, { type });
  button.textContent = label;
  if (onClick) {
    button.addEventListener("click", onClick);
  }
  return button;
};

export const createInput = ({ label, name, type = "text", placeholder, value = "", required = true }) => {
  const wrapper = createElement("label", "cart-field");
  const span = createElement("span", "cart-field-label");
  span.textContent = label;
  const input = createElement("input", "cart-input", {
    name,
    type,
    placeholder: placeholder || label,
    value,
    required: required ? "true" : undefined,
    step: type === "number" ? "0.01" : undefined,
    min: type === "number" ? "0" : undefined
  });
  wrapper.append(span, input);
  return { wrapper, input };
};

export const createCard = ({ title, meta, body, footer }) => {
  const card = createElement("div", "cart-card");
  const header = createElement("div", "cart-card-header");
  const titleEl = createElement("div", "cart-card-title");
  titleEl.textContent = title;
  const metaEl = createElement("div", "cart-card-meta");
  metaEl.textContent = meta || "";
  header.append(titleEl, metaEl);
  const bodyEl = createElement("div", "cart-card-body");
  if (typeof body === "string") {
    bodyEl.textContent = body;
  } else if (body instanceof Node) {
    bodyEl.append(body);
  }
  const footerEl = createElement("div", "cart-card-footer");
  if (footer instanceof Node) {
    footerEl.append(footer);
  }
  card.append(header, bodyEl, footerEl);
  return card;
};

export const createModal = (title) => {
  const overlay = createElement("div", "cart-modal-overlay");
  const modal = createElement("div", "cart-modal");
  const header = createElement("div", "cart-modal-header");
  const titleEl = createElement("div", "cart-modal-title");
  titleEl.textContent = title;
  const closeBtn = createButton({ label: "×", variant: "ghost" });
  closeBtn.classList.add("cart-modal-close");
  closeBtn.setAttribute("aria-label", "Close modal");
  header.append(titleEl, closeBtn);
  const body = createElement("div", "cart-modal-body");
  modal.append(header, body);
  overlay.append(modal);

  const close = () => {
    overlay.classList.remove("is-open");
    setTimeout(() => overlay.remove(), 180);
  };

  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) close();
  });

  const setBody = (node) => {
    body.replaceChildren(node);
  };

  const open = () => {
    document.body.append(overlay);
    requestAnimationFrame(() => overlay.classList.add("is-open"));
  };

  return { overlay, open, close, setBody };
};

export class CartUI {
  constructor({
    container,
    currencySymbol = "$",
    initialItems = [],
    onItemsChange
  } = {}) {
    if (!container) throw new Error("CartUI requires a container element.");
    this.container = container;
    this.currencySymbol = currencySymbol;
    this.onItemsChange = onItemsChange;
    this.items = initialItems.map((item) => ({
      id: generateId(),
      name: item.name,
      price: Number(item.price) || 0,
      quantity: Number(item.quantity) || 1
    }));
    this.render();
  }

  render() {
    this.container.classList.add("cart-shell");
    this.container.innerHTML = "";

    const header = createElement("div", "cart-header");
    const title = createElement("h1", "cart-title");
    title.textContent = "Shopping Cart";
    const subtitle = createElement("p", "cart-subtitle");
    subtitle.textContent = "Add, edit, or remove products with a GearVN-inspired red glow.";
    header.append(title, subtitle);

    this.summary = createElement("div", "cart-summary");
    this.summaryTotal = createElement("div", "cart-summary-total");
    this.summaryCount = createElement("div", "cart-summary-count");
    this.summary.append(this.summaryTotal, this.summaryCount);

    this.itemsGrid = createElement("div", "cart-grid");
    if (this.items.length === 0) {
      this.itemsGrid.append(this.emptyState());
    } else {
      this.renderItems();
    }

    this.container.append(header, this.buildAddForm(), this.summary, this.itemsGrid);
    this.updateSummary();
  }

  buildAddForm() {
    const card = createElement("div", "cart-add-card");
    const form = createElement("form", "cart-add-form");
    const nameField = createInput({ label: "Product name", name: "name", placeholder: "Red HyperX Keyboard" });
    const priceField = createInput({ label: "Price", name: "price", type: "number", placeholder: "120.00" });
    const quantityField = createInput({ label: "Quantity", name: "quantity", type: "number", value: "1" });
    const action = createElement("div", "cart-actions");
    const addButton = createButton({ label: "Add to cart", type: "submit" });
    action.append(addButton);
    form.append(nameField.wrapper, priceField.wrapper, quantityField.wrapper, action);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const newItem = {
        name: nameField.input.value.trim(),
        price: Number(priceField.input.value),
        quantity: Number(quantityField.input.value) || 1
      };
      if (!newItem.name) return;
      this.addItem(newItem);
      form.reset();
      quantityField.input.value = "1";
    });
    const heading = createElement("div", "cart-add-heading");
    heading.textContent = "Quick add";
    card.append(heading, form);
    return card;
  }

  emptyState() {
    const state = createElement("div", "cart-empty");
    const icon = createElement("div", "cart-empty-icon");
    icon.textContent = "🛒";
    const text = createElement("p", "cart-empty-text");
    text.textContent = "Your cart is waiting for shiny red gear.";
    state.append(icon, text);
    return state;
  }

  renderItems() {
    this.itemsGrid.innerHTML = "";
    this.items.forEach((item) => {
      const body = createElement("div", "cart-card-body-col");
      const price = createElement("div", "cart-card-price");
      price.textContent = `${this.currencySymbol}${item.price.toFixed(2)}`;
      const qty = createElement("div", "cart-card-qty");
      qty.textContent = `Qty: ${item.quantity}`;
      body.append(price, qty);

      const editBtn = createButton({
        label: "Edit",
        variant: "ghost",
        onClick: () => this.openEditModal(item)
      });
      const deleteBtn = createButton({
        label: "Delete",
        variant: "outline",
        onClick: () => this.deleteItem(item.id)
      });
      const footerActions = createElement("div", "cart-card-actions");
      footerActions.append(editBtn, deleteBtn);

      const card = createCard({
        title: item.name,
        meta: `Line total: ${this.currencySymbol}${(item.price * item.quantity).toFixed(2)}`,
        body,
        footer: footerActions
      });

      this.itemsGrid.append(card);
    });
  }

  addItem(item) {
    const next = {
      id: generateId(),
      name: item.name,
      price: Number(item.price) || 0,
      quantity: Number(item.quantity) || 1
    };
    this.items = [next, ...this.items];
    this.renderItems();
    this.updateSummary();
    this.emitChange();
  }

  updateItem(id, updates) {
    this.items = this.items.map((item) =>
      item.id === id
        ? {
            ...item,
            name: updates.name ?? item.name,
            price: updates.price ?? item.price,
            quantity: updates.quantity ?? item.quantity
          }
        : item
    );
    this.renderItems();
    this.updateSummary();
    this.emitChange();
  }

  deleteItem(id) {
    this.items = this.items.filter((item) => item.id !== id);
    this.itemsGrid.innerHTML = "";
    if (this.items.length === 0) {
      this.itemsGrid.append(this.emptyState());
    } else {
      this.renderItems();
    }
    this.updateSummary();
    this.emitChange();
  }

  openEditModal(item) {
    const modal = createModal("Edit item");
    const form = createElement("form", "cart-edit-form");
    const nameField = createInput({ label: "Product name", name: "name", value: item.name });
    const priceField = createInput({ label: "Price", name: "price", type: "number", value: item.price.toString() });
    const quantityField = createInput({
      label: "Quantity",
      name: "quantity",
      type: "number",
      value: item.quantity.toString()
    });
    const actions = createElement("div", "cart-actions");
    const saveBtn = createButton({ label: "Save changes", type: "submit" });
    const cancelBtn = createButton({
      label: "Cancel",
      variant: "ghost",
      onClick: (event) => {
        event.preventDefault();
        modal.close();
      }
    });
    actions.append(cancelBtn, saveBtn);
    form.append(nameField.wrapper, priceField.wrapper, quantityField.wrapper, actions);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.updateItem(item.id, {
        name: nameField.input.value.trim(),
        price: Number(priceField.input.value),
        quantity: Number(quantityField.input.value)
      });
      modal.close();
    });
    modal.setBody(form);
    modal.open();
  }

  updateSummary() {
    const total = this.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const count = this.items.reduce((acc, item) => acc + item.quantity, 0);
    this.summaryTotal.textContent = `Total: ${this.currencySymbol}${total.toFixed(2)}`;
    this.summaryCount.textContent = `Items: ${count}`;
  }

  emitChange() {
    if (typeof this.onItemsChange === "function") {
      this.onItemsChange([...this.items]);
    }
  }
}

export const mountCart = (selectorOrElement, options = {}) => {
  const container =
    typeof selectorOrElement === "string"
      ? document.querySelector(selectorOrElement)
      : selectorOrElement;
  if (!container) {
    throw new Error("No container found for cart UI.");
  }
  return new CartUI({ container, ...options });
};
