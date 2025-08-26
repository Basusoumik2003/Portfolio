import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

export default function HeroSection() {
  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-light-gray via-background to-portfolio-light-gray" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-portfolio-gradient-start/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-portfolio-gradient-end/20 rounded-full blur-3xl"
        />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="text-primary font-medium text-lg lg:text-xl">
              Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-portfolio-gradient-start to-portfolio-gradient-end bg-clip-text text-transparent">
              Soumik Basu
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl text-foreground/80 font-light">
              Blockchain & Full Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            Code is not just about solving problems — it’s about shaping the future with every solution
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center gap-6 mb-12"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/Basusoumik2003",
                label: "GitHub",
              },
              {
                icon:SiLeetcode ,
                href: "https://leetcode.com/u/basusoumik/",
                label: "LeetCode",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/basusoumik",
                label: "LinkedIn",
              },
              { icon: Mail, href: "mailto:soumikbasu2003@gmail.com", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-background/50 backdrop-blur-sm border border-border/50 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                <social.icon size={24} />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button
              onClick={scrollToNext}
              className="bg-gradient-to-r from-portfolio-gradient-start to-portfolio-gradient-end text-white px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 font-medium text-lg"
            >
              View My Work
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.querySelector("#contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-8 py-3 border border-border rounded-lg hover:bg-muted transition-all duration-300 font-medium text-lg"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToNext}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="p-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  );
}
