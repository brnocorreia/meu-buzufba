import { FaBusAlt } from "react-icons/fa";
import DonateButton from "../donate-button";

export default function Header() {
  return (
    <header className="bg-black h-16 px-3 py-2 flex items-center justify-center">
      <div className="flex flex-1 items-center justify-between w-full h-full max-w-7xl sm:px-6 lg:px-8">
        <FaBusAlt className="w-8 h-8 text-white text-2xl" />
        <DonateButton
          donateUrl="https://buymeacoffee.com/buzufba"
          variant="small"
        />
      </div>
    </header>
  );
}
