import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit
{
  chart: any;
  constructor() { }

  ngOnInit()
  {

    Chart.pluginService.register({
      beforeDraw: function (chart)
      {
        const width = chart.chart.width;
        const height = chart.chart.height;
        const ctx = chart.chart.ctx;
        ctx.restore();
        const fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + 'em sans-serif';
        ctx.textBaseline = 'middle';

        const text = "90%";
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 2;

        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    });
    this.chart = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: ['Data1', 'Data2'],
        datasets: [
          {
            data: [90, 10],
            backgroundColor: ['#0077b5', 'whitesmoke'],
            fill: false
          },
        ]
      },
      options: {
        animation: {
          animateScale: true
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        }
      }
    });
  }


}
