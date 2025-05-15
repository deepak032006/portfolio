import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectDetailProps {
  isOpen?: boolean;
  onClose?: () => void;
  project?: {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    technologies: string[];
    images: string[];
    liveUrl?: string;
    githubUrl?: string;
  };
}

const ProjectDetail = ({
  isOpen = true,
  onClose = () => {},
  project = {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with user authentication, product management, and payment processing.",
    longDescription:
      "This comprehensive e-commerce solution features user authentication, product catalog management, shopping cart functionality, secure checkout with Stripe integration, order history, and an admin dashboard for inventory management. Built with React, Node.js, Express, and MongoDB, it demonstrates proficiency in full-stack development and third-party API integration.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe API",
      "JWT",
      "Redux",
      "Tailwind CSS",
    ],
    images: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      "https://images.unsplash.com/photo-1661956602868-6ae368943878?w=800&q=80",
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&q=80",
    ],
    liveUrl: "https://example.com/project",
    githubUrl: "https://github.com/username/project",
  },
}: ProjectDetailProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl bg-background p-0 overflow-hidden">
        <div className="relative w-full bg-background">
          <Carousel className="w-full">
            <CarouselContent>
              {project.images.map((image, index) => (
                <CarouselItem key={index}>
                  <motion.div
                    className="relative aspect-video w-full overflow-hidden rounded-t-lg"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        <DialogHeader className="px-6 pt-6">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">
              {project.title}
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <DialogDescription className="text-muted-foreground mt-2">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="px-6 py-4">
          <Separator className="my-4" />

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">About this project</h3>
              <p className="text-muted-foreground">{project.longDescription}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="flex justify-end gap-4">
            {project.githubUrl && (
              <Button
                variant="outline"
                className="gap-2 transition-all hover:scale-105"
                onClick={() => window.open(project.githubUrl, "_blank")}
              >
                <Github className="h-4 w-4" />
                View Code
              </Button>
            )}

            {project.liveUrl && (
              <Button
                className="gap-2 transition-all hover:scale-105"
                onClick={() => window.open(project.liveUrl, "_blank")}
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetail;
