import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-info-block',
  imports: [],
  templateUrl: './dashboard-info-block.component.html',
  styleUrl: './dashboard-info-block.component.scss'
})
export class DashboardInfoBlockComponent {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() description?: string = '';
}
