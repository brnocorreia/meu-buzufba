import EmptyPage from "@/components/empty-page";
import PageContent from "@/components/page/page-content";
import { getRouteById, getRouteIds } from "@/lib/routes-repository";
import { OctagonX } from "lucide-react";

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
    <PageContent>
      <EmptyPage
        title="Oops!"
        description={`Parece que a página da parada ${id} ainda não está pronta. Mas não se preocupe, estamos trabalhando para trazer a você a melhor experiência possível.`}
        redirectLink="/rotas"
        redirectText="Voltar para a página de rotas"
      />
    </PageContent>
  );
}
