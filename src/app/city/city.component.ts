import { Component, Input } from '@angular/core';
import { City } from '../shared/City';

/**
 * Component to encapsulate city details
 */
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent {
  @Input() city!: City;
  constructor() {}
}
