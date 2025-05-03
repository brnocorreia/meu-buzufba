import { LatLngExpression, LatLngTuple } from "leaflet";

export const mapDefaults: {
  zoom: number;
  minZoom: number;
  maxZoom: number;
  center: LatLngExpression | LatLngTuple;
} = {
  zoom: 15,
  minZoom: 20,
  maxZoom: 2,
  center: [-13.001785193441066, -38.50697896567024],
};
