import { Component, Input } from '@angular/core';
import { CartItem } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-cart-items',
  standalone: false,
  templateUrl: './cart-items.component.html',
  styleUrl: './cart-items.component.scss'
})
export class CartItemsComponent {
  @Input() item!: CartItem;

  constructor(private cartService: CartService) {}

  decreaseQuantity(item: CartItem) {
    if (item.quantity > 1) {
      this.cartService.updateQuantity(item, item.quantity - 1);
    } else {
      this.cartService.removeFromCart(item);
    }
  }

  increaseQuantity(item: CartItem) {
    this.cartService.updateQuantity(item, item.quantity + 1);
  }

  removeItem(item: CartItem) {
    this.cartService.removeFromCart(item);
  }
}
