import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Providers } from "@/providers/jotai";

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
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
