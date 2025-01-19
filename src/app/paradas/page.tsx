import EmptyPage from "@/components/empty-page";
import PageContent from "@/components/page/page-content";

export default function Paradas() {
  return (
    <PageContent>
      <EmptyPage
        title="Oops!"
        description="Parece que essa funcionalidade ainda não está pronta. Mas não se preocupe, estamos trabalhando para trazer a você a melhor experiência possível."
        redirectLink="/rotas"
        redirectText="Voltar para a página de rotas"
      />
    </PageContent>
  );
}
