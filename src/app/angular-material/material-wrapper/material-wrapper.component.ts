import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-material-wrapper',
  imports: [
    CommonModule,
    MatButtonModule,   // Angular Material Button Module
    MatCardModule      // Angular Material Card Module
  ],
  templateUrl: './material-wrapper.component.html',
  styleUrl: './material-wrapper.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class MaterialWrapperComponent {
  @Input() title: string = '';
  @Input() buttonLabel: string = '';
  @Output() action = new EventEmitter<void>();

  onAction() {
    this.action.emit();
  }
}
