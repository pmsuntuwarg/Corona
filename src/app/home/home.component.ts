import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/service/data.service';
import { Country } from 'src/interfaces/country';

@Component({
  selector: 'corona-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit{
  constructor(private dataService: DataService) {}

  ngOnInit() {
  }
}
