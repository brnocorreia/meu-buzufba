import { OccupancyLevelEnum, Stops } from "@/@types/stops";

export const stopsData: Stops[] = [
  {
    slug: "ondina-paf1",
    name: "Ondina/PAF1",
    belongsToRoutes: ["EXPRESSO", "B1", "B2", "B3", "B4", "B5"],
    geolocation: {
      latitude: -13.001758066877045,
      longitude: -38.50698345276578,
    },
    securityRating: 5,
    occupancyLevel: OccupancyLevelEnum.HIGH,
  },
  {
    slug: "portaria-principal",
    name: "Portaria Principal",
    belongsToRoutes: ["EXPRESSO", "B1", "B2", "B3", "B4", "B5"],
    geolocation: {
      latitude: -13.006004996065812,
      longitude: -38.509528302560625,
    },
    securityRating: 5,
    occupancyLevel: OccupancyLevelEnum.LOW,
  },
];
