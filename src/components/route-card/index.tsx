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

type CardProps = React.ComponentProps<typeof Card>;

const horarios = ["16h30", "18h30", "19h30", "22h30"];

export function RouteCard({ className, ...props }: CardProps) {
  const [remainingBusLefts, setRemainingBusLefts] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const filtrarHorarios = () => {
      setIsLoading(true);
      const now = new Date();

      const remainingBusLefts = horarios.filter((horario) => {
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

    // Opcional: atualizar a cada minuto
    const intervalo = setInterval(filtrarHorarios, 60000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle className="text-2xl">Rota Expresso</CardTitle>
        <CardDescription>Ondina/PAF1 {"->"} Circular</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <div className="flex flex-col items-start gap-y-1">
            <p className="text-black font-semibold text-sm">Locais atendidos</p>
            <p className="text-zinc-500 text-start text-sm">
              Ondina, Centro de Esportes, Canela, Belas Artes, Economia,
              Reitoria, Creche, Politécnica, Arquitetura
            </p>
          </div>
        </div>
        <div className="flex items-start rounded-md border p-4">
          <div className="flex flex-col items-start gap-y-2 w-full">
            <p className="text-black font-semibold text-sm">Próximas saídas</p>
            <div className="flex flex-wrap gap-2">
              {!isLoading ? (
                <>
                  {remainingBusLefts.map((time, index) => (
                    <Badge
                      key={index}
                      className="bg-zinc-300 text-black hover:bg-zinc-100 cursor-pointer"
                    >
                      {time}
                    </Badge>
                  ))}
                </>
              ) : (
                <>
                  {[1, 2, 3, 4].map((_, index) => (
                    <Skeleton key={index} className="h-[1.375rem] w-12" />
                  ))}
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
