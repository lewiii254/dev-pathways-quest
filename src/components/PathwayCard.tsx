import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock, Users, BookOpen } from "lucide-react";

interface PathwayCardProps {
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  lessons: number;
  students: number;
  progress?: number;
  icon: React.ReactNode;
}

const PathwayCard = ({
  title,
  description,
  difficulty,
  duration,
  lessons,
  students,
  progress = 0,
  icon,
}: PathwayCardProps) => {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-accent/10 text-accent hover:bg-accent/20";
      case "Intermediate":
        return "bg-warning/10 text-warning hover:bg-warning/20";
      case "Advanced":
        return "bg-destructive/10 text-destructive hover:bg-destructive/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="group hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-hero">
              {icon}
            </div>
            <div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                {title}
              </CardTitle>
              <Badge variant="secondary" className={getDifficultyColor(difficulty)}>
                {difficulty}
              </Badge>
            </div>
          </div>
        </div>
        <CardDescription className="text-base mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <BookOpen className="h-4 w-4" />
            <span>{lessons} lessons</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{students.toLocaleString()}</span>
          </div>
        </div>
        
        {progress > 0 && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
        
        <Button className="w-full bg-gradient-hero hover:opacity-90">
          {progress > 0 ? "Continue Learning" : "Start Pathway"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PathwayCard;