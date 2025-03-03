import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private orders = new BehaviorSubject<Order[]>([]);
  orders$ = this.orders.asObservable();

  constructor() {}

  placeOrder(order: Order) {
    let currentOrders = this.orders.value;
    currentOrders.push(order);
    this.orders.next([...currentOrders]);
  }
}
