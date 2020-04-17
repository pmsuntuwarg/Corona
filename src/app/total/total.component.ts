import { Component, OnInit } from "@angular/core";
import { DataService } from 'src/service/data.service';
import { CoronaSummary } from 'src/interfaces/summary';

@Component({
  selector: 'corona-total',
  templateUrl: './total.component.html'
})

export class CoronaTotalComponent implements OnInit {
  totalConfirmed: number = 0;
  totalDeath: number = 0;
  totalRecovered: number = 0;
  countryWiseList: CoronaSummary;
  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    if (!this.countryWiseList) {
      this.dataService.getSummary().subscribe((res) => {
        this.countryWiseList = res;
        for(const index in this.countryWiseList.Countries) {
          const country = this.countryWiseList.Countries[index];
          this.totalConfirmed = country['TotalConfirmed'] + this.totalConfirmed;
          this.totalDeath = country['TotalDeaths'] + this.totalDeath;
          this.totalRecovered = country['TotalRecovered'] + this.totalRecovered;
        }
      });
    }
  }

}
