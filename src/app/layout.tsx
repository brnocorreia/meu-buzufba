import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Providers } from "@/providers/jotai";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meu Buzufba",
  description: "Tudo que você precisa saber sobre o Buzufba",
  manifest: "/manifest.json",
  authors: [{ name: "Bruno Correia", url: "https://github.com/brnocorreia" }],
  creator: "Bruno Correia",
  themeColor: "#27272A",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Meu Buzufba",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Buzufba" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#27272a" />
      </head>
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
        <Script src="/sw-register.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
