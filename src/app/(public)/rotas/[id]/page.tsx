import DetailsHeader from "@/components/details-header";
import EmptyPage from "@/components/empty-page";
import PageContent from "@/components/page/page-content";
import { getRouteById, getRouteIds } from "@/lib/routes-repository";
import { OctagonX, ChevronLeft, MapPinHouse } from "lucide-react";

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
      <PageContent>
        <EmptyPage
          title="Oops!"
          description={
            "Aparentemente você tentou acessar uma rota inexistente..."
          }
          redirectLink="/rotas"
          redirectText="Voltar para a página de rotas"
          icon={<OctagonX className="w-20 h-20 text-red-500" />}
        />
      </PageContent>
    );
  }

  return (
    <div className="flex flex-col min-h-screen min-w-screen w-full h-full bg-pattern bg-no-repeat bg-center bg-zinc-800 text-white pt-4">
      <DetailsHeader routeName={route.name} />
      <div className="flex flex-row w-full items-start px-2 py-2">
        <div className="flex flex-col rounded-xl border border-zinc-700 bg-zinc-100 text-black">
          <div className="flex flex-col items-start gap-1">
            <div className="flex flex-row border-b border-black items-center gap-x-2 p-1">
              <MapPinHouse size={16} />
              <span className="text-md font-semibold">Partida</span>
            </div>

            <span className="text-lg font-semibold">
              {route.arrivalLocation}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
