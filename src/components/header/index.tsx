"use client";

import { FaBusAlt } from "react-icons/fa";
import DonateButton from "@/components/donate-button";
import { useRouter } from "next/navigation";
import { HeaderNavigationMenu } from "@/components/header/navigation-menu";
import GithubButton from "@/components/github-button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { BusFront, MapPin, Menu, X } from "lucide-react";
import { VisuallyHidden } from "@/components/ui/visually-hidden";

interface HeaderProps {
  isSimple?: boolean;
}

export default function Header({ isSimple = false }: HeaderProps) {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleHomeNavigation = () => {
    router.push("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Add effect to prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-5 bg-transparent">
        <header
          className={cn(
            "w-full max-w-6xl rounded-xl transition-all duration-300 flex flex-col",
            scrolled
              ? "bg-black/80 backdrop-blur-lg shadow-lg border-white/10"
              : "bg-black/80 backdrop-blur-sm",
            isOpen && "bg-black/90 backdrop-blur-xl"
          )}
        >
          <div className="flex items-center justify-between px-5 py-2">
            <button
              className="flex items-center cursor-pointer gap-3 transition-transform"
              onClick={handleHomeNavigation}
              aria-label="Go to homepage"
            >
              <FaBusAlt className="w-6 h-6 text-white text-2xl transition-all duration-300" />
              <span className="text-white font-bold transition-all duration-300 text-lg">
                Meu Buzufba
              </span>
            </button>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex flex-1 items-center justify-center">
              {!isSimple && <HeaderNavigationMenu />}
            </div>

            {/* Right-aligned actions */}
            <div className="hidden md:flex items-center">
              <GithubButton
                githubUrl="https://github.com/brnocorreia/meu-buzufba"
                message="Github"
              />
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden">
              <button
                className="text-white p-2 rounded-xl hover:bg-white/10 transition-colors z-50"
                aria-label={
                  isOpen ? "Close navigation menu" : "Open navigation menu"
                }
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="md:hidden px-5 pb-5 animate-in fade-in  duration-300">
              <div className="flex flex-col gap-6 mt-4">
                {!isSimple && (
                  <nav aria-label="Mobile navigation">
                    <ul className="flex flex-col gap-4">
                      <li>
                        <a
                          href="/rotas"
                          className="flex flex-row items-center gap-3 text-lg font-medium text-white hover:text-zinc-200 transition-colors  rounded-xl"
                          onClick={() => setIsOpen(false)}
                        >
                          <BusFront className="h-5 w-5" />
                          Rotas
                        </a>
                      </li>
                      <li>
                        <a
                          href="/paradas"
                          className="text-lg font-medium text-white hover:text-zinc-200 transition-colors flex items-center gap-2  rounded-xl"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="flex flex-row items-center gap-3">
                            <MapPin className="h-5 w-5" />
                            Paradas
                          </div>
                          <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full">
                            Soon
                          </span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                )}
                <div className="mt-4 self-start">
                  <GithubButton
                    githubUrl="https://github.com/brnocorreia/meu-buzufba"
                    message="Github"
                  />
                </div>
              </div>
            </div>
          )}
        </header>
      </div>
    </>
  );
}
