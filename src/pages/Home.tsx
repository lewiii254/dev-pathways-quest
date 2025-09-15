import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, Star, Users, BookOpen, Code, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const stats = [
    { label: "Active Learners", value: "12,000+", icon: Users },
    { label: "Projects Available", value: "150+", icon: Code },
    { label: "Lessons & Tutorials", value: "500+", icon: BookOpen },
    { label: "GitHub Stars", value: "2,400+", icon: Star },
  ];

  const featuredProjects = [
    {
      title: "Personal Portfolio Website",
      description: "Build a responsive portfolio using HTML, CSS, and JavaScript",
      difficulty: "Beginner",
      duration: "4-6 hours",
      language: "HTML/CSS/JS",
    },
    {
      title: "Task Management App",
      description: "Create a full-stack todo application with React and Node.js",
      difficulty: "Intermediate",
      duration: "12-15 hours",
      language: "React/Node.js",
    },
    {
      title: "Python Data Analyzer",
      description: "Analyze datasets using pandas, matplotlib, and jupyter notebooks",
      difficulty: "Intermediate",
      duration: "8-10 hours",
      language: "Python",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started with these popular projects designed to teach you essential skills
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge variant="secondary" className={
                      project.difficulty === "Beginner" 
                        ? "bg-accent/10 text-accent" 
                        : "bg-warning/10 text-warning"
                    }>
                      {project.difficulty}
                    </Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{project.duration}</span>
                    <Badge variant="outline">{project.language}</Badge>
                  </div>
                  <Button variant="outline" className="w-full">
                    Start Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Open Source CTA */}
      <section className="py-16 bg-gradient-hero/5">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-hero">
                <Github className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Built by the Community</h2>
              <p className="text-xl text-muted-foreground">
                LearnCode is completely open source. Join thousands of contributors who help 
                make programming education accessible to everyone.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contribute">
                  <Target className="mr-2 h-5 w-5" />
                  Start Contributing
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-hero">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">LearnCode</span>
              </div>
              <p className="text-muted-foreground">
                Open source learning platform for web development and Python programming.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Learn</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/curriculum" className="hover:text-primary">Curriculum</Link></li>
                <li><Link to="/projects" className="hover:text-primary">Projects</Link></li>
                <li><a href="#" className="hover:text-primary">Tutorials</a></li>
                <li><a href="#" className="hover:text-primary">Challenges</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/contribute" className="hover:text-primary">Contribute</Link></li>
                <li><a href="#" className="hover:text-primary">Discord</a></li>
                <li><a href="#" className="hover:text-primary">Forum</a></li>
                <li><a href="#" className="hover:text-primary">Showcase</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Documentation</a></li>
                <li><a href="#" className="hover:text-primary">API</a></li>
                <li><a href="#" className="hover:text-primary">Blog</a></li>
                <li><a href="#" className="hover:text-primary">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; 2024 LearnCode. Open source and free forever.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;