import { ChangeDetectorRef, Component } from '@angular/core';
import {
  CardFormData,
  FormDisplay,
  Order,
  PaymentMethod,
  ProfileInfo,
  ShippingAddress,
} from './userinfo.model';
import { DUMMY_DATA } from './dummy-data';
import { InfoCardComponent } from './info-card/info-card.component';
import { OrderCardComponent } from './order-card/order-card.component';
import { Validators } from '@angular/forms';

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

  profileDisplay: FormDisplay = {
    firstDisplay: this.profileInfo.firstName,
    secondDisplay: this.profileInfo.lastName,
    thirdDisplay: this.profileInfo.email,
    forthDisplay: this.formatPhoneString(this.profileInfo.phone),
  };
  shippingDisplay: FormDisplay = {
    firstDisplay: this.shippingAddress.street,
    secondDisplay: this.shippingAddress.city,
    thirdDisplay: this.shippingAddress.state,
    forthDisplay: this.shippingAddress.zipcode,
  };
  PaymentDisplay: FormDisplay = {
    firstDisplay: this.paymentMethod.cardNumber,
    secondDisplay: this.paymentMethod.exp,
    thirdDisplay: this.paymentMethod.billingAddress,
    forthDisplay: this.paymentMethod.secCode,
  };

  profileFormValidation = {
    firstField: {
      validators: [Validators.required],
    },
    secondtField: {
      validators: [Validators.required],
    },
    thirdField: {
      validators: [Validators.required, Validators.email, Validators.pattern(/\./)],
    },
    forthField: {
      validators: [
        Validators.required,
        Validators.pattern(/^\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{4}$/),
      ],
    },
  };
  shippingFormValidation = {
    firstField: {
      validators: [Validators.required],
    },
    secondtField: {
      validators: [Validators.required],
    },
    thirdField: {
      validators: [Validators.required, Validators.minLength(2)],
    },
    forthField: {
      validators: [Validators.required, Validators.pattern(/^\d{5}(-\d{4})?$/)],
    },
  };
  paymentFormValidation = {
    firstField: {
      validators: [Validators.required, Validators.minLength(13)]
    },
    secondtField: {
      validators: [
        Validators.required,
        Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)
      ],
    },
    thirdField: {
      validators: [Validators.required],
    },
    forthField: {
      validators: [Validators.required, Validators.pattern(/^\d{3}$/)],
    },
  };

  onSelectImage(link: string) {
    // upload this image to data base generate url and pass it to info-card!!
    // console.log('old profile image URL')
    console.log(this.profileInfo.profileImage);
    this.profileInfo.profileImage = link;
    // console.log('updated profile image URL(Blob object)')
    // console.log(this.profileInfo.profileImage)
  }

  formatPhoneString(phone: string | null) {
    const cleanedPhone = phone!.replaceAll(/\D/g, '');
    let formatedPhone = '';
    for (let i = 0; i < cleanedPhone.length; i++) {
      if (i === 3 || i === 6) {
        formatedPhone += '-';
      }
      formatedPhone += cleanedPhone![i];
    }
    return formatedPhone;
  }

  onSubmitProfile(data: CardFormData) {
    // update database when done playing with dummy data
    // console.log('old ProfileInfo: ', this.profileInfo);
    this.profileInfo = {
      ...this.profileInfo,
      firstName: data.firstData,
      lastName: data.secondData,
      email: data.thirdData,
      phone: this.formatPhoneString(data.forthData),
    };
    console.log(this.profileInfo.phone);
    // console.log('data recieved in parent: ', data);
    // console.log('updated ProfileInfo property: ', this.profileInfo);
  }

  onSubmitAddress(data: CardFormData) {
    // update database when done playing with dummy data
    // console.log('old ShippingAddress: ', this.shippingAddress);
    this.shippingAddress = {
      ...this.shippingAddress,
      street: data.firstData,
      city: data.secondData,
      state: data.thirdData,
      zipcode: data.forthData,
    };
    // console.log('data recieved in parent: ', data);
    // console.log('updated ShippingAddress: ', this.shippingAddress);
  }

  onSubmitPayment(data: CardFormData) {
    // update database when done playing with dummy data
    // console.log('old paymentMethod: ', this.paymentMethod);
    this.paymentMethod = {
      ...this.paymentMethod,
      cardNumber: data.firstData,
      exp: data.secondData,
      billingAddress: data.thirdData,
      secCode: data.forthData,
    };
    // console.log('data recieved in parent: ',data);
    // console.log('updated paymentMethod: ', this.paymentMethod);
  }
}
