import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  BookOpen, 
  Code, 
  Users, 
  MessageSquare, 
  Star, 
  GitPullRequest, 
  Bug,
  Lightbulb,
  Heart,
  Award,
  ExternalLink
} from "lucide-react";

const Contribute = () => {
  const contributionTypes = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Create Tutorials",
      description: "Write comprehensive tutorials and learning materials in Markdown format.",
      difficulty: "Beginner",
      timeCommitment: "2-4 hours",
      skills: ["Writing", "Technical Knowledge", "Markdown"],
      examples: ["Lesson on CSS Flexbox", "Python Functions Guide", "Git Basics Tutorial"],
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Build Project Guides",
      description: "Develop step-by-step project guides with starter code and solutions.",
      difficulty: "Intermediate",
      timeCommitment: "8-12 hours",
      skills: ["Programming", "Documentation", "Problem Solving"],
      examples: ["React Todo App", "Python Web Scraper", "Node.js API"],
    },
    {
      icon: <Bug className="h-6 w-6" />,
      title: "Fix Bugs & Issues",
      description: "Help improve the platform by fixing bugs and addressing GitHub issues.",
      difficulty: "Intermediate",
      timeCommitment: "1-3 hours",
      skills: ["Debugging", "Testing", "Code Review"],
      examples: ["Fix responsive design issues", "Correct tutorial typos", "Improve performance"],
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Suggest Features",
      description: "Propose new features and improvements to enhance the learning experience.",
      difficulty: "Beginner",
      timeCommitment: "30 minutes",
      skills: ["Creative thinking", "User experience", "Communication"],
      examples: ["Interactive code playground", "Progress tracking", "Community challenges"],
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Community Support",
      description: "Help other learners by answering questions and providing guidance.",
      difficulty: "Beginner",
      timeCommitment: "30-60 minutes",
      skills: ["Communication", "Patience", "Teaching"],
      examples: ["Answer forum questions", "Review project submissions", "Mentor newcomers"],
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Content Review",
      description: "Review and improve existing content for accuracy and clarity.",
      difficulty: "Intermediate",
      timeCommitment: "1-2 hours",
      skills: ["Attention to detail", "Technical knowledge", "Editing"],
      examples: ["Proofread tutorials", "Test project guides", "Update outdated content"],
    },
  ];

  const recognitionLevels = [
    {
      level: "Contributor",
      icon: <Heart className="h-5 w-5" />,
      requirements: "1+ merged PR",
      benefits: ["Contributor badge", "GitHub profile recognition"],
      color: "bg-accent/10 text-accent",
    },
    {
      level: "Active Contributor",
      icon: <Star className="h-5 w-5" />,
      requirements: "5+ merged PRs",
      benefits: ["Featured on contributors page", "Early access to new features"],
      color: "bg-warning/10 text-warning",
    },
    {
      level: "Core Contributor",
      icon: <Award className="h-5 w-5" />,
      requirements: "15+ merged PRs",
      benefits: ["Invited to contributor Discord", "Input on platform roadmap"],
      color: "bg-primary/10 text-primary",
    },
  ];

  const stats = [
    { label: "Contributors", value: "234", icon: Users },
    { label: "Pull Requests", value: "1,847", icon: GitPullRequest },
    { label: "Issues Resolved", value: "892", icon: Bug },
    { label: "Community Projects", value: "156", icon: Code },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contribute to LearnCode</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our open-source community and help make programming education accessible to everyone. 
            Every contribution, big or small, makes a difference in someone's learning journey.
          </p>
        </div>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-muted/30 rounded-lg p-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Ways to Contribute */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Ways to Contribute</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contributionTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-hero">
                      {type.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{type.title}</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="secondary" className={
                          type.difficulty === "Beginner" 
                            ? "bg-accent/10 text-accent" 
                            : "bg-warning/10 text-warning"
                        }>
                          {type.difficulty}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{type.timeCommitment}</span>
                      </div>
                    </div>
                  </div>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-sm font-medium mb-2">Required Skills:</div>
                    <div className="flex flex-wrap gap-1">
                      {type.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-2">Examples:</div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {type.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full">
                    Get Started
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Getting Started Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Getting Started</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Github className="mr-2 h-5 w-5" />
                    For Developers
                  </CardTitle>
                  <CardDescription>
                    Contributing code, fixing bugs, and building features
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ol className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">1</span>
                      <div>
                        <strong>Fork the repository</strong> on GitHub and clone it locally
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">2</span>
                      <div>
                        <strong>Set up the development environment</strong> following our setup guide
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">3</span>
                      <div>
                        <strong>Pick an issue</strong> labeled "good first issue" or "help wanted"
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">4</span>
                      <div>
                        <strong>Create a pull request</strong> with your changes and detailed description
                      </div>
                    </li>
                  </ol>
                  <Button className="w-full bg-gradient-hero hover:opacity-90">
                    <Github className="mr-2 h-4 w-4" />
                    View Developer Guide
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2 h-5 w-5" />
                    For Content Creators
                  </CardTitle>
                  <CardDescription>
                    Writing tutorials, creating lessons, and improving documentation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ol className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">1</span>
                      <div>
                        <strong>Read our content guidelines</strong> and style guide
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">2</span>
                      <div>
                        <strong>Choose a topic</strong> from our content roadmap or suggest your own
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">3</span>
                      <div>
                        <strong>Write in Markdown</strong> using our template and include code examples
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">4</span>
                      <div>
                        <strong>Submit for review</strong> via GitHub pull request
                      </div>
                    </li>
                  </ol>
                  <Button variant="outline" className="w-full">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Content Creation Guide
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Recognition System */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Contributor Recognition</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recognitionLevels.map((level, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${level.color}`}>
                      {level.icon}
                    </div>
                    <CardTitle>{level.level}</CardTitle>
                    <CardDescription>{level.requirements}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {level.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Community Links */}
        <section className="bg-gradient-hero/5 rounded-2xl p-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
            <p className="text-muted-foreground">
              Connect with other contributors, get help, and stay updated on the latest developments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <Button variant="outline" size="lg" className="h-auto p-4" asChild>
              <a href="#" className="flex flex-col items-center space-y-2">
                <Github className="h-6 w-6" />
                <div>
                  <div className="font-medium">GitHub</div>
                  <div className="text-xs text-muted-foreground">Source code & issues</div>
                </div>
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="h-auto p-4" asChild>
              <a href="#" className="flex flex-col items-center space-y-2">
                <MessageSquare className="h-6 w-6" />
                <div>
                  <div className="font-medium">Discord</div>
                  <div className="text-xs text-muted-foreground">Real-time chat</div>
                </div>
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="h-auto p-4" asChild>
              <a href="#" className="flex flex-col items-center space-y-2">
                <Users className="h-6 w-6" />
                <div>
                  <div className="font-medium">Forum</div>
                  <div className="text-xs text-muted-foreground">Discussions & help</div>
                </div>
              </a>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contribute;