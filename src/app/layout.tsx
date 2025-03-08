import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Providers } from "@/providers/jotai";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meu Buzufba",
  description: "Tudo que você precisa saber sobre o Buzufba",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Toaster
          richColors
          closeButton
          expand
          visibleToasts={3}
          position="top-right"
          offset={{ top: 72 }}
          mobileOffset={{ top: 70 }}
        />
      </body>
    </html>
  );
}
