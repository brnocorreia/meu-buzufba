import { DepartureStatus, DepartureStatusEnum } from "@/@types/routes";
import { isAfter, set, differenceInMinutes } from "date-fns";

export const getRemainingBusLeftsWithDepartureStatus = (
  departures: string[]
) => {
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

  return getDepartureStatus(remainingBusLefts);
};

export const getDepartureStatus = (departures: string[]): DepartureStatus[] => {
  const now = new Date();
  let foundNext = false;

  const departuresStatus = departures.map((departure) => {
    const [horas, minutos] = departure.split("h").map(Number);
    const horarioDate = set(now, {
      hours: horas,
      minutes: minutos,
      seconds: 0,
    });

    const isUpcoming = isAfter(horarioDate, now);
    const minutesUntilDeparture = differenceInMinutes(horarioDate, now);

    if (isUpcoming && !foundNext && minutesUntilDeparture <= 20) {
      foundNext = true;
      return {
        departure,
        status: DepartureStatusEnum.NEXT,
      };
    }

    return {
      departure,
      status: isUpcoming
        ? DepartureStatusEnum.UPCOMING
        : DepartureStatusEnum.PAST,
    };
  });

  return departuresStatus;
};
