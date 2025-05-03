"use client";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  ZoomControl,
} from "react-leaflet";
import { icon, LatLngExpression, LatLngTuple, Map as MapType } from "leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

interface MapProps {
  children?: React.ReactNode;
  center?: LatLngExpression | LatLngTuple;
  zoom?: number;
}

const mapDefaults: {
  zoom: number;
  minZoom: number;
  center: LatLngExpression | LatLngTuple;
} = {
  zoom: 13,
  minZoom: 5,
  center: [-13.001785193441066, -38.50697896567024],
};

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
      center={center}
      zoomControl={false}
      attributionControl={false}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center} draggable={false}>
        <Popup>Hey ! I study here</Popup>
      </Marker>
      {children}
      <ZoomControl position="topright" />
    </MapContainer>
  );
};
