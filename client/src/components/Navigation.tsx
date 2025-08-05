import { motion } from "framer-motion";
import { Sun, Moon, Menu, Clock } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { AnimatedText } from "./AnimatedText";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#favorites", label: "Favorites" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
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

  const themeOrder = ["dark", "system", "light"];
  const themeIcons = [
    <Moon key="moon" className="h-5 w-5" />, 
    <Clock key="clock" className="h-5 w-5" />, 
    <Sun key="sun" className="h-5 w-5" />
  ];
  const themeColors = [
    "bg-gradient-to-br from-gray-700 to-gray-900",
    "bg-gradient-to-br from-gray-200 to-gray-400",
    "bg-gradient-to-br from-yellow-100 to-white"
  ];
  const currentThemeIndex = themeOrder.indexOf(theme);
  const nextTheme = () => themeOrder[(currentThemeIndex + 1) % themeOrder.length];
  const toggleTheme = () => setTheme(nextTheme());

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
          <div className="flex items-center space-x-3">
            {/* Circular profile photo */}
            <motion.div 
              className="relative flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/MyDP.JPG"
                alt="Om Parihar Profile"
                className="w-12 h-12 rounded-full border-2 border-primary glowing-border animate-pulse-slow object-cover"
                data-testid="profile-image"
              />
            </motion.div>
            <div className="text-xl font-bold flex items-center">
              <AnimatedText text="Om Parihar" />
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

          {/* Theme Toggle - 3-Way Switch */}
          <Button
            variant="outline"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative h-12 w-36 rounded-full bg-gradient-to-r from-blue-100 via-gray-100 to-yellow-100 dark:from-gray-800 dark:via-gray-700 dark:to-blue-900 border-2 border-primary/30 hover:border-primary/50 transition-all duration-500 p-1 overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary"
            data-testid="theme-toggle"
            tabIndex={0}
          >
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-gray-200 to-yellow-200 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 opacity-40 transition-opacity duration-500 pointer-events-none" />
            {/* Background icons (always in same place) */}
            <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
              <Moon className={`h-4 w-4 transition-opacity duration-300 ${theme === "dark" ? "opacity-100 text-blue-300" : "opacity-40 text-gray-400"}`} />
              <Clock className={`h-4 w-4 transition-opacity duration-300 ${theme === "system" ? "opacity-100 text-gray-600" : "opacity-40 text-gray-400"}`} />
              <Sun className={`h-4 w-4 transition-opacity duration-300 ${theme === "light" ? "opacity-100 text-yellow-500" : "opacity-40 text-gray-400"}`} />
            </div>
            {/* Sliding indicator */}
            <motion.div
              className={`absolute top-1 h-8 w-8 rounded-full shadow-lg flex items-center justify-center ${themeColors[currentThemeIndex]}`}
              animate={{ x: currentThemeIndex * 50 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              style={{ left: 2 }}
            >
              {themeIcons[currentThemeIndex]}
            </motion.div>
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
