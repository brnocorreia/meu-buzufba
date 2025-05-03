import { LatLngExpression, LatLngTuple } from "leaflet";

export const mapDefaults: {
  zoom: number;
  minZoom: number;
  maxZoom: number;
  center: LatLngExpression | LatLngTuple;
} = {
  zoom: 15,
  minZoom: 2,
  maxZoom: 20,
  center: [-13.001785193441066, -38.50697896567024],
};
