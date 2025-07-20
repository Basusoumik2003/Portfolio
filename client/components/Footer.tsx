import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Basusoumik2003",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/basusoumik/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "soumikbasu2003@gmail.com", label: "Email" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-portfolio-dark text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-gradient-to-r from-portfolio-gradient-start to-portfolio-gradient-end bg-clip-text text-transparent mb-4 cursor-pointer"
              >
                Soumik Basu
              </motion.button>
              <p className="text-gray-300 text-sm leading-relaxed">
                Blockchain & Full Stack Developer passionate about building
                innovative solutions that make a difference in the digital
                world.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { name: "About", href: "#about" },
                  { name: "Projects", href: "#projects" },
                  { name: "Technologies", href: "#technologies" },
                  { name: "Contact", href: "#contact" },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="block text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold mb-4">Let's Connect</h4>
              <div className="flex gap-4 mb-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors"
                  >
                    <social.icon size={18} />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                ))}
              </div>
              <p className="text-gray-300 text-sm">
                Available for freelance work and full-time opportunities.
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-300 text-sm flex items-center gap-1">
                Made with <Heart size={16} className="text-red-500" /> by Soumik
                Basu
              </p>
              <p className="text-gray-300 text-sm">
                © 2024 Soumik Basu. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
