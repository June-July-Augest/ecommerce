import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { MaterialWrapperDirective } from '../../directives/material-wrapper/material-wrapper.directive';

@Component({
  selector: 'app-material-layout',
  imports: [
    CommonModule, 
    RouterOutlet,
    MaterialWrapperDirective
  ],
  templateUrl: './material-layout.component.html',
  styleUrl: './material-layout.component.scss'
})
export class MaterialLayoutComponent {
  useMaterialWrapper: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Watch Route Changes
    this.router.events.subscribe(() => {
      const url = this.router.url;

      // Use Material Wrapper Only for These Routes
      this.useMaterialWrapper = url.startsWith('/seller')
    });
  }
}
