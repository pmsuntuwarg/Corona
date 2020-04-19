import { Inject, Injectable, Query, OnInit } from "@angular/core";
import { Country } from 'src/interfaces/country';
import { Observable } from 'rxjs/internal/Observable';
import { CoronaSummary } from 'src/interfaces/summary';
import { DataService } from './data.service';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {
  countryList: Country;
  summary: CoronaSummary;
  countryWiseSummary: Subject<any>;
  constructor( private dataService: DataService) {
  }

  getAll() {
    if (this.countryWiseSummary !== undefined) {
      return this.countryWiseSummary.asObservable();
    }

    return (this.dataService.getSummary().subscribe((res) => this.countryWiseSummary.next({coronaSummary: res})));

  }

  getCountries(): Observable<Country> {

    return this.dataService.getCountries();
  }

  getSummary() {
    return this.dataService.getSummary();
  }

  getCountryWiseData(slug: string) {
    return this.dataService.getCountryWiseData(slug);
  }
}
