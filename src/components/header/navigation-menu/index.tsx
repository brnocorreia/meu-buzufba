"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { data } from "@/constants/data";
import { NavigationMenuListItem } from "./navigation-menu-item";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function HeaderNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white hover:text-white bg-transparent">
            Rotas
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px] ">
              <NavigationMenuListItem
                key={0}
                title={"Todas as rotas"}
                href={"/rotas"}
              >
                <div>
                  <p>Expresso, B1, B2, B3, B4 e B5</p>
                </div>
              </NavigationMenuListItem>
              {data.map((route) => (
                <NavigationMenuListItem
                  key={route.id}
                  title={route.name}
                  href={`/rotas/${route.id}`}
                >
                  <div>
                    <p>
                      {route.departureLocation} {"->"} {route.arrivalLocation}
                    </p>
                  </div>
                </NavigationMenuListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/paradas" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "text-white hover:text-white bg-transparent hover:bg-transparent gap-1"
              )}
            >
              Paradas
              <Badge className="text-[0.5rem] leading-3 py-0">Soon</Badge>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
