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

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'listing', component: ListingComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'listing/productDetail', component: ProdDetailComponent },
  { path: 'userinfo', component: UserinfoComponent },
  { path: ':category', component: CategoryComponent },
  /* { path: '**', redirectTo: '', pathMatch: 'full' }, */
];

export default routes;
