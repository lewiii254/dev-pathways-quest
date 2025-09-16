import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Curriculum from "./pages/Curriculum";
import Projects from "./pages/Projects";
import Contribute from "./pages/Contribute";
import NotFound from "./pages/NotFound";
import PathwayDetail from "./pages/PathwayDetail";
import ProjectDetail from "./pages/ProjectDetail";
import LessonDetail from "./pages/LessonDetail";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";

import Docs from "./pages/Docs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/pathway/:pathwayId" element={<PathwayDetail />} />
          <Route
            path="/pathway/:pathwayId/lesson/:lessonId"
            element={<LessonDetail />}
          />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/docs" element={<Docs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
