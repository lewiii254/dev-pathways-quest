import Header from "@/components/Header";
import PathwayCard from "@/components/PathwayCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Code, Database, Globe, Palette, Server } from "lucide-react";

const Curriculum = () => {
  const pathways = [
    {
      title: "Web Development Fundamentals",
      description: "Learn HTML, CSS, and JavaScript from scratch. Build responsive websites and understand web development basics.",
      difficulty: "Beginner" as const,
      duration: "8-12 weeks",
      lessons: 45,
      students: 8432,
      progress: 0,
      icon: <Globe className="h-6 w-6 text-white" />,
    },
    {
      title: "Python Programming",
      description: "Master Python fundamentals, data structures, and object-oriented programming. Perfect for beginners.",
      difficulty: "Beginner" as const,
      duration: "6-10 weeks",
      lessons: 38,
      students: 6821,
      progress: 0,
      icon: <Code className="h-6 w-6 text-white" />,
    },
    {
      title: "Frontend Frameworks",
      description: "Dive into React, Vue, or Angular. Learn modern frontend development with component-based architecture.",
      difficulty: "Intermediate" as const,
      duration: "10-14 weeks",
      lessons: 52,
      students: 4567,
      progress: 0,
      icon: <Palette className="h-6 w-6 text-white" />,
    },
    {
      title: "Backend Development",
      description: "Build APIs and server-side applications with Node.js, Express, and database integration.",
      difficulty: "Intermediate" as const,
      duration: "12-16 weeks",
      lessons: 48,
      students: 3254,
      progress: 0,
      icon: <Server className="h-6 w-6 text-white" />,
    },
    {
      title: "Database Management",
      description: "Learn SQL, NoSQL databases, and data modeling. Understand how to store and query data effectively.",
      difficulty: "Intermediate" as const,
      duration: "8-10 weeks",
      lessons: 32,
      students: 2876,
      progress: 0,
      icon: <Database className="h-6 w-6 text-white" />,
    },
    {
      title: "Full-Stack Projects",
      description: "Combine frontend and backend skills to build complete web applications with authentication and deployment.",
      difficulty: "Advanced" as const,
      duration: "16-20 weeks",
      lessons: 65,
      students: 1543,
      progress: 0,
      icon: <BookOpen className="h-6 w-6 text-white" />,
    },
  ];

  const learningPaths = [
    {
      title: "Complete Web Developer",
      pathways: ["Web Development Fundamentals", "Frontend Frameworks", "Backend Development", "Full-Stack Projects"],
      duration: "6-8 months",
      description: "Become a full-stack web developer with this comprehensive learning path.",
    },
    {
      title: "Python Developer",
      pathways: ["Python Programming", "Database Management", "Backend Development"],
      duration: "4-6 months",
      description: "Master Python and backend development for web applications and data processing.",
    },
    {
      title: "Frontend Specialist",
      pathways: ["Web Development Fundamentals", "Frontend Frameworks"],
      duration: "3-4 months",
      description: "Focus on creating beautiful, interactive user interfaces and experiences.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Learning Curriculum</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your learning path and progress through structured lessons, hands-on projects, 
            and interactive quizzes designed by industry experts.
          </p>
        </div>

        {/* Learning Paths Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Recommended Learning Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {learningPaths.map((path, index) => (
              <Card key={index} className="hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{path.title}</CardTitle>
                  <CardDescription>{path.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-muted-foreground">
                      Duration: {path.duration}
                    </div>
                    <div className="space-y-1">
                      {path.pathways.map((pathway, idx) => (
                        <div key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                          {pathway}
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full">
                      Start Learning Path
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Individual Pathways */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Individual Pathways</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pathways.map((pathway, index) => (
              <PathwayCard key={index} {...pathway} />
            ))}
          </div>
        </section>

        {/* Getting Started Section */}
        <section className="mt-16 bg-gradient-hero/5 rounded-2xl p-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">New to Programming?</h2>
            <p className="text-muted-foreground mb-6">
              Start with our beginner-friendly pathways designed to take you from zero to confident developer. 
              Each lesson includes interactive examples, quizzes, and practical exercises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90">
                <BookOpen className="mr-2 h-5 w-5" />
                Start with Web Development
              </Button>
              <Button size="lg" variant="outline">
                <Code className="mr-2 h-5 w-5" />
                Begin Python Journey
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Curriculum;