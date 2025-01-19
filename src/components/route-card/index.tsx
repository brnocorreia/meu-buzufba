"use client";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RoutesWithFavorite } from "@/@types/routes";
import BusSchedule from "@/components/bus-schedule";
import RouteDetailsPopup from "@/components/route-details-popup";
import { useAtom } from "jotai";
import { favoriteRoutesAtom } from "@/atoms/favorite-routes";
import FavoriteIcon from "@/components/favorite-icon";
import { InfoPopover } from "../info-popover";

type CardProps = React.ComponentProps<typeof Card>;

interface RouteCardProps extends CardProps {
  route: RoutesWithFavorite;
}

export function RouteCard({ className, route, ...props }: RouteCardProps) {
  const [favoriteRoutes, setFavoriteRoutes] = useAtom(favoriteRoutesAtom);

  const handleFavorite = () => {
    if (favoriteRoutes.includes(route.id)) {
      setFavoriteRoutes((prev) => prev.filter((id) => id !== route.id));
      return;
    }
    setFavoriteRoutes((prev) => [...prev, route.id]);
  };

  return (
    <Card className={cn("w-full", className)} {...props}>
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl">{route.name}</CardTitle>
          <FavoriteIcon
            isFavorite={route.isFavorite}
            handleFavorite={handleFavorite}
          />
        </div>
        <CardDescription>
          {route.departureLocation} {"->"} {route.arrivalLocation}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 px-4 pb-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <div className="flex flex-col items-start gap-y-1 w-full h-[6.5rem] overflow-auto">
            <p className="text-black font-semibold text-sm">Locais atendidos</p>
            <p className="text-zinc-500 text-start text-sm text-pretty">
              {route.servedLocations.join(", ")}
            </p>
          </div>
        </div>
        <div className="flex items-start rounded-md border px-4 py-2">
          <div className="flex flex-col items-start gap-y-2 w-full">
            <div className="flex flex-row items-center gap-x-1 w-full">
              <p className="text-black font-semibold text-sm">
                Próximas saídas
              </p>
              <InfoPopover side="top" />
            </div>
            <div className="flex flex-wrap gap-2">
              <BusSchedule departures={route.departures} enableSlice={true} />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <RouteDetailsPopup route={route} />
      </CardFooter>
    </Card>
  );
}
