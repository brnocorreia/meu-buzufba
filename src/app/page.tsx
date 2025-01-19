"use client";

import Footer from "@/components/footer";
import { RouteCard } from "@/components/route-card";
import { data } from "@/constants/data";
import { useAtom } from "jotai";
import { favoriteRoutesAtom } from "@/atoms/favorite-routes";

export default function Home() {
  const [favoriteRoutes] = useAtom(favoriteRoutesAtom);

  const routesWithFavorite = data
    .map((route) => ({
      ...route,
      isFavorite: favoriteRoutes.includes(route.id),
    }))
    .sort((a, b) => (b.isFavorite ? 1 : 0) - (a.isFavorite ? 1 : 0));

  return (
    <div className="flex flex-col min-h-screen min-w-screen w-full h-full px-3 items-center bg-pattern bg-no-repeat bg-center justify-center bg-zinc-800">
      <main className="flex flex-col justify-center items-center flex-grow max-w-[1300px]">
        <div className="max-w-7xl pt-5 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {routesWithFavorite.map((route) => (
              <RouteCard key={route.id} route={route} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
