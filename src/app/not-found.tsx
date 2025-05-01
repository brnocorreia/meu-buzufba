import EmptyPage from "@/components/empty-page";
import PageContent from "@/components/page/page-content";
import { getRouteById, getRouteIds } from "@/lib/routes-repository";
import { OctagonX } from "lucide-react";

export default async function NotFound() {
  return (
    <PageContent>
      <EmptyPage
        title="Oops!"
        description={
          "Aparentemente você tentou acessar uma página inexistente..."
        }
        redirectLink="/rotas"
        redirectText="Voltar para a página principal"
        icon={<OctagonX className="w-20 h-20 text-red-500" />}
      />
    </PageContent>
  );
}
