import { Component } from '@angular/core';
import { NavBarSellerComponent } from '../../pages/prod-management/nav-bar-seller/nav-bar-seller.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seller-layout',
  imports: [NavBarSellerComponent, RouterModule, FooterComponent, CommonModule],
  templateUrl: './seller-layout.component.html',
  styleUrl: './seller-layout.component.scss'
})
export class SellerLayoutComponent {

}
