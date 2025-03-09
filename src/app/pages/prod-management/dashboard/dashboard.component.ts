import { Component, NgModule, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardInfoBlockComponent } from '../dashboard-info-block/dashboard-info-block.component';
import { ProdChartComponent } from '../prod-chart/prod-chart.component';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardInfoBlockComponent, CommonModule, ProdChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class DashboardComponent {
  myUserName : string = "Thanh";

  dummyData = [
    {title: "Total Orders", value: "1000", description: "text description"},
    {title: "Revenue", value: "$1,000,000", description: "text description"},
    {title: "Total Views", value: "100,000", description: "text description"}
  ]

}
