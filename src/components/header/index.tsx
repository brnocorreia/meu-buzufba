"use client";

import { FaBusAlt } from "react-icons/fa";
import DonateButton from "../donate-button";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleHomeNavigation = () => {
    router.push("/");
  };

  return (
    <header className="bg-black h-16 px-3 py-2 flex items-center justify-center">
      <div className="flex flex-1 items-center justify-between w-full h-full max-w-7xl sm:px-6 lg:px-8">
        <FaBusAlt
          className="w-8 h-8 text-white text-2xl cursor-pointer"
          onClick={handleHomeNavigation}
        />
        <DonateButton
          donateUrl="https://buymeacoffee.com/meubuzufba"
          variant="small"
        />
      </div>
    </header>
  );
}
