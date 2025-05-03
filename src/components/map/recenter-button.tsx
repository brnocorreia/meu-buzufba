"use client";

import { useMap } from "react-leaflet";
import { LatLngExpression, LatLngTuple } from "leaflet";
import { Button } from "@/components/ui/button";
import { MapPinned } from "lucide-react";

interface RecenterButtonProps {
  center: LatLngExpression | LatLngTuple;
  zoom: number;
}

export const RecenterButton = ({ center, zoom }: RecenterButtonProps) => {
  const map = useMap();

  const handleClick = () => {
    map.setView(center, zoom);
  };

  return (
    <Button
      onClick={handleClick}
      variant="outline"
      size="icon"
      style={{
        position: "absolute",
        top: "90px",
        right: "10px",
        zIndex: 400,
        backgroundColor: "white",
        color: "black",
        border: "2px solid #ccc",
      }}
      aria-label="Recenter map"
    >
      <MapPinned size={16} />
    </Button>
  );
};
