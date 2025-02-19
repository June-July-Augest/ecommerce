import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from "./pages/products/products.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce-project';
}
