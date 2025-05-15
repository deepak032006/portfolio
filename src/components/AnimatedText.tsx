import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  type?: "typing" | "fadeIn" | "highlight" | "bounce";
  className?: string;
  delay?: number;
  duration?: number;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  color?: string;
}

const AnimatedText = ({
  text = "Hello World",
  type = "typing",
  className = "",
  delay = 0,
  duration = 0.05,
  tag = "h1",
  color = "text-primary",
}: AnimatedTextProps) => {
  const [displayText, setDisplayText] = useState("");

  // Typing effect
  useEffect(() => {
    if (type === "typing") {
      let currentIndex = 0;
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          if (currentIndex <= text.length) {
            setDisplayText(text.substring(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(interval);
          }
        }, duration * 1000);

        return () => clearInterval(interval);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [text, type, delay, duration]);

  // Render different animation types
  const renderAnimatedText = () => {
    switch (type) {
      case "typing":
        return (
          <div className={`${className} ${color} bg-background`}>
            {displayText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-[2px] h-[1em] ml-1 bg-current"
            ></motion.span>
          </div>
        );

      case "fadeIn":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay, duration: 0.8 }}
            className={`${className} ${color} bg-background`}
          >
            {text}
          </motion.div>
        );

      case "highlight":
        return (
          <motion.div
            className={`${className} relative inline-block ${color} bg-background`}
          >
            {text}
            <motion.span
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay, duration: 0.8 }}
              className="absolute bottom-0 left-0 h-[6px] bg-primary/20 -z-10"
            ></motion.span>
          </motion.div>
        );

      case "bounce":
        return (
          <div className={`${className} ${color} bg-background`}>
            {text.split("").map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  delay: delay + index * 0.05,
                  duration: 0.5,
                  repeat: 0,
                  type: "spring",
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
        );

      default:
        return (
          <div className={`${className} ${color} bg-background`}>{text}</div>
        );
    }
  };

  // Render with the appropriate HTML tag
  const Tag = tag;
  return <Tag className="bg-background">{renderAnimatedText()}</Tag>;
};

export default AnimatedText;
