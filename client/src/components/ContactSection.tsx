import { motion } from "framer-motion";
import { AnimatedText } from "./AnimatedText";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";
import { useState, useEffect } from "react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "bt22eci012@iiitn.ac.in",
    href: "mailto:bt22eci012@iiitn.ac.in",
    color: "text-primary",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/salvatoreom/",
    color: "text-blue-600",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "Check out my code",
    href: "https://github.com/salvatoreOm",
    color: "text-foreground",
  },
];

export function ContactSection() {
  const [showProfessionalMessage, setShowProfessionalMessage] = useState(false);

  useEffect(() => {
    // Check if redirected from Professional Talk button
    const checkForProfessionalTalk = () => {
      if (window.location.hash === '#contact-professional') {
        setShowProfessionalMessage(true);
        // Remove the hash after showing the message
        window.history.replaceState(null, '', window.location.pathname);
        // Hide the message after 5 seconds
        setTimeout(() => setShowProfessionalMessage(false), 5000);
      }
    };

    checkForProfessionalTalk();
    window.addEventListener('hashchange', checkForProfessionalTalk);
    
    return () => window.removeEventListener('hashchange', checkForProfessionalTalk);
  }, []);

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
    "I'm", "always", "excited", "to", "connect", "with", "fellow", 
    "creators,", "entrepreneurs,", "and", "innovators!"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5">
      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8 text-foreground"
          variants={itemVariants}
        >
          <AnimatedText text="Let's Create Something Amazing" type="float" />
        </motion.h2>

        {/* Professional Talk Message */}
        {showProfessionalMessage && (
          <motion.div
            className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-lg p-6 mb-8 mx-auto max-w-md"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.6, repeat: 2 }}
                className="text-2xl mb-2"
              >
                💬
              </motion.div>
              <p className="text-lg font-semibold text-primary mb-2">
                Let's have a professional conversation! 🚀
              </p>
              <p className="text-sm text-muted-foreground">
                Contact via below options ⬇️
              </p>
            </div>
          </motion.div>
        )}

        <motion.p 
          className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
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

        {/* Contact methods */}
        <motion.div 
          className="grid sm:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              data-testid={`contact-${method.title.toLowerCase()}`}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <method.icon className={`h-8 w-8 mx-auto mb-4 ${method.color} group-hover:animate-bounce`} />
                  </motion.div>
                  <h3 className="font-semibold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground text-sm">{method.value}</p>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </motion.div>


      </motion.div>
    </section>
  );
}
