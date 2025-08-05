import { motion } from "framer-motion";
import { Sun, Moon, Menu } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { AnimatedText } from "./AnimatedText";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#favorites", label: "Favorites" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Get in Touch" },
];

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 border-b border-border theme-transition ${
        isScrolled ? "bg-background/80 backdrop-blur-lg" : "bg-background/60"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            {/* Circular profile photo */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="https://pixabay.com/get/g6c198706c91177d7b78b7f680963c982c4db5738d2e7117e0e1397f950806493faa7d85d0925fac61e52170b4ca8bed7e1cafc2e567a0dbb101ad2db00e4f7de_1280.jpg"
                alt="Anna Sun Profile"
                className="w-12 h-12 rounded-full border-2 border-primary glowing-border animate-pulse-slow"
                data-testid="profile-image"
              />
            </motion.div>
            <div className="text-xl font-bold">
              <AnimatedText text="Anna Sun" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`nav-link transition-colors duration-300 font-medium ${
                  activeSection === link.href.substring(1)
                    ? "text-primary active"
                    : "text-muted-foreground hover:text-primary"
                }`}
                data-testid={`nav-${link.href.substring(1)}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="hover:bg-accent transition-colors duration-300"
            data-testid="theme-toggle"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-blue-500" />
            )}
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            data-testid="mobile-menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
