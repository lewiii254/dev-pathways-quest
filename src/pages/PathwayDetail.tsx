import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Clock, Users, BookOpen, Play, CheckCircle, Lock } from "lucide-react";

const PathwayDetail = () => {
  const { pathwayId } = useParams<{ pathwayId: string }>();
  
  // Mock data - in real app this would come from API
  const pathway = {
    id: pathwayId,
    title: "Web Development Fundamentals",
    description: "Learn HTML, CSS, and JavaScript from scratch. Build responsive websites and understand web development basics.",
    difficulty: "Beginner" as const,
    duration: "8-12 weeks",
    totalLessons: 45,
    students: 8432,
    progress: 0,
    lessons: [
      {
        id: 1,
        title: "Introduction to HTML",
        description: "Learn the basics of HTML structure and semantic elements",
        duration: "45 minutes",
        completed: false,
        locked: false,
        type: "lesson"
      },
      {
        id: 2,
        title: "HTML Forms and Input Elements",
        description: "Master form creation and user input handling",
        duration: "60 minutes", 
        completed: false,
        locked: false,
        type: "lesson"
      },
      {
        id: 3,
        title: "CSS Fundamentals",
        description: "Styling web pages with CSS properties and selectors",
        duration: "75 minutes",
        completed: false,
        locked: true,
        type: "lesson"
      },
      {
        id: 4,
        title: "HTML & CSS Quiz",
        description: "Test your knowledge of HTML and CSS concepts",
        duration: "20 minutes",
        completed: false,
        locked: true,
        type: "quiz"
      },
      {
        id: 5,
        title: "Build Your First Webpage",
        description: "Create a complete webpage using HTML and CSS",
        duration: "2 hours",
        completed: false,
        locked: true,
        type: "project"
      }
    ]
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "lesson":
        return "bg-primary/10 text-primary";
      case "quiz":
        return "bg-warning/10 text-warning";
      case "project":
        return "bg-accent/10 text-accent";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "lesson":
        return <Play className="h-4 w-4" />;
      case "quiz":
        return <BookOpen className="h-4 w-4" />;
      case "project":
        return <Clock className="h-4 w-4" />;
      default:
        return <Play className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/curriculum">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Curriculum
            </Link>
          </Button>
        </div>

        {/* Pathway Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Badge variant="secondary" className="mb-2">
                {pathway.difficulty}
              </Badge>
              <h1 className="text-4xl font-bold mb-4">{pathway.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">
                {pathway.description}
              </p>
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{pathway.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <BookOpen className="h-4 w-4" />
                <span>{pathway.totalLessons} lessons</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{pathway.students.toLocaleString()} students</span>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Your Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Completed</span>
                  <span>{pathway.progress}%</span>
                </div>
                <Progress value={pathway.progress} className="h-2" />
              </div>
              <Button className="w-full bg-gradient-hero hover:opacity-90">
                Continue Learning
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Lessons List */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Course Content</h2>
          <div className="space-y-4">
            {pathway.lessons.map((lesson, index) => (
              <Card key={lesson.id} className={`transition-all duration-200 ${
                lesson.locked ? 'opacity-60' : 'hover:shadow-md cursor-pointer'
              }`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                        {lesson.completed ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : lesson.locked ? (
                          <Lock className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          getTypeIcon(lesson.type)
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-semibold">{lesson.title}</h3>
                          <Badge variant="secondary" className={getTypeColor(lesson.type)}>
                            {lesson.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{lesson.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                      {!lesson.locked && (
                        <Button variant="outline" size="sm" asChild>
                          <Link to={`/pathway/${pathwayId}/lesson/${lesson.id}`}>
                            {lesson.completed ? "Review" : "Start"}
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Next Steps */}
        <section className="mt-16 bg-gradient-hero/5 rounded-2xl p-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of students already learning this pathway. Start with the first lesson and build your skills step by step.
            </p>
            <Button size="lg" className="bg-gradient-hero hover:opacity-90" asChild>
              <Link to={`/pathway/${pathwayId}/lesson/1`}>
                <Play className="mr-2 h-5 w-5" />
                Start First Lesson
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PathwayDetail;