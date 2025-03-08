import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export const font = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning dir="rtl" lang="ar">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background antialiased",
          font.className
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Banner />
            <Navbar />
            <NextTopLoader color="#fff" />
            <main className="container mx-auto max-w-screen-2xl pt-4 px-6 flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
