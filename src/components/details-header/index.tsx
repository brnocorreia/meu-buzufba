"use client";

import { Routes } from "@/@types/routes";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface DetailsHeaderProps {
  routeName: string;
}

export default function DetailsHeader({ routeName }: DetailsHeaderProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <div className="flex flex-col w-full items-start gap-1 justify-between border-b pb-4 px-2">
      <div className="flex flex-row gap-2 items-center">
        <ChevronLeft onClick={handleBack} />
        <span className="text-xl font-bold">{routeName}</span>
      </div>
    </div>
  );
}
