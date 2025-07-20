import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink, Filter, Info } from "lucide-react";
import ProjectModal from "./ProjectModal";

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

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project: Project) => {
    console.log("Opening modal for project:", project.title);
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  // Mock project data with detailed information
  const projects: Project[] = [
    {
      id: 1,
      title: "DeFi Trading Platform",
      description:
        "A decentralized finance platform built with React and Solidity for secure crypto trading and liquidity provision.",
      fullDescription:
        "A comprehensive decentralized finance (DeFi) trading platform that enables users to trade cryptocurrencies, provide liquidity, and earn rewards through automated market making. The platform features a modern React frontend with Web3 integration, smart contracts built with Solidity, and a robust backend infrastructure. Users can connect their wallets, swap tokens, add/remove liquidity, and track their portfolio performance in real-time.",
      category: "Blockchain",
      technologies: [
        "React",
        "Solidity",
        "Web3.js",
        "Hardhat",
        "TypeScript",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com/soumikbasu/defi-platform",
      demoUrl: "https://defi-platform-demo.vercel.app",
      imageUrl: "/placeholder.svg",
      features: [
        "Token swapping with automated market maker",
        "Liquidity provision and farming",
        "Real-time portfolio tracking",
        "Multi-wallet support (MetaMask, WalletConnect)",
        "Gas optimization and transaction batching",
        "Responsive design for mobile and desktop",
      ],
      challenges: [
        "Implementing secure smart contract architecture",
        "Handling complex Web3 interactions and error states",
        "Optimizing gas costs for various DeFi operations",
        "Building intuitive UX for complex blockchain concepts",
      ],
      learnings: [
        "Advanced Solidity patterns and security best practices",
        "Web3 frontend integration and state management",
        "DeFi protocol design and tokenomics",
        "Smart contract testing and deployment strategies",
      ],
      duration: "4 months",
      teamSize: "Solo project",
      status: "Completed",
    },
    {
      id: 2,
      title: "E-commerce Dashboard",
      description:
        "Full-stack e-commerce management system with real-time analytics, inventory management, and payment integration.",
      fullDescription:
        "A comprehensive e-commerce management dashboard built for modern online businesses. The platform provides administrators with powerful tools to manage products, track inventory, process orders, and analyze sales data. Features include real-time analytics, automated inventory alerts, integrated payment processing with Stripe, and a responsive design that works seamlessly across all devices.",
      category: "Web",
      technologies: [
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "Stripe",
        "Prisma",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com/soumikbasu/ecommerce-dashboard",
      demoUrl: "https://ecommerce-dashboard-demo.vercel.app",
      imageUrl: "/placeholder.svg",
      features: [
        "Real-time sales and inventory analytics",
        "Product catalog management with variants",
        "Order processing and fulfillment tracking",
        "Customer management and communication tools",
        "Integrated payment processing with Stripe",
        "Automated inventory alerts and restocking",
      ],
      challenges: [
        "Designing scalable database schema for complex e-commerce data",
        "Implementing real-time analytics without performance impact",
        "Building secure payment processing workflows",
        "Creating intuitive data visualization for business metrics",
      ],
      learnings: [
        "Advanced Next.js patterns including SSR and API routes",
        "Database optimization and query performance",
        "Payment gateway integration and security",
        "Real-time data synchronization techniques",
      ],
      duration: "3 months",
      teamSize: "Team of 3",
      status: "In Production",
    },
    {
      id: 3,
      title: "Smart Contract Auditor",
      description:
        "AI-powered tool for analyzing smart contracts and identifying potential security vulnerabilities and gas optimizations.",
      fullDescription:
        "An innovative AI-powered tool designed to automatically analyze Solidity smart contracts for security vulnerabilities, gas optimization opportunities, and code quality issues. The system uses machine learning models trained on thousands of audited contracts to identify common patterns and potential risks. It provides detailed reports with severity ratings, fix suggestions, and gas optimization recommendations.",
      category: "AI",
      technologies: [
        "Python",
        "TensorFlow",
        "Solidity",
        "Flask",
        "MongoDB",
        "Docker",
      ],
      githubUrl: "https://github.com/soumikbasu/smart-contract-auditor",
      imageUrl: "/placeholder.svg",
      features: [
        "Automated vulnerability detection using ML models",
        "Gas optimization analysis and recommendations",
        "Code quality scoring and best practice checks",
        "Detailed audit reports with severity ratings",
        "Integration with development workflows",
        "Historical analysis and trend tracking",
      ],
      challenges: [
        "Training ML models on diverse smart contract datasets",
        "Parsing and analyzing complex Solidity code structures",
        "Balancing accuracy with processing speed",
        "Creating meaningful severity ratings for different vulnerability types",
      ],
      learnings: [
        "Machine learning model training and optimization",
        "Static code analysis techniques",
        "Smart contract security patterns and anti-patterns",
        "Building scalable AI-powered developer tools",
      ],
      duration: "6 months",
      teamSize: "Solo project",
      status: "In Development",
    },
    {
      id: 4,
      title: "Healthcare Management System",
      description:
        "Digital health platform developed during  Hackathon for patient record management and haelt prediction with .",
      fullDescription:
        "A comprehensive digital healthcare platform developed during the Smart India Hackathon 2023. The system enables healthcare providers to manage patient records, schedule appointments, conduct virtual consultations, and track treatment outcomes. Features include secure patient data management, telemedicine capabilities with video calling, prescription management, and integration with healthcare analytics for population health insights.",
      category: "Hackathon",
      technologies: [
        "React",
        "Express",
        "MongoDB",
        "Socket.io",
        "Python",
        "TensorFlow",
        "REST API",
        "Node.js",
      ],
      githubUrl: "https://github.com/soumikbasu/healthcare-management",
      demoUrl: "https://hackathon-frontend-0pii.onrender.com",
      imageUrl: "image.png",
      features: [
        "Secure patient record management ",
        "Instant Emergency Access due to Login-free access",
        "User-controlled sharing",
        "Ensures privacy and consent-based data access",
        "Makes patient history portable and always available",
        "Stores prescriptions, summaries, test results securely",
        "AI based health prediction and suggetion"
      ],
      challenges: [
        "Implementing Ai model for health predition",
        "Building reliable Emergency calling functionality",
        "Creating intuitive interfaces for healthcare professionals",
        "Ensuring system reliability under high concurrent usage",
      ],
      learnings: [
        "Healthcare industry regulations and compliance requirements",
        "Real-time communication protocols and WebRTC",
        "Secure data handling and encryption techniques",
        "Rapid prototyping and development under time constraints",
      ],
      duration: "30 hours (Hackathon)",
      teamSize: "Team of 5",
      status: "Prototype",
    },
  ];

  const categories = ["All", "Web", "Blockchain", "AI", "Hackathon"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="projects" ref={ref} className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-portfolio-gradient-start to-portfolio-gradient-end bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A collection of projects showcasing my skills in web development,
              blockchain technology, and problem-solving.
            </p>
          </motion.div>

          {/* Filter buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border hover:border-primary/50 hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects grid */}
          <motion.div layout className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -5 }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  openProjectModal(project);
                }}
                className="group bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer"
              >
                {/* Project image */}
                <div className="relative h-48 bg-gradient-to-br from-portfolio-gradient-start/10 to-portfolio-gradient-end/10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-portfolio-gradient-start/20 to-portfolio-gradient-end/20 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary/30">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                  {/* Overlay with links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openProjectModal(project);
                      }}
                      className="p-3 bg-background/90 rounded-full hover:bg-background transition-colors"
                    >
                      <Info size={20} />
                    </button>
                    <a
                      href={project.githubUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="p-3 bg-background/90 rounded-full hover:bg-background transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        onClick={(e) => e.stopPropagation()}
                        className="p-3 bg-background/90 rounded-full hover:bg-background transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View more button */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <button className="px-8 py-3 border border-border rounded-lg hover:bg-muted transition-all duration-300 font-medium">
              View All Projects
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </section>
  );
}
