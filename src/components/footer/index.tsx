"use client";

import Link from "next/link";
import DonateButton from "../donate-button";

export default function Footer() {
  return (
    <footer className="w-full py-4 bg-zinc-800 text-zinc-300 text-center flex flex-row items-center justify-center">
      <div className="flex flex-col gap-1 lg:flex-row lg:gap-8 items-center w-full justify-center">
        <p>
          <Link
            href="https://drive.google.com/file/d/1CEW2RUjp2L7zi1rzHZgomML0j-_cfzw0/view?usp=sharing"
            className="underline hover:text-zinc-100 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fonte dos dados
          </Link>
        </p>
        <p>
          <Link
            href="https://6vmutd5jzl7.typeform.com/to/R1slrfFh"
            className="underline hover:text-zinc-100 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sugira melhorias e reporte bugs
          </Link>
        </p>
        <p>
          Made with ❤️ by{" "}
          <Link
            href="https://github.com/brnocorreia"
            className="underline hover:text-zinc-100 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bruno
          </Link>{" "}
          &{" "}
          <Link
            href="https://github.com/ribmarciojr"
            className="underline hover:text-zinc-100 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Márcio
          </Link>
        </p>
      </div>
    </footer>
  );
}
