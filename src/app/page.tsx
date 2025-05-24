import {
  NextDepartureRouteLine,
  NextDepartureRouteLines,
} from "@/components/next-departure-route-line";
import PublicContent from "@/components/shared/ui/public-content";

// Test data
const nextDepartureRouteLines = [
  {
    routeName: "Rota B1",
    departureLocation: "Estacionamento - IME/PAF1",
    arrivalLocation: "São Lázaro",
    departureTime: new Date(new Date().getTime() + 15 * 60 * 1000),
  },
  {
    routeName: "Rota B4",
    departureLocation: "Facom",
    arrivalLocation: "Reitoria",
    departureTime: new Date(new Date().getTime() + 20 * 60 * 1000),
  },
  {
    routeName: "Rota B5",
    departureLocation: "São Lázaro",
    arrivalLocation: "Canela",
    departureTime: new Date(new Date().getTime() + 25 * 60 * 1000),
  },
];

export default function Home() {
  return (
    <PublicContent hideFooter>
      <div className="flex flex-col h-full w-full gap-3 items-start justify-start">
        <span className="text-xl font-bold text-zinc-300">Próximas saídas</span>
        <NextDepartureRouteLines lines={nextDepartureRouteLines} />
      </div>
    </PublicContent>
  );
}
