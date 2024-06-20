import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-analysis',
  templateUrl: 'analysis.page.html',
  styleUrls: ['analysis.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
  ],
})
export class AnalysisPage implements OnInit {
  public chart: any;

  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('myChart', {
      type: 'line', //this denotes the type of chart
      data: {
        // values on X-Axis
        labels: [
          '2022-05',
          '2022-06',
          '2022-07',
          '2022-08',
          '2022-09',
          '2022-10',
          '2022-11',
          '2022-12',
        ],
        datasets: [
          {
            label: 'Income',
            data: [
              '8500',
              '9500',
              '9600',
              '8600',
              '9500',
              '9600',
              '9500',
              '9500',
            ],
            backgroundColor: 'green',
          },
          {
            label: 'Expenses',
            data: [
              '3542',
              '4531',
              '4376',
              '4327',
              '3917',
              '2987',
              '3538',
              '4541',
            ],
            backgroundColor: 'orange',
          },
        ],
      },
      options: {
        aspectRatio: 4,
      },
    });
  }
}
