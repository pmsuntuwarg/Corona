import { Component, OnInit } from "@angular/core";
import { DataService } from 'src/service/data.service';
import { CoronaSummary, Summary } from 'src/interfaces/summary';

@Component({
  selector: 'corona-total',
  templateUrl: './total.component.html'
})

export class CoronaTotalComponent implements OnInit {
  totalConfirmed: number = 0;
  totalDeath: number = 0;
  totalRecovered: number = 0;
  newRecovered: number = 0;
  newDeaths: number = 0;
  newConfirmed: number = 0;
  countryWiseList: Array<Summary>;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    if (!this.countryWiseList) {
      this.dataService.getSummary().subscribe((res) => {
        this.countryWiseList = res.Countries;
        this.totalConfirmed = res.Global.TotalConfirmed;
        this.totalDeath = res.Global.TotalDeaths;
        this.totalRecovered = res.Global.TotalRecovered;

        res.Countries.map((data) => {
          this.newDeaths = this.newDeaths + data.NewDeaths;
          this.newConfirmed = this.newConfirmed + data.NewConfirmed;
          this.newRecovered = this.newRecovered + data.NewRecovered;
        });
      });
    }
  }

}
