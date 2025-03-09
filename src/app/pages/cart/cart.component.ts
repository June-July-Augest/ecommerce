import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems = [
    { name: 'Slogan Tee / Orange', size: 'L', quantity: 1, price: 50, imageUrl: 'assets/orange slogan tee.png' },
    { name: 'Teen Girl Hoodie / White', size: 'S', quantity: 2, price: 60, imageUrl: 'assets/Teen Girl hoodie.jpg' },
    { name: "Women's Jacket / Brown", size: 'M', quantity: 1, price: 50, imageUrl: 'assets/womesn jacket.png' }
  ];

  constructor(private router: Router) {}

  getSubtotal() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  saveForLater(item: any) {
    // Logic to save item for later
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  increaseQuantity(item: any) {
    item.quantity++;
  }

  removeItem(item: any) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
  }

  checkout() {
    this.router.navigate(['/checkout']);
  }
}

