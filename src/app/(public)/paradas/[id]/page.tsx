import EmptyPage from "@/components/empty-page";
import PublicContent from "@/components/shared/ui/public-content";

export default async function Stop({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <PublicContent>
      <EmptyPage
        title="Oops!"
        description={`Parece que a página da parada ${id} ainda não está pronta. Mas não se preocupe, estamos trabalhando para trazer a você a melhor experiência possível.`}
        redirectLink="/paradas"
        redirectText="Voltar para a página de paradas"
      />
    </PublicContent>
  );
}
