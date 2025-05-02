"use client";

import { RouteCard } from "@/components/route-card";
import { getAllRoutes } from "@/lib/routes-repository";
import { useAtom } from "jotai";
import { favoriteRoutesAtom } from "@/atoms/favorite-routes";
import PublicContent from "@/components/shared/ui/public-content";

export default function Home() {
  const [favoriteRoutes] = useAtom(favoriteRoutesAtom);

  const routesWithFavorite = getAllRoutes()
    .map((route) => ({
      ...route,
      isFavorite: favoriteRoutes.includes(route.id),
    }))
    .sort((a, b) => (b.isFavorite ? 1 : 0) - (a.isFavorite ? 1 : 0));

  return (
    <PublicContent hideFooter>
      <div className="w-full pt-5 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {routesWithFavorite.map((route) => (
            <RouteCard key={route.id} route={route} />
          ))}
        </div>
      </div>
    </PublicContent>
  );
}
