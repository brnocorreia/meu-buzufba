"use client";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import { LatLngExpression, LatLngTuple } from "leaflet";
import { RecenterButton } from "./recenter-button";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { mapDefaults } from "@/constants/map-defaults";

interface MapProps {
  children?: React.ReactNode;
  center?: LatLngExpression | LatLngTuple;
  zoom?: number;
}

export const Map = (props: MapProps) => {
  const {
    zoom = mapDefaults.zoom,
    center = mapDefaults.center,
    children,
  } = props;
  return (
    <MapContainer
      zoom={zoom}
      minZoom={mapDefaults.minZoom}
      maxZoom={mapDefaults.maxZoom}
      center={center}
      zoomControl={false}
      attributionControl={false}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%", zIndex: 3 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      {children}
      <ZoomControl position="topright" />
      <RecenterButton center={center} zoom={zoom} />
    </MapContainer>
  );
};
