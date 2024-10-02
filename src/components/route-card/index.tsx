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
import { useEffect, useState } from "react";
import { isAfter, set } from "date-fns";
import { Skeleton } from "../ui/skeleton";
import { Routes } from "@/@types/routes";

type CardProps = React.ComponentProps<typeof Card>;

interface RouteCardProps extends CardProps {
  data: Routes;
}

export function RouteCard({ className, data, ...props }: RouteCardProps) {
  const [remainingBusLefts, setRemainingBusLefts] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const filtrarHorarios = () => {
      setIsLoading(true);
      const now = new Date();

      const remainingBusLefts = data.departures.filter((horario) => {
        // Converte o horário string para um objeto Date
        const [horas, minutos] = horario.split("h").map(Number);
        const horarioDate = set(now, {
          hours: horas,
          minutes: minutos,
          seconds: 0,
        });

        // Compara se o horário é depois de now
        return isAfter(horarioDate, now);
      });

      setRemainingBusLefts(remainingBusLefts);
      setIsLoading(false);
    };

    filtrarHorarios();
    const intervalo = setInterval(filtrarHorarios, 60000);
    return () => clearInterval(intervalo);
  });

  return (
    <Card className={cn("w-[380px]", className)} {...props}>
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
            <div className="flex flex-wrap gap-2 h-[4rem] overflow-auto custom-scrollbar">
              {!isLoading ? (
                <>
                  {remainingBusLefts.length > 0 ? (
                    remainingBusLefts.map((time, index) => (
                      <Badge
                        key={index}
                        className="bg-zinc-300 text-black hover:bg-zinc-100 cursor-pointer"
                      >
                        {time}
                      </Badge>
                    ))
                  ) : (
                    <Badge className="bg-zinc-300 text-black hover:bg-zinc-100 cursor-pointer">
                      Sem saídas programadas para hoje
                    </Badge>
                  )}
                </>
              ) : (
                <>
                  <Skeleton className="h-[1.375rem] w-[5rem]" />
                </>
              )}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Ver mais detalhes</Button>
      </CardFooter>
    </Card>
  );
}
