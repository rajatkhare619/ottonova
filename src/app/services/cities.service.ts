import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { City } from '../shared/City';

/**
 * The service to get cities data from the server
 */
@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  constructor(private http: HttpClient) {}

  /**
   * Get cities data from the server
   * @return an observable of array of cities
   */
  getCities(): Observable<City[]> {
    return this.http
      .get<{ cities: City[] }>('http://localhost:3000/cities')
      .pipe(map((response) => response.cities));
  }
}
