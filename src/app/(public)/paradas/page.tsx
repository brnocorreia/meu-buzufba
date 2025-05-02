import EmptyPage from "@/components/empty-page";
import PublicContent from "@/components/shared/ui/public-content";

export default function Stops() {
  return (
    <PublicContent hideFooter>
      <EmptyPage
        title="Oops!"
        description="Parece que essa funcionalidade ainda não está pronta. Mas não se preocupe, estamos trabalhando para trazer a você a melhor experiência possível."
        redirectLink="/rotas"
        redirectText="Voltar para a página de rotas"
      />
    </PublicContent>
  );
}
