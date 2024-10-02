import { RouteCard } from "@/components/route-card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen h-full p-2 bg-pattern bg-no-repeat bg-center justify-center bg-zinc-800">
      <main className="flex flex-col justify-center flex-grow p-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-zinc-300 text-lg text-center mb-6">
            Navegue pelas rotas abaixo!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <RouteCard />
            <RouteCard />
            <RouteCard />
          </div>
        </div>
      </main>
      <footer className="w-full py-4 bg-zinc-800 text-zinc-300 text-center">
        <p>
          Made with ❤️ by{" "}
          <Link
            href="https://github.com/brnocorreia"
            className="underline hover:text-zinc-100 transition-colors"
          >
            Bruno Correia
          </Link>
        </p>
      </footer>
    </div>
  );
}
