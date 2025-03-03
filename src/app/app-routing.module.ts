import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrderConfirmationComponent } from './pages/order-confirmation/order-confirmation.component';
import { CheckoutEmailComponent } from './pages/checkout-email/checkout-email.component';
import { CheckoutShippingComponent } from './pages/checkout-shipping/checkout-shipping.component';
import { CheckoutPaymentComponent } from './pages/checkout-payment/checkout-payment.component';

const routes: Routes = [
  { path: "", component: CartComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'checkout-email', component: CheckoutEmailComponent},
  { path: 'checkout-shipping', component: CheckoutShippingComponent},
  { path: 'checkout-payment', component: CheckoutPaymentComponent},
  { path: 'order-confirmation', component: OrderConfirmationComponent },
  { path: '**', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
