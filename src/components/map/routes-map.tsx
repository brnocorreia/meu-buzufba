"use client";

import dynamic from "next/dynamic";
// import { Marker, Popup } from "react-leaflet";

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

export default function RoutesMap() {
  return (
    <>
      <Map>
        <Marker position={[-13.001785193441066, -38.50697896567024]}>
          <Popup>Hey ! I study here</Popup>
        </Marker>
      </Map>
    </>
  );
}
