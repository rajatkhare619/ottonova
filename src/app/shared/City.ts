/**
 * An interface describing the city object
 */
export interface City {
  name: string;
  name_native: string;
  country: string;
  continent: string;
  latitude: number;
  longitude: number;
  population: number;
  founded: number;
  landmarks: string[];
  image: string;
}
