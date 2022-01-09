import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CityComponent } from './city.component';

describe('CityComponent', () => {
  let component: CityComponent;
  let fixture: ComponentFixture<CityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CityComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityComponent);
    component = fixture.componentInstance;
    component.city = {
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
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
