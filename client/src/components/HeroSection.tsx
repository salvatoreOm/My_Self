import { motion } from "framer-motion";
import { AnimatedText } from "./AnimatedText";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const words = [
    "I'm", "a", "passionate", "developer", "who", "loves", "building", 
    "innovative", "web", "applications", "and", "solving", "complex", "problems!"
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5" />
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          {/* Large profile photo */}
          <motion.div 
            className="relative mx-auto w-48 h-48 mb-8"
            variants={itemVariants}
          >
            <motion.img
              src="/MyDP.JPG"
              alt="Om Parihar - Developer"
              className="w-full h-full rounded-full border-4 border-primary glowing-border object-cover"
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              data-testid="hero-profile-image"
            />
            <motion.div 
              className="absolute -bottom-2 -right-2 bg-green-800 w-8 h-8 rounded-full border-4 border-background"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 text-foreground"
            variants={itemVariants}
          >
            <span className="text-foreground font-bold">
              <AnimatedText text="Hello, I'm Om !" type="float" className="text-foreground" />
            </span>
          </motion.h1>

          <motion.div 
            className="text-xl md:text-2xl text-foreground font-medium mb-8"
            variants={itemVariants}
          >
            Entrepreneur • Software Engineer • Singer
          </motion.div>

          {/* Animated description */}
          <motion.p 
            className="text-lg max-w-3xl mx-auto mb-12 leading-relaxed text-foreground"
            variants={itemVariants}
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-2 floating-text"
                style={{
                  "--floating-delay": `${index * 0.2}s`,
                } as React.CSSProperties}
                whileHover={{
                  scale: 1.1,
                  color: "hsl(var(--primary))",
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 animate-bounce-slow"
              data-testid="view-work-button"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              data-testid="professional-talk-button"
              onClick={() => {
                // Scroll to contact section with smooth behavior
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  // Set hash to trigger the message
                  window.location.hash = 'contact-professional';
                  // Smooth scroll to contact section
                  contactSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
            >
              Professional Talk?
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
