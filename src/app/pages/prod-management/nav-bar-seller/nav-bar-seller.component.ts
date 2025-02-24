import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-nav-bar-seller',
  imports: [MatToolbarModule, RouterModule, MatIconModule],
  templateUrl: './nav-bar-seller.component.html',
  styleUrl: './nav-bar-seller.component.scss'
})
export class NavBarSellerComponent {
  @Input() navUserName : string = "";

  menuOpen: boolean = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

}
