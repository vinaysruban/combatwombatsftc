import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "@/components/layouts/navbar";
import Providers from "@/components/providers";
import "./globals.css";
import Footer from "@/components/layouts/footer";
import { AOSInit } from "@/components/aos";
import type { Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";

const APP_NAME = "Combat Wombats";
const APP_DEFAULT_TITLE =
  "Combat Wombats - An upcoming First Tech Challenge team";
const APP_TITLE_TEMPLATE = "%s | Combat Wombats";
const APP_DESCRIPTION =
  "Discover cutting-edge robotics programming and FIRST Tech Challenge (FTC) insights with the Combat Wombats. Access a wealth of pre-written documentation, coding blueprints, and technical guides designed specifically for FTC enthusiasts. Delve into advanced robotics strategies, innovative design concepts, and efficient coding methods. Elevate your skills and excel in FTC competitions with the Combat Wombats' exclusive resources and expertise. FTC #23335's Website";

export const viewport: Viewport = {
  themeColor: "#ebe2d3",
};

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  alternates: {
    canonical: "https://combatwombats.vercel.app",
    languages: {
      "en-US": "/en-US",
    },
  },
  manifest: "/manifest.json",
  appleWebApp: {
    title: APP_DEFAULT_TITLE,
    statusBarStyle: "default",
    capable: true,
  },
  formatDetection: {
    telephone: true,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: ["/images/image-transformed.webp"],
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: ["/images/image-transformed.webp"],
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
      <Analytics />
      <AOSInit />
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
