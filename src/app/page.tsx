import EmptyPage from "@/components/empty-page";
import PageContent from "@/components/page/page-content";
import { OctagonX } from "lucide-react";

export default function Home() {
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
