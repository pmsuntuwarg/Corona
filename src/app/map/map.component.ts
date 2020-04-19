import { Component, OnInit } from "@angular/core";
import { Summary } from 'src/interfaces/summary';

@Component({
  selector: 'corona-map',
  templateUrl: './map.component.html'
})

export class MapComponent implements OnInit {
  summary: Summary;
  options: any;
  overlays: any[];

  constructor() {
  }

  ngOnInit(): void {
    this.options = {
      center: {lat: 36.890257, lng: 30.707417},
      zoom: 12
  };
  }
}
