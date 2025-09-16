import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Clock, Star, Users, Code, ExternalLink, Download, Github } from "lucide-react";

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  
  // Mock data - in real app this would come from API
  const project = {
    id: projectId,
    title: "Personal Portfolio Website",
    description: "Create a responsive portfolio website showcasing your projects and skills using HTML, CSS, and JavaScript.",
    difficulty: "Beginner" as const,
    duration: "4-6 hours",
    language: "HTML/CSS/JS",
    tags: ["responsive", "portfolio", "css-grid", "animations"],
    rating: 4.8,
    completions: 2547,
    image: "/api/placeholder/600/300",
    prerequisites: [
      "Basic HTML knowledge",
      "CSS fundamentals",
      "Basic JavaScript understanding"
    ],
    learningObjectives: [
      "Build a responsive portfolio layout",
      "Implement smooth scrolling and animations",
      "Create an interactive project gallery",
      "Deploy your website to the web"
    ],
    steps: [
      {
        title: "Project Setup",
        description: "Set up your project structure and basic HTML template",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Your content here -->
</body>
</html>`
      },
      {
        title: "Navigation & Header",
        description: "Create a responsive navigation bar and hero section",
        code: `<nav class="navbar">
    <div class="nav-container">
        <h1 class="logo">Your Name</h1>
        <ul class="nav-menu">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
</nav>`
      },
      {
        title: "Styling with CSS",
        description: "Add beautiful styles and responsive design",
        code: `.navbar {
    background: #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
}`
      }
    ],
    stretchGoals: [
      "Add dark mode toggle functionality",
      "Implement a contact form with validation",
      "Add smooth page transitions",
      "Create a blog section with markdown support"
    ]
  };

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-accent/10 text-accent";
      case "Intermediate":
        return "bg-warning/10 text-warning";
      case "Advanced":
        return "bg-destructive/10 text-destructive";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>

        {/* Project Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            )}
            
            <div className="mb-4">
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="secondary" className={getDifficultyColor(project.difficulty)}>
                  {project.difficulty}
                </Badge>
                <Badge variant="outline">{project.language}</Badge>
              </div>
              <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{project.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>{project.rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{project.completions} completed</span>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Get Started</CardTitle>
              <CardDescription>
                Everything you need to build this project
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-gradient-hero hover:opacity-90">
                <Code className="mr-2 h-4 w-4" />
                Start Building
              </Button>
              <Button variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download Starter Code
              </Button>
              <Button variant="outline" className="w-full">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Project Content */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="guide">Step-by-Step</TabsTrigger>
            <TabsTrigger value="code">Code Examples</TabsTrigger>
            <TabsTrigger value="stretch">Stretch Goals</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Prerequisites</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.prerequisites.map((prereq, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {prereq}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What You'll Learn</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.learningObjectives.map((objective, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                        {objective}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="guide" className="space-y-6">
            <div className="space-y-6">
              {project.steps.map((step, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Step {index + 1}: {step.title}
                    </CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{step.code}</code>
                    </pre>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="code" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Complete Code Examples</CardTitle>
                <CardDescription>
                  Full implementation examples for reference
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View HTML File
                  </Button>
                  <Button variant="outline" className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View CSS File
                  </Button>
                  <Button variant="outline" className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View JavaScript File
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="stretch" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Challenge Yourself</CardTitle>
                <CardDescription>
                  Take your project to the next level with these additional features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.stretchGoals.map((goal, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-warning rounded-full mr-3 mt-2" />
                      <span className="text-sm">{goal}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <section className="mt-16 bg-gradient-hero/5 rounded-2xl p-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ready to Build?</h2>
            <p className="text-muted-foreground mb-6">
              Start building this project and add it to your portfolio. Follow the step-by-step guide and customize it to make it your own.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90">
                <Code className="mr-2 h-5 w-5" />
                Start Project
              </Button>
              <Button size="lg" variant="outline">
                <Download className="mr-2 h-5 w-5" />
                Download Resources
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectDetail;