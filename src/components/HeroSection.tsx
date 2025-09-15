import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Code, Users } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Learn to Code with{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Open Source
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Master web development and Python through hands-on projects, comprehensive curriculum, 
            and a supportive community of learners and contributors.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild className="bg-gradient-hero hover:opacity-90">
              <Link to="/curriculum">
                <BookOpen className="mr-2 h-5 w-5" />
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/projects">
                <Code className="mr-2 h-5 w-5" />
                Browse Projects
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Structured Curriculum</h3>
              <p className="text-muted-foreground">
                Learn with organized pathways from beginner to advanced levels
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                <Code className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Project-Based Learning</h3>
              <p className="text-muted-foreground">
                Build real projects while learning concepts and best practices
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Open Source Community</h3>
              <p className="text-muted-foreground">
                Contribute to the platform and help others on their journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;