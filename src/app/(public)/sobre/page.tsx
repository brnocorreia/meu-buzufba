import PublicContent from "@/components/shared/ui/public-content";
import Image from "next/image";
import { Check, Clock, Target, ListChecks, Users } from "lucide-react";

const features = [
  { name: "Visualizar rotas", done: true },
  { name: "Visualizar paradas", done: false },
  { name: "Visualizar horários", done: true },
  { name: "Favoritar linhas", done: true },
  { name: "Acompanhamento de atualizações e ocorrências", done: false },
  { name: "Visualizar mapas", done: false },
  { name: "Achados e perdidos", done: false },
  { name: "Acompanhamento de viagens em tempo real", done: false },
  { name: "Notificação de saídas de ônibus", done: false },
];

const maintainers = [
  {
    name: "Bruno Correia",
    githubUser: "brnocorreia",
    githubLink: "https://github.com/brnocorreia",
  },
  {
    name: "Márcio Ribeiro",
    githubUser: "ribmarciojr",
    githubLink: "https://github.com/ribmarciojr",
  },
];

export default function AboutUs() {
  return (
    <PublicContent hideFooter>
      <div className="flex flex-col w-full max-w-full pt-3">
        {/* Main Title */}
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-white md:text-center">
            Sobre o Meu Buzufba
          </h1>
        </div>

        {/* Sections Container */}
        <div className="flex flex-col gap-4">
          {/* Objetivo Section */}
          <div className="flex flex-col w-full gap-2">
            <div className="flex flex-row items-center gap-x-2 text-white">
              <Target size={20} />
              <span className="font-semibold text-lg">Nosso Objetivo</span>
            </div>
            <div className="p-4 border border-zinc-200 rounded-md shadow-sm bg-white">
              <p className="text-gray-700 leading-relaxed">
                O Meu Buzufba é um projeto open source, independente e sem
                ligação com a UFBA que visa ajudar a comunidade acadêmica da
                UFBA (Universidade Federal da Bahia) a utilizar o Buzufba de
                forma mais inteligente. Sabemos que a UFBA é carente de inovação
                e principalmente de digitalização, e o Buzufba é um recurso
                essencial para a mobilidade no campus e utilizado por milhares
                de alunos. Nosso objetivo é facilitar o acesso e a gestão de
                informações referentes ao transporte público da universidade,
                que hoje é gerido de forma arcaica e pouco eficiente.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                O projeto encontra-se em desenvolvimento. Ideias e feedbacks são
                sempre bem-vindos! Utilize a aba de issues no nosso{" "}
                <a
                  href="https://github.com/meubuzufba/meu-buzufba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium"
                >
                  GitHub
                </a>{" "}
                para sugerir melhorias e reportar bugs.
              </p>
            </div>
          </div>

          {/* Roadmap Section */}
          <div className="flex flex-col w-full gap-2">
            <div className="flex flex-row items-center gap-x-2 text-white">
              <ListChecks size={20} />
              <span className="font-semibold text-lg">
                Roadmap de Funcionalidades
              </span>
            </div>
            <div className="p-6 border border-zinc-200 rounded-md shadow-sm bg-white">
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {features.map((feature) => (
                  <li
                    key={feature.name}
                    className="flex items-center p-3 bg-gray-100 rounded-md border border-gray-200"
                  >
                    {feature.done ? (
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    ) : (
                      <Clock className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                    )}
                    <span className="text-gray-800 text-sm">
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mantenedores Section */}
          <div className="flex flex-col w-full gap-2">
            <div className="flex flex-row items-center gap-x-2 text-white">
              <Users size={20} />
              <span className="font-semibold text-lg">Mantenedores</span>
            </div>
            <div className="p-6 border border-zinc-200 rounded-md shadow-sm bg-white">
              <div className="flex flex-row md:flex-col justify-center items-center gap-10 sm:gap-16">
                {maintainers.map((maintainer) => (
                  <a
                    key={maintainer.githubUser}
                    href={maintainer.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-center group"
                  >
                    <Image
                      src={`https://github.com/${maintainer.githubUser}.png`}
                      alt={maintainer.name}
                      width={100}
                      height={100}
                      className="rounded-full mb-3 border-2 border-gray-300 group-hover:border-blue-500 transition-all duration-200 group-hover:scale-105"
                    />
                    <span className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                      {maintainer.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicContent>
  );
}
