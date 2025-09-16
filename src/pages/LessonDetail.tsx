import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, ArrowRight, Clock, BookOpen, CheckCircle } from "lucide-react";

const LessonDetail = () => {
  const { pathwayId, lessonId } = useParams<{ pathwayId: string; lessonId: string }>();
  
  // Mock data - in real app this would come from API
  const lesson = {
    id: lessonId,
    title: "Introduction to HTML",
    description: "Learn the basics of HTML structure and semantic elements",
    duration: "45 minutes",
    pathwayTitle: "Web Development Fundamentals",
    lessonNumber: 1,
    totalLessons: 45,
    content: {
      introduction: `
# Introduction to HTML

HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a webpage using elements and tags.

## What You'll Learn

In this lesson, you'll discover:
- The basic structure of an HTML document
- Common HTML elements and their purposes
- How to create semantic markup
- Best practices for writing clean HTML

## Why HTML Matters

HTML is the foundation of every website. Understanding HTML is essential for:
- Creating accessible web content
- Building a solid foundation for CSS and JavaScript
- Following web standards and best practices
      `,
      theory: `
# HTML Document Structure

Every HTML document follows a basic structure:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Title</title>
</head>
<body>
    <!-- Your content goes here -->
</body>
</html>
\`\`\`

## Key Elements

- **\`<!DOCTYPE html>\`**: Declares the document type
- **\`<html>\`**: Root element of the page
- **\`<head>\`**: Contains metadata about the document
- **\`<body>\`**: Contains the visible content
      `,
      practice: `
# Hands-On Practice

Try creating your first HTML document:

## Exercise 1: Basic Structure

Create an HTML file with:
1. Proper DOCTYPE declaration
2. HTML root element with language attribute
3. Head section with title and meta tags
4. Body section with a heading and paragraph

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is my first HTML paragraph!</p>
</body>
</html>
\`\`\`

## Exercise 2: Semantic Elements

Add these semantic elements to your page:
- \`<header>\` for the top section
- \`<main>\` for the main content
- \`<footer>\` for the bottom section
      `
    },
    quiz: [
      {
        question: "What does HTML stand for?",
        options: [
          "HyperText Markup Language",
          "High Tech Modern Language", 
          "Home Tool Markup Language",
          "Hyperlink and Text Markup Language"
        ],
        correct: 0
      },
      {
        question: "Which element is the root of an HTML document?",
        options: ["<body>", "<head>", "<html>", "<title>"],
        correct: 2
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to={`/pathway/${pathwayId}`}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Pathway
              </Link>
            </Button>
            <div className="text-sm text-muted-foreground">
              Lesson {lesson.lessonNumber} of {lesson.totalLessons}
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              Previous
            </Button>
            <Button size="sm" className="bg-gradient-hero hover:opacity-90">
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Progress</span>
            <span className="text-sm text-muted-foreground">
              {Math.round((parseInt(lessonId || "1") / lesson.totalLessons) * 100)}%
            </span>
          </div>
          <Progress 
            value={(parseInt(lessonId || "1") / lesson.totalLessons) * 100} 
            className="h-2" 
          />
        </div>

        {/* Lesson Header */}
        <div className="mb-8">
          <div className="text-sm text-muted-foreground mb-2">
            {lesson.pathwayTitle}
          </div>
          <h1 className="text-4xl font-bold mb-4">{lesson.title}</h1>
          <p className="text-xl text-muted-foreground mb-4">
            {lesson.description}
          </p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{lesson.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <BookOpen className="h-4 w-4" />
              <span>Reading & Practice</span>
            </div>
          </div>
        </div>

        {/* Lesson Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <Tabs defaultValue="learn" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="learn">Learn</TabsTrigger>
                <TabsTrigger value="practice">Practice</TabsTrigger>
                <TabsTrigger value="quiz">Quiz</TabsTrigger>
              </TabsList>
              
              <TabsContent value="learn" className="space-y-6">
                <Card>
                  <CardContent className="p-8">
                    <div className="prose prose-slate max-w-none">
                      <div dangerouslySetInnerHTML={{ 
                        __html: lesson.content.introduction.replace(/\n/g, '<br/>') +
                               lesson.content.theory.replace(/\n/g, '<br/>')
                      }} />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="practice" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Hands-On Practice</CardTitle>
                    <CardDescription>
                      Apply what you've learned with these practical exercises
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-slate max-w-none">
                      <div dangerouslySetInnerHTML={{ 
                        __html: lesson.content.practice.replace(/\n/g, '<br/>')
                      }} />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="quiz" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Knowledge Check</CardTitle>
                    <CardDescription>
                      Test your understanding with these questions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {lesson.quiz.map((question, index) => (
                      <div key={index} className="space-y-3">
                        <h3 className="font-semibold">
                          Question {index + 1}: {question.question}
                        </h3>
                        <div className="space-y-2">
                          {question.options.map((option, optionIndex) => (
                            <Button
                              key={optionIndex}
                              variant="outline"
                              className="w-full justify-start text-left h-auto p-4 whitespace-normal"
                            >
                              {String.fromCharCode(65 + optionIndex)}. {option}
                            </Button>
                          ))}
                        </div>
                      </div>
                    ))}
                    <Button className="w-full bg-gradient-hero hover:opacity-90">
                      Submit Quiz
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Lesson Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Introduction Read</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <div className="h-4 w-4 border border-muted-foreground rounded-full" />
                  <span>Practice Exercises</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <div className="h-4 w-4 border border-muted-foreground rounded-full" />
                  <span>Complete Quiz</span>
                </div>
                <Button size="sm" className="w-full" variant="outline">
                  Mark as Complete
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Up Next</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm">
                    <div className="font-medium">HTML Forms and Input Elements</div>
                    <div className="text-muted-foreground">60 minutes</div>
                  </div>
                  <Button size="sm" className="w-full bg-gradient-hero hover:opacity-90">
                    Continue to Next Lesson
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LessonDetail;