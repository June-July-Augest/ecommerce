import { Component, Input } from '@angular/core';
import { CartItem } from '../../models/cart.model';

@Component({
  selector: 'app-order-summary',
  standalone: false,
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent {
  @Input() cartItems!: CartItem[];

  getTotal() {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  getSubtotal() {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  getTax() {
    // Assuming a tax rate of 10% for example
    const taxRate = 0.1;
    return this.getSubtotal() * taxRate;
  }
}
