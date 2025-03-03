import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { PaymentMethodsComponent } from './components/payment-methods/payment-methods.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CheckoutEmailComponent } from './pages/checkout-email/checkout-email.component';
import { CheckoutShippingComponent } from './pages/checkout-shipping/checkout-shipping.component';
import { OrderConfirmationComponent } from './pages/order-confirmation/order-confirmation.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CheckoutPaymentComponent } from './pages/checkout-payment/checkout-payment.component';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    CartItemsComponent,
    OrderSummaryComponent,
    PaymentMethodsComponent,
    ShippingFormComponent,
    CartComponent,
    CheckoutComponent,
    CheckoutEmailComponent,
    CheckoutShippingComponent,
    OrderConfirmationComponent,
    FooterComponent,
    NavbarComponent,
    CheckoutPaymentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
