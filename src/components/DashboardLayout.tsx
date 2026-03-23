import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { BottomNav } from "@/components/BottomNav";

export function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <div className="hidden md:block">
          <AppSidebar />
        </div>

        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-14 flex items-center border-b border-border bg-card px-4 sticky top-0 z-40">
            <SidebarTrigger className="hidden md:flex mr-3 text-muted-foreground hover:text-foreground" />
            <h1 className="text-lg font-semibold text-foreground md:hidden">Pro-Billing</h1>
          </header>

          <main className="flex-1 p-4 md:p-6 pb-20 md:pb-6">
            {children}
          </main>
        </div>

        <BottomNav />
      </div>
    </SidebarProvider>
  );
}
