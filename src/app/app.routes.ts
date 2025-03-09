import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/prod-management/dashboard/dashboard.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { UserinfoComponent } from './pages/userinfo/userinfo.component';
import { ProductDetailComponent } from './pages/products/product-detail/product-detail.component';
import { ListingComponent } from './pages/prod-management/listing/listing.component';
import { InventoryComponent } from './pages/prod-management/inventory/inventory.component';
import { OrdersComponent } from './pages/prod-management/orders/orders.component';
import { ProdDetailComponent } from './pages/prod-management/prod-detail/prod-detail.component';
import { CategoryComponent } from './components/category/category.component';
import { SellerLayoutComponent } from './layouts/seller-layout/seller-layout.component';
import { BuyerLayoutComponent } from './layouts/buyer-layout/buyer-layout.component';
export const routes: Routes = [
  {
    path: '',
    component: BuyerLayoutComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'userinfo', component: UserinfoComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'category/:category', component: CategoryComponent },
    ]
  },
  {
    path: 'seller', 
    component: SellerLayoutComponent,
    children: [
      { path: '', redirectTo:'dashboard', pathMatch:'full'},
      { path: 'dashboard', component: DashboardComponent },
      { path: 'listing', component: ListingComponent },
      { path: 'inventory', component: InventoryComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'listing/productDetail', component: ProdDetailComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  /* { path: '**', redirectTo: '', pathMatch: 'full' }, */
];

export default routes;
