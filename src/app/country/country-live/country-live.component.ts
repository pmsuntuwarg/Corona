import { Component, OnInit } from "@angular/core";
import { DataService } from 'src/service/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CoronaData } from 'src/interfaces/corona-data';

@Component({
  selector: "country-live",
  templateUrl: './country-live.component.html'
})

export class CountryLiveComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  coronaDataList: Array<CoronaData>;
  latestData: CoronaData;
  pieChartData: any;
  lineGraphData: any;
  deathGraphData: any;
  recoveredGraphData: any;
  activeGraphData: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.countryWiseData(params.get('slug'));
    });
  }

  goBack() {
    this.router.navigate(['countries']);
  }

  countryWiseData(slug: string) {
    this.dataService.getCountryWiseData(slug)
    .subscribe(data => {
      this.coronaDataList = (data as Array<CoronaData>).filter((d) => d.Active = d.Confirmed - d.Deaths - d.Recovered);
      let total = this.coronaDataList.length;
      // this.coronaDataList.sort(
      //   (a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime()
      // );
      this.latestData = this.coronaDataList[total - 1];
      this.pieChartDataPrepare(this.latestData);
      this.graphPrepare();
    });
  }

  pieChartDataPrepare(coronaData: CoronaData) {
    this.pieChartData = {
      labels: ['Active', 'Death', 'Recovered'],
      datasets: [
          {
              data: [coronaData.Active, coronaData.Deaths, coronaData.Recovered],
              backgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                  '#FFCE56'
              ],
              hoverBackgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                  '#FFCE56'
              ],
              yAxisId: 'y-axis'
          }]
      };
  }

  graphPrepare() {
    const label: any[] = [];
    const active: any[] = [];
    const deaths: any[] = [];
    const recovered: any[] = [];
    this.coronaDataList.forEach((d, index) => {
        active.push(d.Active);
        deaths.push(d.Deaths);
        label.push((new Date(d.Date).toDateString()));
        recovered.push(d.Recovered);
    });

    // this.lineGraphData = {
    //   labels: label,
    //   datasets: [
    //       {
    //           label: 'Active',
    //           data: active,
    //           fill: false,
    //           borderColor: '#4bc0c0'
    //       },
    //       {
    //           label: 'Deaths',
    //           data: deaths,
    //           fill: false,
    //           borderColor: '#565656'
    //       },
    //       {
    //         label: 'Recovered',
    //         data: recovered,
    //         fill: false,
    //         borderColor: '#765656'
    //     }
    //   ]
    // };

    this.deathGraphData = {
      labels: label,
      datasets: [
        {
            label: 'Death',
            backgroundColor: '#b52121',
            borderColor: '#1E88E5',
            data: deaths
        }
      ]
    };

    this.recoveredGraphData = {
      labels: label,
      datasets: [
        {
            label: 'Recovered',
            backgroundColor: '#21b53f',
            borderColor: '#1E88E5',
            data: recovered
        }
      ]
    };

    this.activeGraphData = {
      labels: label,
      datasets: [
        {
            label: 'Active',
            backgroundColor: '#42A5F5',
            borderColor: '#1E88E5',
            data: active
        }
      ]
    };
  }

  prepareGraphOptions(graphTitle) {
    return {
      title: {
        display: true,
        text: graphTitle,
        fontSize: 16
      },
      scales: {
        xAxes: [{
          type: 'time',
          time: {
              unit: 'month'
          }
        }],
        yAxes: [{
          id: 'y-axis',
          type: 'linear',
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };
  }
}
