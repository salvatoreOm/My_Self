import { motion } from "framer-motion";
import { AnimatedText } from "./AnimatedText";
import { Timeline } from "./Timeline";
import { IndiaMap } from "./IndiaMap";

export function JourneySection() {
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

  return (
    <section id="journey" className="py-20 bg-card theme-transition">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          variants={itemVariants}
        >
          <AnimatedText text="My Journey" />
        </motion.h2>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-start"
          variants={itemVariants}
        >
          {/* Timeline Section */}
          <div>
            <Timeline />
          </div>

          {/* Interactive India Map */}
          <IndiaMap />
        </motion.div>
      </motion.div>
    </section>
  );
}
