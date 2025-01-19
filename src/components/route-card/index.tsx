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
import { Routes } from "@/@types/routes";
import BusSchedule from "@/components/bus-schedule";
import RouteDetailsPopup from "@/components/route-details-popup";

type CardProps = React.ComponentProps<typeof Card>;

interface RouteCardProps extends CardProps {
  data: Routes;
}

export function RouteCard({ className, data, ...props }: RouteCardProps) {
  return (
    <Card className={cn("w-full", className)} {...props}>
      <CardHeader className="p-4">
        <CardTitle className="text-2xl">{data.name}</CardTitle>
        <CardDescription>
          {data.departureLocation} {"->"} {data.arrivalLocation}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 px-4 pb-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <div className="flex flex-col items-start gap-y-1 w-full h-[6.5rem] overflow-auto">
            <p className="text-black font-semibold text-sm">Locais atendidos</p>
            <p className="text-zinc-500 text-start text-sm text-pretty">
              {data.servedLocations.join(", ")}
            </p>
          </div>
        </div>
        <div className="flex items-start rounded-md border px-4 py-2">
          <div className="flex flex-col items-start gap-y-2 w-full">
            <p className="text-black font-semibold text-sm">Próximas saídas</p>
            <div className="flex flex-wrap gap-2">
              <BusSchedule departures={data.departures} enableSlice={true} />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <RouteDetailsPopup routes={data} />
      </CardFooter>
    </Card>
  );
}
