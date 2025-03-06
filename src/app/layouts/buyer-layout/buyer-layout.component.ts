import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buyer-layout',
  imports: [NavbarComponent, RouterModule, FooterComponent, CommonModule],
  templateUrl: './buyer-layout.component.html',
  styleUrl: './buyer-layout.component.scss'
})
export class BuyerLayoutComponent {

}
