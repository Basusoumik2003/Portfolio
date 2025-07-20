import { X, Github, ExternalLink, Calendar, Users, Star } from "lucide-react";
import { useEffect } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  category: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl: string;
  features: string[];
  challenges: string[];
  learnings: string[];
  duration: string;
  teamSize: string;
  status: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!project || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative bg-background border border-border rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-background/80 backdrop-blur-md border-b border-border p-6 flex items-center justify-between z-10">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-gradient-to-br from-portfolio-gradient-start/10 to-portfolio-gradient-end/10 rounded-xl">
              <span className="text-2xl font-bold text-primary">
                {project.title.charAt(0)}
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {project.category}
                </span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-medium rounded-full">
                  {project.status}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-xl transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="p-6 space-y-8">
            {/* Project Image */}
            <div className="relative h-64 bg-gradient-to-br from-portfolio-gradient-start/10 to-portfolio-gradient-end/10 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-portfolio-gradient-start/20 to-portfolio-gradient-end/20 flex items-center justify-center">
                <span className="text-6xl font-bold text-primary/30">
                  {project.title.charAt(0)}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Project Links & Meta */}
            <div className="flex flex-wrap gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-lg hover:bg-muted transition-colors"
              >
                <Github size={16} />
                View Code
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
              <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg">
                <Calendar size={16} />
                {project.duration}
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg">
                <Users size={16} />
                {project.teamSize}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-semibold mb-4">About This Project</h3>
              <p className="text-foreground/80 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 bg-gradient-to-r from-portfolio-gradient-start/10 to-portfolio-gradient-end/10 border border-primary/20 rounded-lg text-primary font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Challenges Overcome
              </h3>
              <div className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground/80">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learnings */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Key Learnings</h3>
              <div className="space-y-3">
                {project.learnings.map((learning, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Star
                      size={16}
                      className="text-yellow-500 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-foreground/80">{learning}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
