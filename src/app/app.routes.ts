import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { UserinfoComponent } from './pages/userinfo/userinfo.component';
import { CategoryComponent } from './components/category/category.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'userinfo', component: UserinfoComponent },
  { path: ':category', component: CategoryComponent },
  /* { path: '**', redirectTo: '', pathMatch: 'full' }, */
];

export default routes;
