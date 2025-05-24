"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Info, Bus, MapPin, User, Search, Home } from "lucide-react";

interface NavigationItem {
  label: string;
  icon: React.ReactNode;
  path: string;
}

const defaultNavItems: NavigationItem[] = [
  { label: "Home", icon: <Home size={20} />, path: "/" },
  { label: "Rotas", icon: <Bus size={20} />, path: "/rotas" },
  { label: "Paradas", icon: <MapPin size={20} />, path: "/paradas" },
  { label: "Sobre", icon: <Info size={20} />, path: "/sobre" },
];

interface BottomNavigationProps {
  items?: NavigationItem[];
}

export default function BottomNavigation({
  items = defaultNavItems,
}: BottomNavigationProps) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return path === "/" ? pathname === path : pathname.startsWith(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-14 bg-zinc-900 border-t md:border border-zinc-700 flex justify-around items-center z-50 md:left-1/2 md:transform md:-translate-x-1/2 md:max-w-[1300px] md:w-full md:rounded-t-lg">
      {items.map((item) => {
        return (
          <Link
            key={item.path}
            href={item.path}
            className={`flex flex-col items-center justify-center transition-colors ease-in-out duration-300 w-full h-full ${
              isActive(item.path) ? "text-white scale-105" : "text-zinc-400"
            }`}
          >
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
