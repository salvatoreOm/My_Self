import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: "bounce" | "float" | "typewriter";
}

export function AnimatedText({ text, className = "", delay = 0, type = "bounce" }: AnimatedTextProps) {
  const letters = text.split("");

  if (type === "typewriter") {
    return (
      <motion.div
        className={`typewriter ${className}`}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 3, delay }}
      >
        {text}
      </motion.div>
    );
  }

  return (
    <div className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className={`inline-block ${type === "bounce" ? "bouncing-letter" : "floating-text"}`}
          style={{
            "--floating-delay": `${delay + index * 0.1}s`,
          } as React.CSSProperties}
          whileHover={{
            scale: 1.2,
            color: "hsl(var(--primary))",
            transition: { duration: 0.2 },
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
}
