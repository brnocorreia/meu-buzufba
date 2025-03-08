"use client";

import { Building, MapPin, Clock } from "lucide-react";
import BusSchedule from "@/components/bus-schedule";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Routes } from "@/@types/routes";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InfoPopover } from "../info-popover";

interface RouteDetailsPopupProps {
  route: Routes;
}

export default function RouteDetailsPopup({ route }: RouteDetailsPopupProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">Ver mais detalhes</Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col w-[100dvw] h-[100dvh] md:w-[40vw] md:h-[auto] md:max-w-[40vw] md:max-h-[auto] p-2 lg:p-4 overflow-y-auto justify-between">
        <div className="flex flex-col gap-y-4">
          <DialogHeader className="flex flex-row w-full text-2xl font-bold items-center justify-between space-x-2">
            <DialogTitle className="text-2xl font-bold">
              {route.name}
            </DialogTitle>
            <DialogDescription>
              <span className="text-zinc-500 text-start text-sm sm:text-sm text-pretty">
                {route.departureLocation} {"->"} {route.arrivalLocation}
              </span>
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col w-full justify-start items-center gap-y-2">
            <div className="flex flex-col w-full gap-2">
              <div className="flex flex-row items-center gap-x-2">
                <Building size={20} />
                <p className="text-black font-semibold text-base">
                  Locais atendidos
                </p>
              </div>
              <div className="flex flex-col w-full gap-2 p-2 border border-zinc-200 rounded-sm shadow-sm">
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-zinc-700 text-sm rounded-md p-1">
                  {route.servedLocations.map((location, index) => (
                    <div key={index} className="flex items-start text-black">
                      <span className="mr-2 text-black font-semibold">
                        {index + 1}.{" "}
                      </span>
                      {location}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <div className="flex flex-row items-center gap-x-2">
                <MapPin size={20} />
                <p className="text-black font-semibold text-base">
                  Pontos de parada
                </p>
              </div>
              <Tabs defaultValue="going" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="going">Ida</TabsTrigger>
                  <TabsTrigger value="back">Volta</TabsTrigger>
                </TabsList>
                <TabsContent value="going">
                  <div className="flex flex-wrap w-full gap-2 p-2 border border-zinc-200 rounded-sm shadow-sm">
                    {route.stops.departure.map((time, index) => (
                      <Badge
                        key={index}
                        className="bg-zinc-300 text-black hover:bg-zinc-100 cursor-default"
                      >
                        {time}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="back">
                  <div className="flex flex-wrap w-full gap-2 p-2 border border-zinc-200 rounded-sm shadow-sm">
                    {route.stops.arrival.map((time, index) => (
                      <Badge
                        key={index}
                        className="bg-zinc-300 text-black hover:bg-zinc-100 cursor-default"
                      >
                        {time}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            <div className="flex flex-col w-full gap-2">
              <div>
                <div className="flex flex-row items-center gap-x-2">
                  <Clock size={20} />
                  <p className="text-black font-semibold text-base">Saídas</p>
                  <InfoPopover />
                </div>
              </div>
              <div className="flex flex-wrap w-full gap-2 p-2 border border-zinc-200 rounded-sm shadow-sm">
                <BusSchedule departures={route.departures} />
              </div>
            </div>
          </div>
        </div>
        <DialogFooter className="w-full mt-auto">
          <DialogClose asChild>
            <Button type="button" variant="destructive">
              Fechar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
