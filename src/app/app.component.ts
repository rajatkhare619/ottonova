import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CitiesService } from './services/cities.service';
import { Observable } from 'rxjs';
import { City } from './shared/City';

/**
 * The root component to get the cities from the service
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  cities$!: Observable<City[]>;

  constructor(private citiesService: CitiesService) {}

  ngOnInit() {
    this.cities$ = this.citiesService.getCities();
  }
}
