import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CitiesService } from './services/cities.service';
import { of } from 'rxjs';
import { City } from './shared/City';
import { CityComponent } from './city/city.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let citiesService: CitiesService;
  const cities: City[] = [
    {
      name: 'Munich',
      name_native: 'München',
      country: 'Germany',
      continent: 'Europe',
      latitude: 48.137154,
      longitude: 11.576124,
      population: 1472000,
      founded: 1158,
      landmarks: ['Bavaria statue', 'Marienplatz', 'ottonova office'],
      image: 'image.jpg',
    },
  ];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AppComponent, CityComponent],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    citiesService = TestBed.inject(CitiesService);
    spyOn(citiesService, 'getCities').and.returnValue(of(cities));
    fixture.detectChanges();
  });
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should fetch the cities list', () => {
    component.cities$.subscribe((cities) => {
      expect(cities).toEqual(cities);
    });
  });
});
