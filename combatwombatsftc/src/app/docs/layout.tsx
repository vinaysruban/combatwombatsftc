import Sidebar from "@/components/docs/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "FTC Docs",
    template: "%s | FTC Docs",
  },
  description:
    "Discover cutting-edge robotics programming and FIRST Tech Challenge (FTC) insights with the Combat Wombats. Access a wealth of pre-written documentation, coding blueprints, and technical guides designed specifically for FTC enthusiasts. Delve into advanced robotics strategies, innovative design concepts, and efficient coding methods. Elevate your skills and excel in FTC competitions with the Combat Wombats' exclusive resources and expertise. FTC #23335's Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col md:flex-row max-w-screen-4xl">
      <Sidebar />
      {children}
    </div>
  );
}
