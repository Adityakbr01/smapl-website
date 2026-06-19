import { Outlet, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function RootLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-background sticky top-0 z-50">
        <nav className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="text-xl font-bold">
            SMAPL
          </Link>
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Button
                  variant={location.pathname === link.to ? "secondary" : "ghost"}
                  asChild
                >
                  <Link to={link.to}>{link.label}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} SMAPL. All rights reserved.
      </footer>
    </div>
  );
}
