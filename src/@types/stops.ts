export interface Stops {
  slug: string;
  name: string;
  belongsToRoutes: string[];
  geolocation: {
    latitude: number;
    longitude: number;
  };
  securityRating: number;
  occupancyLevel: OccupancyLevelEnum;
  obs?: string;
}

export enum OccupancyLevelEnum {
  EMPTY = "empty",
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
}

export interface StopsWithFavorite extends Stops {
  isFavorite: boolean;
}
