import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ChartOptions, ChartType, ChartDataset, Chart } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
Chart.defaults.scale.grid.display = false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'speed';
  isChecked = false;
  faCoffee: any;
  LastSpeed: number = 0;

  car1 = [{ x: 10, y: 20 }, { x: 15, y: 30 }, { x: 20, y: 20 }, { x: 25, y: 50 }, { x: 30, y: 70 }, { x: 40, y: 60 }, { x: 50, y: 20 }]
  car2 = [{ x: 10, y: 20 }, { x: 15, y: 30 }, { x: 20, y: 120 }, { x: 25, y: 100 }, { x: 30, y: 80 }, { x: 40, y: 60 }, { x: 50, y: 120 }]

  public scatterChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      y: {
        display: true,
        position: "right",
        title: {
          display: true,
          text: 'Km\h',
          align: "end"
        },
        grid: {
          color: 'rgba(0,255,0,0.1)',
          borderColor: 'green',
        }


      },
      x: {
        display: true,
        title: {
          display: true,
          text: 'Mins',
          align: "end"
        },
        grid: {
          color: 'rgba(0,255,0,0.1)',
          borderColor: 'green',
        }
      },



    }
  };

  public scatterChartData: ChartDataset[] = [
    {
      data: this.isChecked ? this.car2 : this.car1,
      label: this.isChecked ? 'CAR 2' : 'CAR 1',
      pointRadius: 1,
    },
  ];
  public scatterChartType: ChartType = 'scatter';

  constructor() {
  }
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  ngOnInit() {
    this.toggle();

  }

  toggle() {
    if (this.isChecked) {
      this.LastSpeed = this.car2[this.car2.length - 1].y;
      this.scatterChartData[0] = {
        data: this.car2,
        label: 'CAR 2',
        pointRadius: 15,
        backgroundColor: 'rgb(248 201 50)'

      }
      this.chart?.update();


    } else {
      this.LastSpeed = this.car1[this.car1.length - 1].y;
      this.scatterChartData[0] = {
        data: this.car1,
        label: 'CAR 1',
        pointRadius: 15,
        backgroundColor: 'rgb(0 130 199)'

      }
      this.chart?.update();

    }
  }

}
