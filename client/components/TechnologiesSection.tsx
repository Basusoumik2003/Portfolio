import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSolidity } from "react-icons/si";
import { FaHardHat } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { SiTensorflow } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiNodejs } from "react-icons/di";
import { RiAngularjsFill } from "react-icons/ri";
import { SiEthers } from "react-icons/si";

interface Technology {
  name: string;
  category: string;
  proficiency: number;
  icon: React.ReactNode;
}

interface TechCategory {
  name: string;
  technologies: Technology[];
}

export default function TechnologiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techCategories: TechCategory[] = [
    {
      name: "Frontend",
      technologies: [
        { name: "React", category: "frontend", proficiency: 90, icon: <FaReact /> },
        { name: "Next.js", category: "frontend", proficiency: 50, icon: "▲" },
        {
          name: "TypeScript",
          category: "frontend",
          proficiency: 80,
          icon: <SiTypescript />,
        },
        {
          name: "Angular",
          category: "frontend",
          proficiency: 40,
          icon: <RiAngularjsFill />,
        },
        {
          name: "Tailwind CSS",
          category: "frontend",
          proficiency: 95,
          icon: <SiTailwindcss />,
        },
      ],
    },
    {
      name: "Backend",
      technologies: [
        { name: "JavaScript", category: "backend", proficiency: 80, icon: <IoLogoJavascript /> },
        { name: "Node.js", category: "backend", proficiency: 85, icon: <DiNodejs /> },
        { name: "Express", category: "backend", proficiency: 80, icon: <SiExpress /> },
        { name: "MongoDB", category: "backend", proficiency: 80, icon: <SiMongodb /> },
        {
          name: "PostgreSQL",
          category: "backend",
          proficiency: 50,
          icon: <BiLogoPostgresql />,
        },
      ],
    },
    {
      name: "Blockchain",
      technologies: [
        {
          name: "Solidity",
          category: "blockchain",
          proficiency: 50,
          icon: <SiSolidity />,
        },
        {
          name: " Ethers.js",
          category: "blockchain",
          proficiency: 75,
          icon: <SiEthers />,
        },
        {
          name: "Hardhat",
          category: "blockchain",
          proficiency: 40,
          icon: <FaHardHat />,
        },
        {
          name: "Ethereum",
          category: "blockchain",
          proficiency: 60,
          icon: <FaEthereum />          ,
        },
      ],
    },
    {
      name: "AI/ML & Tools",
      technologies: [
        { name: "Python", category: "ai", proficiency: 50, icon: <FaPython /> },
        { name: "TensorFlow", category: "ai", proficiency: 65, icon: <SiTensorflow /> },
        { name: "Git", category: "tools", proficiency: 90, icon: <FaGitSquare /> },
        { name: "Docker", category: "tools", proficiency: 70, icon: <FaDocker /> },
      ],
    },
    {
      name: "Other",
      technologies: [
        { name: "Java", category: "oops", proficiency: 80, icon: <FaJava />},
       
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        ease: "easeOut",
      },
    },
  };

  const ProgressBar = ({
    proficiency,
    delay,
  }: {
    proficiency: number;
    delay: number;
  }) => (
    <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: `${proficiency}%` } : { width: 0 }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-portfolio-gradient-start to-portfolio-gradient-end rounded-full"
      />
    </div>
  );

  return (
    <section
      id="technologies"
      ref={ref}
      className="py-20 lg:py-32 bg-portfolio-light-gray/50"
    >
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
                Technologies
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of the technologies I work with and my
              proficiency level in each area.
            </p>
          </motion.div>

          {/* Technologies grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 lg:p-8 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl lg:text-2xl font-semibold mb-6 text-primary">
                  {category.name}
                </h3>

                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{
                        duration: 0.6,
                        delay: categoryIndex * 0.2 + techIndex * 0.1,
                      }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{tech.icon}</span>
                          <span className="font-medium">{tech.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground font-medium">
                          {tech.proficiency}%
                        </span>
                      </div>
                      <ProgressBar
                        proficiency={tech.proficiency}
                        delay={categoryIndex * 0.2 + techIndex * 0.1 + 0.3}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Currently Learning */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-4">Currently Learning</h3>
            <p className="text-muted-foreground mb-6">
              Expanding my skillset with these cutting-edge technologies
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "React Native",
                "Kubernetes",
                "Machine Learning",
                "Web3 Development",
                
              ].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gradient-to-r from-portfolio-gradient-start/10 to-portfolio-gradient-end/10 border border-primary/20 rounded-full text-primary font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
