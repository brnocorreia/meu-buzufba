import PublicContent from "@/components/shared/ui/public-content";
import { getRouteById, getRouteIds } from "@/lib/routes-repository";
import {
  OctagonX,
  Building,
  MapPin,
  Clock,
  ShieldAlert,
  Map,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import BusSchedule from "@/components/bus-schedule";
import EmptyPage from "@/components/empty-page";
import { InfoPopover } from "@/components/info-popover";
import RoutesMap from "@/components/map/routes-map";

export async function generateStaticParams() {
  return getRouteIds().map((id) => ({ id }));
}

export default async function Route({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const route = getRouteById(id);

  if (!route) {
    return (
      <PublicContent hideFooter>
        <EmptyPage
          title="Oops!"
          description={
            "Aparentemente você tentou acessar uma rota inexistente..."
          }
          redirectLink="/rotas"
          redirectText="Voltar para a página de rotas"
          icon={<OctagonX className="w-20 h-20 text-red-500" />}
        />
      </PublicContent>
    );
  }

  return (
    <PublicContent hideFooter>
      <div className="flex flex-col w-full max-w-full pt-2">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-3 gap-y-2">
          <div>
            <h1 className="text-2xl font-bold text-white">{route.name}</h1>
            <span className="text-zinc-200 text-start text-sm sm:text-base text-pretty">
              {route.departureLocation} {"->"} {route.arrivalLocation}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
          <div className="flex flex-col w-full gap-2">
            <div className="flex flex-row items-center gap-x-2 text-white">
              <Building size={20} />
              <span className="font-semibold text-base">Locais atendidos</span>
            </div>
            <div className="flex flex-col w-full gap-2 p-4 border border-zinc-200 rounded-md shadow-sm h-full bg-white">
              <div className="flex flex-col md:flex-row gap-2 text-zinc-700 text-sm">
                <div className="flex-1 flex flex-col gap-y-2">
                  {route.servedLocations
                    .slice(0, Math.ceil(route.servedLocations.length / 2))
                    .map((location, index) => (
                      <div key={index} className="flex items-start text-black">
                        <span className="mr-2 text-black font-semibold">
                          {index + 1}.{" "}
                        </span>
                        {location}
                      </div>
                    ))}
                </div>
                <div className="flex-1 flex flex-col gap-y-2">
                  {route.servedLocations
                    .slice(Math.ceil(route.servedLocations.length / 2))
                    .map((location, index) => (
                      <div
                        key={
                          index + Math.ceil(route.servedLocations.length / 2)
                        }
                        className="flex items-start text-black"
                      >
                        <span className="mr-2 text-black font-semibold">
                          {index +
                            Math.ceil(route.servedLocations.length / 2) +
                            1}
                          .{" "}
                        </span>
                        {location}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full rounded-lg md:hidden">
            <div className="flex flex-row items-center gap-x-2 text-white mb-2">
              <Map size={20} />
              <span className="font-semibold text-base">Mapa</span>
            </div>
            <div className="w-full h-96 rounded-lg overflow-hidden">
              <RoutesMap />
            </div>
          </div>

          <div className="flex flex-col w-full gap-2">
            <div className="flex flex-row items-center gap-x-2 text-white">
              <MapPin size={20} />
              <span className="font-semibold text-base">Pontos de parada</span>
            </div>
            <div className="border border-zinc-200 rounded-md shadow-sm p-4 h-full bg-white">
              <Tabs defaultValue="going" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="going">Ida</TabsTrigger>
                  <TabsTrigger value="back">Volta</TabsTrigger>
                </TabsList>
                <TabsContent value="going" className="mt-0">
                  <div className="flex flex-wrap w-full gap-2">
                    {route.stops.departure.map((time, index) => (
                      <Badge
                        key={index}
                        className="bg-zinc-900 text-white hover:bg-zinc-700 cursor-default"
                      >
                        {time}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="back" className="mt-0">
                  <div className="flex flex-wrap w-full gap-2">
                    {route.stops.arrival.map((time, index) => (
                      <Badge
                        key={index}
                        className="bg-zinc-900 text-white hover:bg-zinc-700 cursor-default"
                      >
                        {time}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="flex flex-col w-full gap-2">
            <div className="flex flex-row items-center gap-x-2 text-white">
              <Clock size={20} />
              <div className="flex flex-row items-center">
                <span className="font-semibold text-base">Saídas</span>
                <InfoPopover />
              </div>
            </div>
            <div className="flex flex-col w-full p-4 border border-zinc-200 rounded-md shadow-sm h-full bg-white">
              <div className="flex flex-wrap gap-2">
                <BusSchedule departures={route.departures} />
              </div>
            </div>
          </div>

          {route.obs && (
            <div className="flex flex-col w-full gap-2">
              <div className="flex flex-row items-center gap-x-2 text-white">
                <ShieldAlert size={20} />
                <span className="font-semibold text-base">Observações</span>
              </div>
              <div className="text-sm p-4 border border-zinc-200 rounded-md shadow-sm h-full bg-white">
                {route.obs}
              </div>
            </div>
          )}
        </div>
      </div>
    </PublicContent>
  );
}
