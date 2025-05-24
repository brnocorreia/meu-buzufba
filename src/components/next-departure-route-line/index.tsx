import { Bus, PlaneLanding, PlaneTakeoff } from "lucide-react";
import { useMemo } from "react";
import { differenceInMinutes } from "date-fns";

interface INextDepartureRouteLine {
  routeName: string;
  departureLocation: string;
  arrivalLocation: string;
  departureTime: Date;
}

interface NextDepartureRouteLineProps {
  line: INextDepartureRouteLine;
}

export const NextDepartureRouteLine = ({
  line,
}: NextDepartureRouteLineProps) => {
  const { routeName, departureLocation, arrivalLocation, departureTime } = line;
  const timeUntilDeparture = useMemo(() => {
    const diff = differenceInMinutes(departureTime, new Date());

    const formattedTimeUntilDeparture = diff < 1 ? "< 1 min" : `${diff} min`;

    return formattedTimeUntilDeparture;
  }, [departureTime]);

  return (
    <div className="flex flex-row items-center gap-2 w-full bg-zinc-800 rounded-md px-3 py-1">
      <div className="flex flex-row items-center gap-2 w-full flex-1">
        <div className="flex flex-row items-center justify-center w-14 h-14 bg-zinc-600 rounded-md">
          <Bus size={28} className="text-zinc-300" />
        </div>
        <div className="flex flex-col items-start justify-start gap-1">
          <span className="text-sm font-bold text-zinc-300">{routeName}</span>
          <div className="flex flex-col items-start gap-1">
            <div className="flex flex-row items-center gap-2">
              <PlaneTakeoff size={14} className="text-zinc-500" />
              <span className="text-xs text-zinc-400">{departureLocation}</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <PlaneLanding size={14} className="text-zinc-500" />
              <span className="text-xs text-zinc-400">{arrivalLocation}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-1 flex-2">
        <span className="text-sm font-bold text-zinc-300">
          {timeUntilDeparture}
        </span>
      </div>
    </div>
  );
};

interface NextDepartureRouteLinesProps {
  lines: INextDepartureRouteLine[];
}

export const NextDepartureRouteLines = ({
  lines,
}: NextDepartureRouteLinesProps) => {
  return (
    <div className="flex flex-col w-full gap-2">
      {lines.map((line) => (
        <NextDepartureRouteLine key={line.routeName} line={line} />
      ))}
    </div>
  );
};
