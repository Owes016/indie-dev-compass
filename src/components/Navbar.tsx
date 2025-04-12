
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  LayoutDashboard,
  LogOut,
  Menu,
  Plus,
  Settings,
  User,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const navLinks = [
  {
    label: "Dashboard",
    href: "/",
    icon: <LayoutDashboard size={20} />,
  },
  {
    label: "Calendar",
    href: "/calendar",
    icon: <CalendarDays size={20} />,
  },
];

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-white/10 bg-background/95 backdrop-blur-sm sticky top-0 z-10">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="rounded-md bg-primary/20 p-1">
              <div className="h-6 w-6 rounded-sm bg-primary/80" />
            </div>
            <span className="text-xl font-bold">ProjectPilot</span>
          </Link>

          {!isMobile && (
            <div className="hidden md:flex md:gap-4 ml-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors px-1"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/new-project" className="hidden md:flex items-center gap-1">
              <Plus size={16} />
              <span>New Project</span>
            </Link>
          </Button>

          {isMobile ? (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="flex items-center gap-2 py-2 text-muted-foreground hover:text-white transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </Link>
                  ))}
                  <Link
                    to="/new-project"
                    className="flex items-center gap-2 py-2 text-muted-foreground hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Plus size={20} />
                    <span>New Project</span>
                  </Link>
                  <Link
                    to="/settings"
                    className="flex items-center gap-2 py-2 text-muted-foreground hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Settings size={20} />
                    <span>Settings</span>
                  </Link>
                  <div className="border-t border-white/10 mt-2 pt-4">
                    <button className="flex w-full items-center gap-2 py-2 text-muted-foreground hover:text-destructive transition-colors">
                      <LogOut size={20} />
                      <span>Log out</span>
                    </button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <div className="flex items-center gap-1">
              <Link
                to="/settings"
                className="text-muted-foreground hover:text-white transition-colors p-2"
              >
                <Settings size={20} />
              </Link>
              <div className="relative">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
