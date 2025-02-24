import { Component } from '@angular/core';
import {
  CardFormData,
  Order,
  PaymentMethod,
  ProfileInfo,
  ShippingAddress,
} from './userinfo.model';
import { DUMMY_DATA } from './dummy-data';
import { InfoCardComponent } from './info-card/info-card.component';
import { OrderCardComponent } from './order-card/order-card.component';

@Component({
  selector: 'app-userinfo',
  imports: [InfoCardComponent, OrderCardComponent],
  templateUrl: './userinfo.component.html',
  styleUrl: './userinfo.component.css',
})
export class UserinfoComponent {

  profileInfo: ProfileInfo = DUMMY_DATA.profileInfo;
  shippingAddress: ShippingAddress = DUMMY_DATA.shippingAddress;
  paymentMethod: PaymentMethod = DUMMY_DATA.paymentMethod;
  orderHistory: Order[] = DUMMY_DATA.orderHistory;


  onSelectImage(link: string) {
    // upload this image to data base generate url and pass it to info-card!!
    console.log('old profile image URL')
    console.log(this.profileInfo.profileImage)
    this.profileInfo.profileImage = link
    console.log('updated profile image URL(Blob object)')
    console.log(this.profileInfo.profileImage)
  }

  onSubmitProfile(data: CardFormData) {
    // update database when done playing with dummy data
    console.log('old ProfileInfo: ', this.profileInfo);
    this.profileInfo = {
      ...this.profileInfo,
      firstName: data.firstData,
      lastName: data.secondData,
      email: data.thirdData,
      phone: data.forthData,
    };
    console.log('data: ', data);
    console.log('updated ProfileInfo: ', this.profileInfo);
  }

  onSubmitAddress(data: CardFormData) {
    // update database when done playing with dummy data
    console.log('old ShippingAddress: ', this.shippingAddress);
    this.shippingAddress = {
      ...this.shippingAddress,
      street: data.firstData,
      city: data.secondData,
      state: data.thirdData,
      zipcode: data.forthData
    };
    console.log('data: ', data);
    console.log('updated ShippingAddress: ', this.shippingAddress);
  }

  onSubmitPayment(data: CardFormData) {
    // update database when done playing with dummy data
    console.log('old paymentMethod: ', this.paymentMethod);
    this.paymentMethod = {
      ...this.paymentMethod,
      cardNumber: data.firstData,
      exp: data.secondData,
      billingAddress: data.thirdData,
      secCode: data.forthData
    };
    console.log('data: ',data);
    console.log('updated paymentMethod: ', this.paymentMethod);
  }
}
