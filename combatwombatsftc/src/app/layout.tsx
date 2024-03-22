import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "@/components/navbar";
import Providers from "@/components/providers";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"


export const metadata: Metadata = {
  title: "Combat Wombats FTC",
  description: "FTC #23335's Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body suppressHydrationWarning className="">
        <Providers>
          <main className="font-mona bg-beige text-black dark:bg-gradient-to-r from-darkgrey to-lightgrey dark:text-white">
            <Navbar />
            {children}
          </main>
        </Providers>
      </body>

      <GoogleAnalytics gaId="G-FWM87P8M7Z" />
    </html>
  );
}
