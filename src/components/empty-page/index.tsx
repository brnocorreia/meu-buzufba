import { ArrowLeftIcon, Construction } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface EmptyPageProps {
  title: string;
  description: string;
  redirectLink: string;
  redirectText: string;
  icon?: React.ReactNode;
}

export default function EmptyPage({
  title,
  description,
  redirectLink,
  redirectText,
  icon,
}: EmptyPageProps) {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3 mb-4 text-white">
        {icon || <Construction className="w-20 h-20 " />}
        <h1 className="text-4xl md:text-6xl font-bold text-wrap">{title}</h1>
      </div>
      <span className="text-lg md:text-xl text-zinc-300 mb-8 text-center max-w-2xl">
        {description}
      </span>
      <Button
        asChild
        className="flex items-center gap-2 hover:bg-zinc-700 border border-white"
      >
        <Link href={redirectLink}>
          <ArrowLeftIcon className="w-4 h-4" />
          {redirectText}
        </Link>
      </Button>
    </>
  );
}
