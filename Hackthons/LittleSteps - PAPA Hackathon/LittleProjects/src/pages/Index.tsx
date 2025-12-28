import { useState, useRef, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FilterBar } from "@/components/FilterBar";
import { ProjectGrid } from "@/components/ProjectGrid";
import { VideoModal } from "@/components/VideoModal";
import { Footer } from "@/components/Footer";
import { projects, Project } from "@/data/projects";

const Index = () => {
  const [selectedAge, setSelectedAge] = useState<"all" | "5-10" | "10-15">("all");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState<"all" | "beginner" | "intermediate" | "advanced">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const projectsRef = useRef<HTMLDivElement>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Age filter
      if (selectedAge !== "all" && project.ageGroup !== selectedAge) {
        return false;
      }

      // Category filter
      if (selectedCategory !== "All" && project.category !== selectedCategory) {
        return false;
      }

      // Level filter (only applies to 10-15 age group projects)
      if (selectedLevel !== "all" && project.level !== selectedLevel) {
        return false;
      }

      return true;
    });
  }, [selectedAge, selectedCategory, selectedLevel]);

  const handleExplore = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleAgeChange = (age: "all" | "5-10" | "10-15") => {
    setSelectedAge(age);
    // Reset level filter when changing age
    if (age === "5-10") {
      setSelectedLevel("all");
    }
  };

  const getTitle = () => {
    if (selectedAge === "5-10") return "🧒 Projects for Ages 5-10";
    if (selectedAge === "10-15") return "🧑‍🎓 Projects for Ages 10-15";
    return "✨ All Projects";
  };

  const getSubtitle = () => {
    const count = filteredProjects.length;
    if (count === 1) return "1 project found";
    return `${count} projects to explore`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <Hero onExplore={handleExplore} />
        
        <div ref={projectsRef}>
          <FilterBar
            selectedAge={selectedAge}
            selectedCategory={selectedCategory}
            selectedLevel={selectedLevel}
            onAgeChange={handleAgeChange}
            onCategoryChange={setSelectedCategory}
            onLevelChange={setSelectedLevel}
          />

          <ProjectGrid
            projects={filteredProjects}
            onProjectClick={handleProjectClick}
            title={getTitle()}
            subtitle={getSubtitle()}
          />
        </div>
      </main>

      <Footer />

      <VideoModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Index;
