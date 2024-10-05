import { RouteCard } from "@/components/route-card";
import { data } from "@/constants/data";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen w-full h-full p-2 items-center bg-pattern bg-no-repeat bg-center justify-center bg-zinc-800">
      <main className="flex flex-col justify-center items-center flex-grow max-w-[1300px]">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((route) => (
              <RouteCard key={route.id} data={route} />
            ))}
          </div>
        </div>
      </main>
      <footer className="w-full py-4 bg-zinc-800 text-zinc-300 text-center flex flex-row items-center justify-center">
        <div className="flex flex-col lg:flex-row lg:gap-8 items-center w-full justify-center">
          <p>
            <Link
              href="https://drive.google.com/file/d/1CEW2RUjp2L7zi1rzHZgomML0j-_cfzw0/view?usp=sharing"
              className="underline hover:text-zinc-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fonte dos dados (PROAE)
            </Link>
          </p>
          <p>
            <Link
              href="https://6vmutd5jzl7.typeform.com/to/R1slrfFh"
              className="underline hover:text-zinc-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sugira melhorias e reporte bugs
            </Link>
          </p>
          <p>
            Made with ❤️ by{" "}
            <Link
              href="https://github.com/brnocorreia"
              className="underline hover:text-zinc-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bruno Correia
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
