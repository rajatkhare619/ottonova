import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {City} from "../shared/City";

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: HttpClient) { }

  getCities(): Observable<City[]> {
  return this.http.get<{cities: City[] }>('http://localhost:3000/cities').pipe(map(response => response.cities));
  }
}
