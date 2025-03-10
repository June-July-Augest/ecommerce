import { Component } from '@angular/core';
import { ProdCardComponent } from '../prod-card/prod-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing',
  imports: [ProdCardComponent],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss'
})
export class ListingComponent {
  myUserName : string = "Thanh"

  constructor(private router: Router) {

  }

  prodClick() {
    this.router.navigate(["seller/listing/productDetail"])
  }
}
