import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-2xl mx-auto"
            >
              {/* 404 Number */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-portfolio-gradient-start to-portfolio-gradient-end bg-clip-text text-transparent">
                  404
                </h1>
              </motion.div>

              {/* Error Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  Oops! Page Not Found
                </h2>
                <p className="text-lg text-muted-foreground">
                  The page you're looking for doesn't exist or has been moved.
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a
                  href="/"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-portfolio-gradient-start to-portfolio-gradient-end text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 font-medium"
                >
                  <Home size={18} />
                  Go Home
                </a>
                <button
                  onClick={() => window.history.back()}
                  className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg hover:bg-muted transition-all duration-300 font-medium"
                >
                  <ArrowLeft size={18} />
                  Go Back
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 