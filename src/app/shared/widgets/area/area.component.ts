import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import {CovidDayRate} from '../../CovidDayRate';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getCovidData()
  }

  covidApiUrl:string = 'https://api.covidtracking.com/v1/us/daily.json'
  covidDataArray: CovidDayRate[]=[];
  monthlyData: CovidDayRate[] = [];
  deathIncreases:any = [];
  dates:any = [];
  graphDates: any = [];
  getCovidData(){
    this.httpClient.get<any>(this.covidApiUrl).subscribe(resp => {
      this.covidDataArray = resp;
      this.monthlyData = this.covidDataArray.filter(function(value, index, Arr) {
        //every 30th day
        return index % 30 == 0;
      });
      this.monthlyData.splice(-2);
      this.calcDeathIncreases()
    })
  }

  calcDeathIncreases(){
    this.monthlyData.forEach(day => {
      this.deathIncreases.push(day.deathIncrease);
      //split each day & save in array
      this.dates.push(day.date);
    })
    //formatting dates to mm/dd
    this.dates.forEach((date:any) => {
        let year = date.toString().split("").splice(0,4).join('')
        let month = date.toString().split("").slice(4,6).join('');     
        this.graphDates.push(month + '/' + year);
      })
      this.graphDates.reverse();
  }

  lineChartData: ChartDataSets[] = [
    { data: this.deathIncreases, label: 'Covid Death Increase Rate' },
  ];

  lineChartLabels: Label[] = this.graphDates;

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType:any = 'line';

}


