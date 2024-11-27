import { AppSidebar } from "@/components/app-sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <AppSidebar />
      <div className="flex-1 overflow-x-auto">{children}</div>
    </div>
  );
}
