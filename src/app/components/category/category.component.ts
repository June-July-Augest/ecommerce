import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categoryTitle: string = '';
  categoryProducts: any[] = [];

  // Separate product data for each category
  menProducts = [
    { name: 'Orange Slogan Tee', price: 11.29, image: 'assets/men-1.webp' },
    {
      name: 'Men Slogan Tee',
      price: 11.49,
      image: 'assets/men-2.webp',
    },
  ];

  womenProducts = [
    { name: "Women's Jacket", price: 53.99, image: 'assets/women-1.webp' },
    {
      name: 'Heart Print Nightdress',
      price: 21.99,
      image: 'assets/women-2.webp',
    },
  ];

  teensProducts = [
    { name: 'Teen Hoodie', price: 29.99, image: 'assets/teen-2.webp' },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const category = params.get('category');
      if (category) {
        this.categoryTitle =
          category.charAt(0).toUpperCase() + category.slice(1);

        // Load products based on category
        switch (category) {
          case 'men':
            this.categoryProducts = this.menProducts;
            break;
          case 'women':
            this.categoryProducts = this.womenProducts;
            break;
          case 'teens':
            this.categoryProducts = this.teensProducts;
            break;
          default:
            this.categoryProducts = []; // Empty array if category is invalid
        }
      }
    });
  }
}
