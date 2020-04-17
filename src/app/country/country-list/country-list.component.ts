import { Component, OnInit } from "@angular/core";
import { DataService } from 'src/service/data.service';
import { Country } from 'src/interfaces/country';
import { Router } from '@angular/router';

@Component({
  selector: 'corona-country-list',
  templateUrl: './country-list.component.html'
})

export class CountryListComponent implements OnInit {
  countries: Country = null;
  summary: any;
  cols: any[];
  constructor(private dataService: DataService, private router: Router) {

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

  onRowSelect(data) {
    console.log(data);
    this.router.navigate(['countries', data.Slug]);
  }
}
