import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit
{
  sslcchart: any;
  pucchart: any;
  bechart: any;
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
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";
        const text = chart.config.options.elements.center.text;
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    });
    this.sslcchart = new Chart('sslccanvas', {
      type: 'doughnut',
      data: {
        labels: ['Data1', 'Data2'],
        datasets: [
          {
            data: [90, 10],
            backgroundColor: ['#0072c6', 'whitesmoke'],
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
        },
        elements: {
          center: {
            text: '90%'  // set as you wish
          }
        },
      }
    });
    this.pucchart = new Chart('puccanvas', {
      type: 'doughnut',
      data: {
        labels: ['Data1', 'Data2'],
        datasets: [
          {
            data: [87, 13],
            backgroundColor: ['#4099ff', 'whitesmoke'],
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
        },
        elements: {
          center: {
            text: '87%'  // set as you wish
          }
        },
      }
    });
    this.bechart = new Chart('becanvas', {
      type: 'doughnut',
      data: {
        labels: ['Data1', 'Data2'],
        datasets: [
          {
            data: [91.7, 8.3],
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
        },
        elements: {
          center: {
            text: '9.17'  // set as you wish
          }
        },
      }
    });
  }


}
