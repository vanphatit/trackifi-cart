// TypeScript definitions for trackifi-cart v0.2.0

export interface ButtonOptions {
  label: string;
  variant?:
    | "primary"
    | "outline"
    | "ghost"
    | "ghost-red"
    | "success"
    | "warning"
    | "danger";
  type?: "button" | "submit" | "reset";
  onClick?: (event: MouseEvent) => void;
  disabled?: boolean;
  ariaLabel?: string;
}

export interface InputOptions {
  label: string;
  name: string;
  type?:
    | "text"
    | "email"
    | "password"
    | "number"
    | "tel"
    | "url"
    | "date"
    | "time"
    | "select"
    | "textarea"
    | "checkbox"
    | "radio";
  placeholder?: string;
  value?: string;
  required?: boolean;
  options?: Array<string | { label: string; value: string }>;
  rows?: number;
}

export interface InputResult {
  wrapper: HTMLElement;
  input: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
}

export interface CardOptions {
  title: string;
  meta?: string;
  body?: string | Node;
  footer?: Node;
}

export interface ModalAPI {
  overlay: HTMLElement;
  open: () => void;
  close: () => void;
  setBody: (node: Node) => void;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface CartUIOptions {
  container: HTMLElement | string;
  currencySymbol?: string;
  initialItems?: Array<Omit<CartItem, "id">>;
  onItemsChange?: (items: CartItem[]) => void;
}

export class CartUI {
  constructor(options: CartUIOptions);

  container: HTMLElement;
  currencySymbol: string;
  items: CartItem[];

  render(): void;
  addItem(item: Omit<CartItem, "id">): void;
  updateItem(id: string, updates: Partial<Omit<CartItem, "id">>): void;
  deleteItem(id: string): void;
  updateSummary(): void;
}

export function createButton(options: ButtonOptions): HTMLButtonElement;
export function createInput(options: InputOptions): InputResult;
export function createCard(options: CardOptions): HTMLElement;
export function createModal(title: string): ModalAPI;
export function mountCart(
  selectorOrElement: string | HTMLElement,
  options?: Omit<CartUIOptions, "container">
): CartUI;
