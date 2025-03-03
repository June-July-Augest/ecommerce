import { CartItem } from "./cart.model";

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  address: string;
  paymentMethod: string;
}
