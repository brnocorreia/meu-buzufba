import { FaBusAlt } from "react-icons/fa";

export default function Header(){
  return (
    <header className="bg-black h-16 py-5 flex items-center justify-center">
      <FaBusAlt className="w-8 h-8 text-white text-2xl" />
    </header>
  );
};

