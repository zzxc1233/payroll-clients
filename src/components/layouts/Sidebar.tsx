import { Button } from "../ui/Button";
import {
  LayoutDashboard,
  Users,
  Wallet,
  CalendarDays,
  Settings,
  Palette,
} from "lucide-react";

import { cn } from "../../lib/utils";

const navItems = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Employees", href: "/employees", icon: Users },
  { label: "Payroll", href: "/payroll", icon: Wallet },
  { label: "Shifts", href: "/shifts", icon: CalendarDays },
  { label: "Design System", href: "/design-system", icon: Palette },
  { label: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = window.location.pathname;

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-60 border-r border-border bg-surface">
      <div className="flex h-16 items-center border-b border-border px-6">
        <span className="text-lg font-semibold">HR Suite</span>
      </div>

      <nav className="space-y-1 p-4 h-5/6">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <a
              key={item.href}
              href={item.href}
              className={cn([
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition",
                active
                  ? "bg-primary text-on-primary"
                  : "text-muted hover:bg-background hover:text-text",
              ])}
            >
              <Icon size={18} />
              {item.label}
            </a>
          );
        })}
      </nav>
      <div className="flex h-16 justify-center items-center border-t border-border px-6">
        <Button 
        variant="danger" 
        className="w-full"
        onClick={() => {
          // Logout logic here
        }}>
          Logout
        </Button>
      </div>
    </aside>
  );
}
