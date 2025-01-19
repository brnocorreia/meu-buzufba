import { Construction, ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface EmptyPageProps {
  title: string;
  description: string;
  redirectLink: string;
  redirectText: string;
}

export default function EmptyPage({
  title,
  description,
  redirectLink,
  redirectText,
}: EmptyPageProps) {
  return (
    <>
      <div className="flex flex-row items-center justify-center gap-3 mb-4">
        <Construction className="w-10 h-10 text-white" />
        <h1 className="text-4xl md:text-6xl font-bold text-white text-wrap">
          {title}
        </h1>
        <Construction className="w-10 h-10 text-white" />
      </div>
      <p className="text-lg md:text-xl text-gray-300 mb-8 text-center max-w-2xl">
        {description}
      </p>
      <Button asChild className="flex items-center gap-2 hover:bg-zinc-700">
        <Link href={redirectLink}>
          <ArrowLeftIcon className="w-4 h-4" />
          {redirectText}
        </Link>
      </Button>
    </>
  );
}
