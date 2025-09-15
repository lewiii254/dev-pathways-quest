import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, SortAsc } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");

  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "Create a responsive portfolio website showcasing your projects and skills using HTML, CSS, and JavaScript.",
      difficulty: "Beginner" as const,
      duration: "4-6 hours",
      language: "HTML/CSS/JS",
      tags: ["responsive", "portfolio", "css-grid", "animations"],
      rating: 4.8,
      completions: 2547,
      image: "/api/placeholder/400/200",
    },
    {
      title: "Weather Dashboard",
      description: "Build a weather application that fetches real-time data from APIs and displays beautiful weather cards.",
      difficulty: "Beginner" as const,
      duration: "6-8 hours",
      language: "JavaScript",
      tags: ["api", "fetch", "dom-manipulation", "responsive"],
      rating: 4.6,
      completions: 1823,
      image: "/api/placeholder/400/200",
    },
    {
      title: "Task Management App",
      description: "Create a full-featured todo application with React, including local storage and drag-and-drop functionality.",
      difficulty: "Intermediate" as const,
      duration: "12-15 hours",
      language: "React",
      tags: ["react", "hooks", "local-storage", "drag-drop"],
      rating: 4.9,
      completions: 1456,
      image: "/api/placeholder/400/200",
    },
    {
      title: "E-commerce Product Page",
      description: "Build a modern product page with shopping cart functionality, image gallery, and product variants.",
      difficulty: "Intermediate" as const,
      duration: "10-12 hours",
      language: "React",
      tags: ["e-commerce", "state-management", "components", "responsive"],
      rating: 4.7,
      completions: 987,
      image: "/api/placeholder/400/200",
    },
    {
      title: "Python Web Scraper",
      description: "Learn web scraping with Beautiful Soup and requests. Extract data from websites and save to CSV files.",
      difficulty: "Intermediate" as const,
      duration: "8-10 hours",
      language: "Python",
      tags: ["web-scraping", "beautifulsoup", "data-analysis", "csv"],
      rating: 4.5,
      completions: 756,
      image: "/api/placeholder/400/200",
    },
    {
      title: "REST API with Node.js",
      description: "Build a complete REST API with authentication, database integration, and comprehensive error handling.",
      difficulty: "Advanced" as const,
      duration: "20-25 hours",
      language: "Node.js",
      tags: ["api", "express", "mongodb", "authentication", "jwt"],
      rating: 4.8,
      completions: 543,
      image: "/api/placeholder/400/200",
    },
    {
      title: "Chat Application",
      description: "Create a real-time chat app with Socket.io, including private messages, rooms, and online status.",
      difficulty: "Advanced" as const,
      duration: "18-22 hours",
      language: "Node.js",
      tags: ["socket.io", "real-time", "websockets", "chat"],
      rating: 4.9,
      completions: 432,
      image: "/api/placeholder/400/200",
    },
    {
      title: "Data Visualization Dashboard",
      description: "Build interactive charts and graphs using D3.js or Chart.js to visualize complex datasets.",
      difficulty: "Advanced" as const,
      duration: "15-18 hours",
      language: "JavaScript",
      tags: ["d3js", "charts", "data-viz", "interactive"],
      rating: 4.6,
      completions: 321,
      image: "/api/placeholder/400/200",
    },
    {
      title: "Machine Learning Classifier",
      description: "Implement a machine learning model using scikit-learn to classify data and make predictions.",
      difficulty: "Advanced" as const,
      duration: "25-30 hours",
      language: "Python",
      tags: ["machine-learning", "scikit-learn", "classification", "pandas"],
      rating: 4.7,
      completions: 287,
      image: "/api/placeholder/400/200",
    },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesDifficulty = selectedDifficulty === "all" || project.difficulty === selectedDifficulty;
    const matchesLanguage = selectedLanguage === "all" || project.language.toLowerCase().includes(selectedLanguage.toLowerCase());
    
    return matchesSearch && matchesDifficulty && matchesLanguage;
  });

  const allLanguages = [...new Set(projects.map(p => p.language))];
  const allTags = [...new Set(projects.flatMap(p => p.tags))];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Project Repository</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Build real-world projects that teach you practical skills. Each project includes 
            step-by-step guides, starter code, and stretch goals to challenge yourself.
          </p>
        </div>

        {/* Filters Section */}
        <div className="bg-muted/30 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects, technologies, or concepts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-4">
              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger className="w-[140px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger className="w-[140px]">
                  <SortAsc className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Languages</SelectItem>
                  {allLanguages.map(lang => (
                    <SelectItem key={lang} value={lang.toLowerCase()}>{lang}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Popular Tags */}
          <div className="mt-4">
            <div className="text-sm font-medium mb-2">Popular Tags:</div>
            <div className="flex flex-wrap gap-2">
              {allTags.slice(0, 10).map(tag => (
                <Badge 
                  key={tag} 
                  variant="secondary" 
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => setSearchQuery(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">
              {filteredProjects.length} Project{filteredProjects.length !== 1 ? 's' : ''} Found
            </h2>
            {(searchQuery || selectedDifficulty !== "all" || selectedLanguage !== "all") && (
              <p className="text-muted-foreground">
                Filtered by: {searchQuery && `"${searchQuery}" `}
                {selectedDifficulty !== "all" && `${selectedDifficulty} `}
                {selectedLanguage !== "all" && `${selectedLanguage}`}
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-primary"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedDifficulty("all");
                    setSelectedLanguage("all");
                  }}
                >
                  Clear filters
                </Button>
              </p>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              No projects found matching your criteria.
            </div>
            <Button 
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setSelectedDifficulty("all");
                setSelectedLanguage("all");
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <section className="mt-16 bg-gradient-hero/5 rounded-2xl p-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-muted-foreground mb-6">
              Have an idea for a project that should be included? We welcome contributions from the community! 
              Submit your own project guides and help other learners grow.
            </p>
            <Button size="lg" className="bg-gradient-hero hover:opacity-90">
              Suggest a Project
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;