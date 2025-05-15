import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

interface ProjectsGridProps {
  projects?: Project[];
  onProjectClick?: (project: Project) => void;
  isPreview?: boolean;
}

const ProjectsGrid = ({
  projects = [
    {
      id: "1",
      title: "Chat-app",
      description:
        "A full-stack platform with user authentication, build real time chat application, integrated socket.io to enable instant message ",
      image:
        "https://camo.githubusercontent.com/692a53f74a76bc7e1efdc716ee29af71eaf870eeff66a5a6c8671af672847d9b/68747470733a2f2f696d672e6672656570696b2e636f6d2f7072656d69756d2d766563746f722f636861742d6170702d6c6f676f2d64657369676e2d74656d706c6174652d63616e2d62652d757365642d69636f6e2d636861742d6170706c69636174696f6e2d6c6f676f5f3630353931302d313732342e6a7067",
      technologies: ["React", "Javascript","tailwind css", "Node.js", "Express", "MongoDB", "socket.io"],
      demoUrl: "https://chat-app-iota-ruddy-13.vercel.app/",
      githubUrl:"https://github.com/deepak032006/chat-app",
    },
    {
      id: "2",
      title: "recipe web App",
      description:
        "	Developed a simple and responsive web application to search for recipes using a public Food API.user interface enhancements with vanilla JavaScript.",
      image:
        "data:image/png;base64,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",
      technologies: ["Html","Css","Javascript"],
      demoUrl: "https://recipe-finder-sand-five.vercel.app/",
      githubUrl: "https://github.com/deepak032006/recipe-finder",
    },
    {
      id: "3",
      title: "E-commerce website ",
      description:
        "This is an eCommerce website where users can browse various products, add them to their cart, and place orders through secure online payment. It includes features like user login/registration, detailed product pages, a review system, and order tracking. The website is fully responsive and works smoothly on both mobile and desktop devices.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdKsZ8ZNxd0MNgesKWozYpEUxJnCYVqu0Tg&s",
      technologies: ["React+Vite", "Javascript","tailwind css", "Node.js", "Express", "MongoDB"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/deepak032006/E-commerce",
    },
    // {
    //   id: "4",
    //   title: "Weather Application",
    //   description:
    //     "A weather application that provides real-time weather data and forecasts for locations worldwide.",
    //   image:
    //     "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
    //   technologies: ["React", "OpenWeather API", "Tailwind CSS"],
    //   demoUrl: "https://example.com",
    //   githubUrl: "https://github.com/example/project",
    // },
  ],
  onProjectClick = () => {},
  isPreview = false,
}: ProjectsGridProps) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const displayedProjects = isPreview ? projects.slice(0, 3) : projects;

  return (
    <div className="w-full bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => onProjectClick(project)}
              className="cursor-pointer"
            >
              <Card className="h-full overflow-hidden border-2 hover:border-primary transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex justify-between mt-4"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center gap-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        onProjectClick(project);
                      }}
                    >
                      <Eye size={16} />
                      Details
                    </Button>
                    <div className="flex gap-2">
                      {project.demoUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex items-center gap-1"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.demoUrl, "_blank");
                          }}
                        >
                          <ExternalLink size={16} />
                          Demo
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex items-center gap-1"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, "_blank");
                          }}
                        >
                          <Github size={16} />
                          Code
                        </Button>
                      )}
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {isPreview && projects.length > 3 && (
          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              View All Projects
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsGrid;
