import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Zap, Users, Trophy } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Code, label: "Projects Completed", value: "10+" },
    { icon: Zap, label: "Technologies Learned", value: "15+" },
    { icon: Users, label: "Team Collaborations", value: "10+" },
    { icon: Trophy, label: "Hackathons Participated", value: "5+" },
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

  return (
    <section
      id="about"
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
              About{" "}
              <span className="bg-gradient-to-r from-portfolio-gradient-start to-portfolio-gradient-end bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate about creating innovative solutions at the intersection
              of web development and blockchain technology.
            </p>
          </motion.div>

          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Text content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Final-Year BTech Student & Developer
              </h3>
              <p className="text-foreground/80 text-lg leading-relaxed">
                I'm currently pursuing my Bachelor's in Technology, specializing
                in Computer Science. My journey in software development began
                with curiosity about how websites work, and has evolved into a
                passion for building full-stack applications and exploring
                blockchain technology.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed">
              With hands-on experience in React, Node.js, Solidity, and modern web technologies, I specialize in building secure and scalable backend systems powered by microservices and blockchain. I enjoy solving complex challenges and have showcased my skills through multiple hackathons, including the Smart India Hackathon, along with various technical competitions.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open source projects, or collaborating with
                fellow developers on innovative solutions.
              </p>
            </motion.div>

            {/* Image placeholder */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative bg-gradient-to-br from-portfolio-gradient-start/10 to-portfolio-gradient-end/10 rounded-2xl p-8 lg:p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-gradient-start to-portfolio-gradient-end opacity-5 rounded-2xl" />
                <div className="relative z-10 text-center">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-portfolio-gradient-start/20 to-portfolio-gradient-end/20 rounded-full flex items-center justify-center mb-6">
                    <Code size={80} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">
                    Always Learning
                  </h4>
                  <p className="text-muted-foreground">
                    Constantly exploring new technologies and pushing the
                    boundaries of what's possible.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex p-3 bg-gradient-to-br from-portfolio-gradient-start/10 to-portfolio-gradient-end/10 rounded-xl mb-4">
                  <stat.icon size={24} className="text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
