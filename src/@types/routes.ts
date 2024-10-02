export interface Routes {
  id: string;
  name: string;
  tripLength: number;
  departures: string[];
  departureLocation: string;
  arrivalLocation: string;
  servedLocations: string[];
  stops: {
    departure: string[];
    arrival: string[];
  };
  obs?: string;
}
