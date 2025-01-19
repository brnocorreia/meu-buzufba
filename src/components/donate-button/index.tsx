import { CiCoffeeCup } from "react-icons/ci";
import Link from "next/link";

type DonateButtonVariant = "default" | "small";

type DonateButtonProps = {
  donateUrl: string;
  message?: string;
  variant?: DonateButtonVariant;
};

export default function DonateButton(props: DonateButtonProps) {
  const { donateUrl, message, variant = "default" } = props;

  const shouldShowMessage = variant === "default" && message !== undefined;

  return (
    <Link
      target="_blank"
      className="inline-flex items-center text-black bg-yellow-400 border border-transparent rounded-lg py-2 px-2 text-lg tracking-wide font-cursive shadow-md hover:scale-105 transition-all duration-200 ease-in-out gap-2"
      href={donateUrl}
    >
      <CiCoffeeCup size={20} className="text-black" />
      {shouldShowMessage && <span className="text-sm">{message}</span>}
    </Link>
  );
}
