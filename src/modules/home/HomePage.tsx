import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] gap-6 text-center">
      <h1 className="text-4xl font-bold tracking-tight">Welcome to SMAPL</h1>
      <p className="text-lg text-muted-foreground max-w-md">
        Building the future, one step at a time.
      </p>
      <div className="flex gap-3">
        <Button asChild>
          <Link to="/about">Learn More</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
