import { CiCoffeeCup } from "react-icons/ci";
import Link from "next/link";

type DonateButtonProps = {
  donateUrl: string;
  message: string;
};

export default function DonateButton(props: DonateButtonProps) {
  return (
    <Link
      target="_blank"
      className="inline-flex items-center text-black bg-yellow-400 border border-transparent rounded-lg py-2 px-4 text-lg tracking-wide font-cursive shadow-md hover:underline hover:opacity-85 focus:opacity-85 focus:ring-2 focus:ring-yellow-400"
      href={props.donateUrl}
    >
      <CiCoffeeCup className="w-6 h-6 text-black" />
      <span className="ml-4 text-sm">{props.message}</span>
    </Link>
  );
}
