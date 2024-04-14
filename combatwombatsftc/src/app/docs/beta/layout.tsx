import Sidebar from "@/components/docs/sidebar";

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
