import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Code, Trophy, Clock, TrendingUp, Play, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Mock user data
  const user = {
    name: "John Doe",
    joinedDate: "March 2024",
    totalLessons: 45,
    completedLessons: 18,
    totalProjects: 12,
    completedProjects: 5,
    currentStreak: 7,
    totalHours: 24
  };

  const currentPathways = [
    {
      id: "web-development-fundamentals",
      title: "Web Development Fundamentals",
      progress: 40,
      nextLesson: "CSS Grid Layout",
      difficulty: "Beginner" as const,
      estimatedTime: "3 hours left"
    },
    {
      id: "python-programming",
      title: "Python Programming",
      progress: 15,
      nextLesson: "Data Types and Variables",
      difficulty: "Beginner" as const,
      estimatedTime: "8 hours left"
    }
  ];

  const recentProjects = [
    {
      id: "personal-portfolio",
      title: "Personal Portfolio Website",
      status: "completed",
      completedAt: "2 days ago",
      difficulty: "Beginner" as const
    },
    {
      id: "weather-dashboard",
      title: "Weather Dashboard",
      status: "in-progress",
      progress: 60,
      difficulty: "Beginner" as const
    },
    {
      id: "task-management-app",
      title: "Task Management App",
      status: "not-started",
      difficulty: "Intermediate" as const
    }
  ];

  const achievements = [
    {
      title: "First Steps",
      description: "Completed your first lesson",
      earned: true,
      icon: <Play className="h-5 w-5" />
    },
    {
      title: "Project Builder",
      description: "Completed your first project",
      earned: true,
      icon: <Code className="h-5 w-5" />
    },
    {
      title: "Streak Master",
      description: "Learn for 7 days in a row",
      earned: true,
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      title: "Knowledge Seeker",
      description: "Complete 50 lessons",
      earned: false,
      icon: <BookOpen className="h-5 w-5" />
    }
  ];

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/10 text-green-700";
      case "in-progress":
        return "bg-primary/10 text-primary";
      case "not-started":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome back, {user.name}</h1>
          <p className="text-xl text-muted-foreground">
            Continue your learning journey and track your progress
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Lessons Completed</p>
                  <p className="text-2xl font-bold">{user.completedLessons}</p>
                  <p className="text-sm text-muted-foreground">of {user.totalLessons}</p>
                </div>
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Projects Built</p>
                  <p className="text-2xl font-bold">{user.completedProjects}</p>
                  <p className="text-sm text-muted-foreground">of {user.totalProjects}</p>
                </div>
                <Code className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Current Streak</p>
                  <p className="text-2xl font-bold">{user.currentStreak}</p>
                  <p className="text-sm text-muted-foreground">days</p>
                </div>
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Hours Learned</p>
                  <p className="text-2xl font-bold">{user.totalHours}</p>
                  <p className="text-sm text-muted-foreground">total</p>
                </div>
                <Clock className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="pathways" className="space-y-6">
          <TabsList>
            <TabsTrigger value="pathways">Current Pathways</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="pathways" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {currentPathways.map((pathway) => (
                <Card key={pathway.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{pathway.title}</CardTitle>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge variant="secondary" className={getDifficultyColor(pathway.difficulty)}>
                            {pathway.difficulty}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {pathway.estimatedTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{pathway.progress}%</span>
                      </div>
                      <Progress value={pathway.progress} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Up next:</p>
                      <p className="font-medium">{pathway.nextLesson}</p>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button className="flex-1 bg-gradient-hero hover:opacity-90" asChild>
                        <Link to={`/pathway/${pathway.id}`}>
                          Continue Learning
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to={`/pathway/${pathway.id}`}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Explore More Pathways</CardTitle>
                <CardDescription>
                  Discover new skills and expand your knowledge
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <Link to="/curriculum">
                    Browse All Pathways
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <div className="space-y-4">
              {recentProjects.map((project) => (
                <Card key={project.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                          {project.status === "completed" ? (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          ) : (
                            <Code className="h-5 w-5" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold">{project.title}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="secondary" className={getDifficultyColor(project.difficulty)}>
                              {project.difficulty}
                            </Badge>
                            <Badge variant="secondary" className={getStatusColor(project.status)}>
                              {project.status === "in-progress" ? "In Progress" : 
                               project.status === "completed" ? "Completed" : "Not Started"}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        {project.status === "in-progress" && (
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground">Progress</div>
                            <div className="font-medium">{project.progress}%</div>
                          </div>
                        )}
                        {project.status === "completed" && (
                          <div className="text-sm text-muted-foreground">
                            {project.completedAt}
                          </div>
                        )}
                        <Button variant="outline" size="sm" asChild>
                          <Link to={`/project/${project.id}`}>
                            {project.status === "not-started" ? "Start" : "View"}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Discover New Projects</CardTitle>
                <CardDescription>
                  Challenge yourself with hands-on coding projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <Link to="/projects">
                    Browse All Projects
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className={achievement.earned ? "" : "opacity-60"}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${
                        achievement.earned ? "bg-gradient-hero text-white" : "bg-muted"
                      }`}>
                        {achievement.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        {achievement.earned && (
                          <Badge variant="secondary" className="mt-2 bg-green-500/10 text-green-700">
                            Earned
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;