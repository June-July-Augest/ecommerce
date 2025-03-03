import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../models/cart.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items = new BehaviorSubject<CartItem[]>([]);
  cartItems$: Observable<CartItem[]> = this.items.asObservable();

  constructor() {}

  addToCart(item: CartItem) {
    let currentItems = this.items.value;
    let existingItem = currentItems.find(i => i.id === item.id && i.size === item.size);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      item.quantity = 1;
      currentItems.push(item);
    }

    this.items.next([...currentItems]);
  }

  removeFromCart(item: CartItem) {
    let currentItems = this.items.value.filter(i => !(i.id === item.id && i.size === item.size));
    this.items.next([...currentItems]);
  }

  updateQuantity(item: CartItem, newQuantity: number) {
    let currentItems = this.items.value.map(i => {
      if (i.id === item.id && i.size === item.size) {
        return { ...i, quantity: newQuantity };
      }
      return i;
    });

    this.items.next([...currentItems]);
  }

  getCartItems(): Observable<CartItem[]> {
    return this.cartItems$;
  }

  getTotalItemCount(): Observable<number> {
    return this.cartItems$.pipe(
      map(items => items.reduce((total, item) => total + item.quantity, 0))
    );
}
}
