import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "@/components/layouts/navbar";
import Providers from "@/components/providers";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/layouts/footer";
import { AOSInit } from "@/components/aos";

export const metadata: Metadata = {
  title: {
    default: "Combat Wombats - An upcoming First Tech Challenge team",
    template: "%s | Combat Wombats",
  },
  description:
    "Discover cutting-edge robotics programming and FIRST Tech Challenge (FTC) insights with the Combat Wombats. Access a wealth of pre-written documentation, coding blueprints, and technical guides designed specifically for FTC enthusiasts. Delve into advanced robotics strategies, innovative design concepts, and efficient coding methods. Elevate your skills and excel in FTC competitions with the Combat Wombats' exclusive resources and expertise. FTC #23335's Website",
  alternates: {
      canonical: 'https://combatwombats.vercel.app',
      languages: {
        'en-US': '/en-US',
      },
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="">
        <Providers>
          <main className="font-mona bg-beige text-black dark:bg-gradient-to-r from-darkgrey to-lightgrey dark:text-white">
            <Navbar />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>

      <GoogleAnalytics gaId="G-FWM87P8M7Z" />
    </html>
  );
}
