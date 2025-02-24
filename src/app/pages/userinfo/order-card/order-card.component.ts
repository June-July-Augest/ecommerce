import { Component, input } from '@angular/core';

@Component({
  selector: 'app-order-card',
  imports: [],
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.css'
})
export class OrderCardComponent {
     title = input.required<string | null>()
     image = input.required<string | null>()
     firstDisplay = input.required<string | null>()
     secondDisplay = input.required<string | null>()
     thirdDisplay = input.required<string | null>()
     forthDisplay = input.required<string | null>()
     orderId = input.required<string|null>() // find the order detail page

     onReview(){
      window.alert("Nevigating to product detail page and scrol to the review section then focus cursor to the review textarea")
     }
}
