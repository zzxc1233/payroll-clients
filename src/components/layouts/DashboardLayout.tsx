import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-text">
      <Sidebar />

      <main className="ml-60 min-h-screen">
        <div className="mx-auto max-w-360">{children}</div>
      </main>
    </div>
  );
}
