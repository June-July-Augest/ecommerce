import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavBarSellerComponent } from '../nav-bar-seller/nav-bar-seller.component';

@Component({
  selector: 'app-prod-detail',
  imports: [CommonModule, FormsModule, NavBarSellerComponent],
  templateUrl: './prod-detail.component.html',
  styleUrl: './prod-detail.component.scss'
})
export class ProdDetailComponent {
  @Input() isSeller: boolean = false;

  product = {
    name: 'The Pique Polo',
    price: '75 EUR',
    colors: ['#1c1c1c', '#3a3a3a', '#666666', '#000000'],
    sizes: ['S', 'M', 'L', 'XL'],
    selectedColor: '#1c1c1c',
    selectedSize: 'M',
    description: `Detailed on the iconic courts of the 1920s, The Pique Polo shirt fits the space between the t-shirt and the shirt.`,
  };

  // Seller-specific methods
  editProduct() {
    alert('Edit product feature coming soon!');
  }

  deleteProduct() {
    alert('Delete product feature coming soon!');
  }
}
