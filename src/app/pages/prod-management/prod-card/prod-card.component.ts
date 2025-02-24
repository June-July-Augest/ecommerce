import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prod-card',
  imports: [CommonModule],
  templateUrl: './prod-card.component.html',
  styleUrl: './prod-card.component.scss'
})
export class ProdCardComponent {
  @Input() productName: string = 'Product Name';
  @Input() productDescription: string = 'Product Description';
  @Input() productImage: string = '';

  optionsVisible: boolean = false;

  toggleOptionsMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.optionsVisible = !this.optionsVisible;
  }

  editProduct(): void {
   
  }

  createOrder(): void {
   
  }

  removeProduct(): void {
   
  }
}
