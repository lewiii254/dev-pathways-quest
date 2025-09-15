import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Code, Star, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  language: string;
  tags: string[];
  rating: number;
  completions: number;
  image?: string;
}

const ProjectCard = ({
  title,
  description,
  difficulty,
  duration,
  language,
  tags,
  rating,
  completions,
  image,
}: ProjectCardProps) => {
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
    <Card className="group hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
              {title}
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className={getDifficultyColor(difficulty)}>
                {difficulty}
              </Badge>
              <Badge variant="outline">{language}</Badge>
            </div>
          </div>
        </div>
        <CardDescription className="text-sm mt-2 line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-1">
          {tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{tags.length - 3}
            </Badge>
          )}
        </div>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>{rating}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Code className="h-4 w-4" />
            <span>{completions} completed</span>
          </div>
        </div>
        
        <Button className="w-full" variant="outline">
          View Project
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;