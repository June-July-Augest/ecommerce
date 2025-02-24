import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.scss'],
})
export class NewArrivalsComponent {
  products = [
    { image: 'assets/item1.jpg' },
    { image: 'assets/item2.jpg' },
    { image: 'assets/item3.jpg' },
    { image: 'assets/item4.webp' },
  ];
}
