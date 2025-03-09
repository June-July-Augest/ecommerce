import { Component, Inject, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  cartItemCount$!: number;

  constructor(@Inject(CartService) private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getTotalItemCount().subscribe(count => {
      this.cartItemCount$ = count;
      console.log('Cart Item Count:', this.cartItemCount$);
      
    });
  }
}
