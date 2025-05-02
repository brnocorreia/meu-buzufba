import EmptyPage from "@/components/empty-page";
import PublicContent from "@/components/shared/ui/public-content";
import { OctagonX } from "lucide-react";

export default async function NotFound() {
  return (
    <PublicContent hideFooter>
      <EmptyPage
        title="Oops!"
        description={
          "Aparentemente você tentou acessar uma página inexistente..."
        }
        redirectLink="/rotas"
        redirectText="Voltar para a página principal"
        icon={<OctagonX className="w-20 h-20 text-red-500" />}
      />
    </PublicContent>
  );
}
