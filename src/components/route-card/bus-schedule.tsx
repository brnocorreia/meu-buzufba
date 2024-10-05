import React from "react";
import { set, isAfter } from "date-fns";
import { Badge } from "@/components/ui/badge";

interface BusScheduleProps {
  departures: string[];
  enableSlice?: boolean;
}

const BusSchedule = ({ departures, enableSlice }: BusScheduleProps) => {
  const now = new Date();

  const remainingBusLefts = departures.filter((horario) => {
    const [horas, minutos] = horario.split("h").map(Number);
    const horarioDate = set(now, {
      hours: horas,
      minutes: minutos,
      seconds: 0,
    });

    return isAfter(horarioDate, now);
  });

  return (
    <div>
      {enableSlice ? (
        <>
          {remainingBusLefts.length > 0 ? (
            remainingBusLefts.slice(0, 5).map((time, index) => (
              <Badge
                key={index}
                className="bg-zinc-300 text-black hover:bg-zinc-100 cursor-default mr-2 mb-2"
              >
                {time}
              </Badge>
            ))
          ) : (
            <Badge className="bg-zinc-300 text-black hover:bg-zinc-100 cursor-default">
              Sem saídas programadas para hoje
            </Badge>
          )}
        </>
      ) : (
        <>
          {departures.map((time, index) => (
            <Badge
              key={index}
              className="bg-zinc-300 text-black hover:bg-zinc-100 cursor-default mr-2 mb-2"
            >
              {time}
            </Badge>
          ))}
        </>
      )}
    </div>
  );
};

export default BusSchedule;
