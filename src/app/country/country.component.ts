import { Component, OnInit } from "@angular/core";
import { DataService } from 'src/service/data.service';
import { Country } from 'src/interfaces/country';

@Component({
  selector: 'corona-country',
  templateUrl: './country.component.html'
})

export class CountryComponent implements OnInit {
  countries: Country = null;
  summary: any;
  cols: any[];
  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    if (!this.summary) {
      this.dataService.getSummary().subscribe((res) => this.summary = res.Countries);
    }


    this.cols = [
      { field: 'Country', header: 'Country' },
      { field: 'TotalConfirmed', header: 'TotalConfirmed' },
      { field: 'TotalDeaths', header: 'TotalDeaths' },
      { field: 'TotalRecovered', header: 'TotalRecovered' }
    ];
  }

}
