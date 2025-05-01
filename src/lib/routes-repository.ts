import { Routes } from "@/@types/routes";
import { routesData } from "@/constants/routes-data";

export type RoutesRecord = Record<string, Routes>;

const routesRecord: RoutesRecord = routesData.reduce((acc, route) => {
  acc[route.id] = route;
  return acc;
}, {} as RoutesRecord);

export const getRouteById = (id: string): Routes | undefined => {
  return routesRecord[id.toUpperCase()];
};

export const getAllRoutes = (): Routes[] => {
  return Object.values(routesRecord);
};

export const getRouteIds = (): string[] => {
  return Object.keys(routesRecord);
};
