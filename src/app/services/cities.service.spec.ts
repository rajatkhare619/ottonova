import { TestBed } from '@angular/core/testing';
import { CitiesService } from './cities.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { City } from '../shared/City';

describe('CitiesService', () => {
  let service: CitiesService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CitiesService);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch the cities', () => {
    const cities = [{ name: 'Sydney', country: 'Australia' }] as City[];
    const serviceResponse = {
      cities,
    };
    service.getCities().subscribe((data) => {
      expect(data).toEqual(cities);
    });
    const req = httpMock.expectOne('/cities');
    expect(req.request.method).toBe('GET');
    req.flush(serviceResponse);
    httpMock.verify();
  });
});
