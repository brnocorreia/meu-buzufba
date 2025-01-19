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

export interface RoutesWithFavorite extends Routes {
  isFavorite: boolean;
}

export enum DepartureStatusEnum {
  UPCOMING = "upcoming",
  NEXT = "next",
  PAST = "past",
}

export interface DepartureStatus {
  departure: string;
  status: DepartureStatusEnum;
}
