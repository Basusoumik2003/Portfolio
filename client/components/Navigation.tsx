import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface NavigationProps {
  activeSection?: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Technologies", href: "#technologies" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleResumeDownload = () => {
    // This would trigger the resume download
    const link = document.createElement("a");
    link.href = "/api/resume/download"; // Backend endpoint
    link.download = "Soumik_Basu_Resume.pdf";
    link.click();
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-portfolio-gradient-start to-portfolio-gradient-end bg-clip-text text-transparent"
            >
              SB
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.href.slice(1)
                    ? "text-primary"
                    : "text-foreground/70"
                }`}
              >
                {item.name}
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <ThemeToggle />
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              onClick={handleResumeDownload}
              className="bg-gradient-to-r from-portfolio-gradient-start to-portfolio-gradient-end text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center gap-2 text-sm font-medium"
            >
              <Download size={16} />
              Resume
            </motion.button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-md border-t border-border/50"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={handleResumeDownload}
              className="w-full mt-4 mx-4 bg-gradient-to-r from-portfolio-gradient-start to-portfolio-gradient-end text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium"
              style={{ width: "calc(100% - 2rem)" }}
            >
              <Download size={16} />
              Resume
            </button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
