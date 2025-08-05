import { FloatingElements } from "@/components/FloatingElements";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FavoritesSection } from "@/components/FavoritesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { JourneySection } from "@/components/JourneySection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <FloatingElements />
      <Navigation />
      
      <main className="pt-0">
        <HeroSection />
        <FavoritesSection />
        <ProjectsSection />
        <JourneySection />
        <ContactSection />
      </main>

      <footer className="bg-card border-t border-border py-8 theme-transition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            Made with <span className="text-red-500 animate-pulse">❤️</span> by Om Parihar © 2024
          </p>
        </div>
      </footer>
    </div>
  );
}
