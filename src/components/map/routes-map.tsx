"use client";

import { geojsonTest } from "@/constants/geojson";
import dynamic from "next/dynamic";

const Map = dynamic(
  () => import("@/components/map").then((component) => component.Map),
  { ssr: false }
);

const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

const GeoJSON = dynamic(
  () => import("react-leaflet").then((mod) => mod.GeoJSON),
  {
    ssr: false,
  }
);

export default function RoutesMap() {
  return (
    <>
      <Map>
        <GeoJSON data={geojsonTest} />
      </Map>
    </>
  );
}
