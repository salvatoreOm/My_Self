import { motion } from "framer-motion";
import { AnimatedText } from "./AnimatedText";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "om.parihar@example.com",
    href: "mailto:om.parihar@example.com",
    color: "text-primary",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "Connect professionally",
    href: "https://linkedin.com/in/omparihar",
    color: "text-blue-600",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "Check out my code",
    href: "https://github.com/omparihar",
    color: "text-foreground",
  },
];

export function ContactSection() {
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
                color: "#0080ff",
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

        {/* CTA */}
        <motion.div variants={itemVariants}>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 animate-pulse-slow"
            data-testid="get-in-touch-button"
          >
            <AnimatedText text="Get in Touch" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
