import Link from "next/link";
import { FaGithub } from "react-icons/fa";

type GithubButtonVariant = "default" | "small";

type GithubButtonProps = {
  githubUrl: string;
  message?: string;
  variant?: GithubButtonVariant;
};

export default function GithubButton(props: GithubButtonProps) {
  const { githubUrl, message, variant = "default" } = props;

  const shouldShowMessage = variant === "default" && message !== undefined;

  return (
    <Link
      target="_blank"
      className="inline-flex items-center text-black bg-white border border-transparent rounded-lg py-2 px-2 text-lg tracking-wide font-cursive shadow-md hover:scale-105 transition-all duration-200 ease-in-out gap-2"
      href={githubUrl}
    >
      <FaGithub size={20} className="text-black" />
      {shouldShowMessage && <span className="text-sm">{message}</span>}
    </Link>
  );
}
