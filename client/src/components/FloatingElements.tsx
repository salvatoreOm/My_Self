import { motion } from "framer-motion";
import { Heart, Star, Code, Rocket } from "lucide-react";

const floatingElements = [
  { icon: Star, className: "text-yellow-400 text-2xl", position: { top: "10%", left: "10%" }, delay: 0 },
  { icon: Heart, className: "text-red-400 text-xl", position: { top: "20%", right: "20%" }, delay: 1 },
  { icon: Code, className: "text-blue-400 text-lg", position: { bottom: "20%", left: "20%" }, delay: 2 },
  { icon: Rocket, className: "text-purple-400 text-2xl", position: { bottom: "10%", right: "10%" }, delay: 3 },
];

export function FloatingElements() {
  return (
    <>
      {floatingElements.map(({ icon: Icon, className, position, delay }, index) => (
        <motion.div
          key={index}
          className={`floating-element ${className}`}
          style={position}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut",
          }}
        >
          <Icon />
        </motion.div>
      ))}
    </>
  );
}
