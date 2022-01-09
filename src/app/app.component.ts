import { Component, OnInit } from '@angular/core';
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
  /**
   * An observable of an array of cities
   */
  cities$!: Observable<City[]>;

  constructor(private citiesService: CitiesService) {}

  /**
   * Fetch the list of cities
   */
  ngOnInit() {
    this.cities$ = this.citiesService.getCities();
  }
}
