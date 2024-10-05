"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Routes } from "@/@types/routes";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { MapPin, Building, Clock } from "lucide-react";
import { DialogDescription } from "@radix-ui/react-dialog";
import BusSchedule from "./bus-schedule";

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
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full">Ver mais detalhes</Button>
          </DialogTrigger>
          <DialogContent className="flex flex-col w-screen h-screen md:w-[30vw] md:h-[auto] md:max-w-[30vw] md:max-h-[auto] py-0 overflow-y-auto">
            <DialogHeader className="flex flex-col w-full text-2xl font-bold items-start space-y-0">
              <DialogTitle className="text-2xl font-bold">
                {data.name}
              </DialogTitle>
              <DialogDescription>
                <p className="text-zinc-500 text-start text-base text-pretty">
                  {data.departureLocation} {"->"} {data.arrivalLocation}
                </p>
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col w-full justify-start items-center gap-y-2">
              <div className="flex flex-col w-full gap-2">
                <div className="flex flex-row items-center gap-x-2">
                  <Building />
                  <p className="text-black font-semibold text-base">
                    Locais atendidos
                  </p>
                </div>
                <div className="flex flex-col w-full gap-2 p-2 border border-zinc-200 rounded-sm shadow-sm">
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-zinc-700 text-sm rounded-md p-1">
                    {data.servedLocations.map((location, index) => (
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
                  <MapPin />
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
                      {data.stops.departure.map((time, index) => (
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
                      {data.stops.arrival.map((time, index) => (
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
                <div className="flex flex-row items-center gap-x-2">
                  <Clock />
                  <p className="text-black font-semibold text-base">Saídas</p>
                </div>
                <div className="flex flex-wrap w-full gap-2 p-2 border border-zinc-200 rounded-sm shadow-sm">
                  <BusSchedule departures={data.departures} />
                </div>
              </div>
            </div>
            <DialogFooter className="w-full">
              <DialogClose asChild>
                <Button type="button" variant="destructive">
                  Fechar
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
