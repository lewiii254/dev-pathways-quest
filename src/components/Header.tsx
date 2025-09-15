import { Button } from "@/components/ui/button";
import { BookOpen, Code, Users, Github } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-hero">
            <Code className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold">LearnCode</span>
        </Link>
        
        <nav className="ml-8 flex items-center space-x-6 text-sm font-medium">
          <Link
            to="/curriculum"
            className={`transition-colors hover:text-primary ${
              isActive("/curriculum") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <BookOpen className="mr-1 inline h-4 w-4" />
            Curriculum
          </Link>
          <Link
            to="/projects"
            className={`transition-colors hover:text-primary ${
              isActive("/projects") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Code className="mr-1 inline h-4 w-4" />
            Projects
          </Link>
          <Link
            to="/contribute"
            className={`transition-colors hover:text-primary ${
              isActive("/contribute") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Users className="mr-1 inline h-4 w-4" />
            Contribute
          </Link>
        </nav>

        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="sm">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;