import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { NewArrivalsComponent } from '../../components/new-arrivals/new-arrivals.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, HeroComponent, NewArrivalsComponent, FooterComponent, NavbarComponent],
  template: `
    <app-navbar></app-navbar> <!-- Added nav-bar here -->
    <app-hero></app-hero>
    <app-new-arrivals></app-new-arrivals>
    <app-footer></app-footer>
  `,
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {}
