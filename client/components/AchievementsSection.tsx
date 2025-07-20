import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Trophy, Award, Medal, ExternalLink, Download, Eye } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
  certificate?: string;
  icon: any;
}

export default function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const achievements: Achievement[] = [
    {
      id: "1",
      title: "  INNOVATE X 4.O Hackathon 2025",
      description: "Participated in the national-level hackathon focusing on innovative solutions for healthcare management. Developed a comprehensive healthcare management system using modern web technologies.",
      category: "Hackathon",
      date: "2025",
      image: "/InnovateX.svg",
      certificate: "/Innovate.pdf",
      icon: Trophy,
    },
    {
      id: "2",
      title: "TSS Hackathon Winner",
      description: "1st place winner in the Technical Student Society hackathon for developing a blockchain-based voting system. Implemented secure, transparent voting mechanisms using smart contracts.",
      category: "Competition",
      date: "2023",
      image: "/placeholder.svg",
      certificate: "/Resume 2025.pdf",
      icon: Award,
    },
    {
      id: "3",
      title: "Best Project Award",
      description: "Received recognition for outstanding project work in Web Development and Blockchain Technology. Demonstrated excellence in full-stack development and innovative problem-solving.",
      category: "Academic",
      date: "2023",
      image: "/placeholder.svg",
      certificate: "/Resume 2025.pdf",
      icon: Medal,
    },
    {
      id: "4",
      title: "Web Development Certification",
      description: "Completed comprehensive web development course covering modern frameworks, responsive design, and best practices. Mastered React, Node.js, and database management.",
      category: "Certification",
      date: "2023",
      image: "/placeholder.svg",
      certificate: "/Resume 2025.pdf",
      icon: Award,
    },
    {
      id: "5",
      title: "Blockchain Technology Course",
      description: "Advanced certification in blockchain technology and smart contract development. Gained expertise in Ethereum, Solidity, and decentralized applications.",
      category: "Certification",
      date: "2023",
      image: "/placeholder.svg",
      certificate: "/Resume 2025.pdf",
      icon: Medal,
    },
    {
      id: "6",
      title: "Data Science Excellence",
      description: "Achieved excellence in data science and machine learning projects. Developed predictive models and data visualization solutions for real-world problems.",
      category: "Academic",
      date: "2023",
      image: "/placeholder.svg",
      certificate: "/Resume 2025.pdf",
      icon: Trophy,
    },
  ];

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

  const handleImageClick = (achievement: Achievement) => {
    setSelectedAchievement(achievement);
  };

  const closeModal = () => {
    setSelectedAchievement(null);
  };

  return (
    <section id="achievements" ref={ref} className="py-20 lg:py-32">
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
              My{" "}
              <span className="bg-gradient-to-r from-portfolio-gradient-start to-portfolio-gradient-end bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Recognition, certifications, and milestones that showcase my journey in technology and development.
            </p>
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                className="group bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="w-full h-full bg-gradient-to-br from-portfolio-gradient-start/20 to-portfolio-gradient-end/20 flex items-center justify-center cursor-pointer"
                    onClick={() => handleImageClick(achievement)}
                  >
                    <div className="text-center">
                      <achievement.icon size={48} className="text-primary mb-2" />
                      <p className="text-sm text-muted-foreground">Click to view</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <Eye size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {achievement.category}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {achievement.date}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {achievement.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleImageClick(achievement)}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                    >
                      <Eye size={16} />
                      View
                    </button>
                    {achievement.certificate && (
                      <a
                        href={achievement.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-3 py-2 text-sm border border-border rounded-lg hover:bg-muted transition-colors"
                      >
                        <Download size={16} />
                        Cert
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <a
              href="/achievements"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-portfolio-gradient-start to-portfolio-gradient-end text-white px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 font-medium"
            >
              View All Achievements
              <ExternalLink size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedAchievement && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-4xl w-full bg-background rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{selectedAchievement.title}</h3>
                  <p className="text-muted-foreground">{selectedAchievement.category} • {selectedAchievement.date}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="aspect-video bg-gradient-to-br from-portfolio-gradient-start/20 to-portfolio-gradient-end/20 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <selectedAchievement.icon size={64} className="text-primary mb-4" />
                  <p className="text-muted-foreground">Certificate/Image Preview</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">
                {selectedAchievement.description}
              </p>

              {/* Modal Actions */}
              <div className="flex gap-3">
                {selectedAchievement.certificate && (
                  <a
                    href={selectedAchievement.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Download size={16} />
                    Download Certificate
                  </a>
                )}
                <button
                  onClick={closeModal}
                  className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
} 