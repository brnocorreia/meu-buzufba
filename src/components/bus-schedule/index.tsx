"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  getDepartureStatus,
  getRemainingBusLeftsWithDepartureStatus,
} from "@/lib/schedules";
import { DepartureStatusEnum } from "@/@types/routes";

interface BusScheduleProps {
  departures: string[];
  enableSlice?: boolean;
}

const getBadgeClassName = (status: DepartureStatusEnum) => {
  switch (status) {
    case DepartureStatusEnum.PAST:
      return "bg-red-500 text-white hover:bg-red-400 cursor-default mr-2 mb-2";
    case DepartureStatusEnum.NEXT:
      return "bg-yellow-500 text-black hover:bg-yellow-400 cursor-default mr-2 mb-2";
    case DepartureStatusEnum.UPCOMING:
      return "bg-green-500 text-white hover:bg-green-400 cursor-default mr-2 mb-2";
    default:
      return "bg-zinc-300 text-black hover:bg-zinc-100 cursor-default mr-2 mb-2";
  }
};

const BusSchedule = ({ departures, enableSlice }: BusScheduleProps) => {
  const departureStatus = getDepartureStatus(departures);
  const remainingBusLefts = getRemainingBusLeftsWithDepartureStatus(departures);

  return (
    <div>
      {enableSlice ? (
        <>
          {remainingBusLefts.length > 0 ? (
            remainingBusLefts.slice(0, 5).map((status, index) => (
              <Badge key={index} className={getBadgeClassName(status.status)}>
                {status.departure}
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
          {departureStatus.map((status, index) => (
            <Badge key={index} className={getBadgeClassName(status.status)}>
              {status.departure}
            </Badge>
          ))}
        </>
      )}
    </div>
  );
};

export default BusSchedule;
