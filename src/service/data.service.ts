import { Inject, Injectable, Query, OnInit } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import {map} from 'rxjs/operators';
import { Country } from 'src/interfaces/country';
import { Observable } from 'rxjs/internal/Observable';
import { CoronaSummary } from 'src/interfaces/summary';
import { CoronaData } from 'src/interfaces/corona-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl: string = 'https://api.covid19api.com';
  countryList: Country;
  constructor( private http: HttpClient) {

  }

  getAll() {
    return this.http.get(`${this.baseUrl}/getAll`)
                      .pipe(map((response: Response) => response));
  }

  getCountries(): Observable<Country> {

    return this.http.get(`${this.baseUrl}/countries`)
              .pipe(map((response: Country) => {
                return response;
              }));
  }

  getSummary(): Observable<CoronaSummary> {
      return this.http.get(`${this.baseUrl}/summary`)
      .pipe(map((response) => response as CoronaSummary));
  }

  getCountryWiseData(slug: string) {
    return this.http.get(`${this.baseUrl}/country/${slug}`)
                      .pipe(map((response) => response));
  }
}
