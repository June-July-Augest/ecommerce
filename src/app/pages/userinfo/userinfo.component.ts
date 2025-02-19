import { Component } from '@angular/core';
import { Order, PaymentMethod, ProfileInfo, ShippingAddress } from './userinfo.model';
import { DUMMY_DATA } from './dummyData';
import { InfoCardComponent } from "./info-card/info-card.component";
import { OrderCardComponent } from "./order-card/order-card.component";

@Component({
  selector: 'app-userinfo',
  standalone: true,
  imports: [InfoCardComponent, OrderCardComponent],
  templateUrl: './userinfo.component.html',
  styleUrl: './userinfo.component.scss',
})
export class UserinfoComponent {
    profileInfo: ProfileInfo = DUMMY_DATA.profileInfo
    shippingAddress: ShippingAddress = DUMMY_DATA.shippingAddress
    paymentMethod: PaymentMethod = DUMMY_DATA.paymentMethod
    orderHistory: Order[] = DUMMY_DATA.orderHistory
  
}
