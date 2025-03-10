import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-prod-chart',
  imports: [NgChartsModule, CommonModule],
  templateUrl: './prod-chart.component.html',
  styleUrl: './prod-chart.component.scss'
})
export class ProdChartComponent implements OnInit {
  chartType: ChartType = 'bar';
  chartLabels: string[] = ['Strategy 1', 'Strategy 2', 'Strategy 3', 'Strategy 4', 'Strategy 5'];
  chartData!: ChartData;
  chartOptions!: ChartOptions;
  isBrowser: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.chartData = {
        labels: this.chartLabels,
        datasets: [
          {
            label: 'Product A',
            data: [120, 130, 90, 150, 80],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            type: 'bar'
          },
          {
            label: 'Product B',
            data: [100, 140, 120, 130, 110],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            type: 'bar'
          },
          {
            label: 'Product C',
            data: [80, 110, 130, 120, 90],
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1,
            type: 'bar'
          },
          {
            label: 'Product D',
            data: [70, 100, 110, 140, 70],
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
            type: 'bar'
          },
          {
            label: 'Total',
            data: [370, 480, 450, 540, 350],
            type: 'line',
            backgroundColor: 'rgba(75, 75, 75, 0.5)',
            borderColor: 'rgba(75, 75, 75, 1)',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            yAxisID: 'y1'
          }
        ]
      };

      this.chartOptions = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          tooltip: {
            mode: 'index',
            intersect: false
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Strategy'
            }
          },
          y: {
            title: {
              display: true,
              text: "Product's Values"
            }
          },
          y1: {
            position: 'right',
            title: {
              display: true,
              text: 'Total of amount'
            },
            grid: {
              drawOnChartArea: false
            }
          }
        }
      };
    }
  }
}