// components/TypewriterText.js
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Animate from "./animate";

const TypewriterText = ({ text, className }: {
	text: string,
	className?: string,
}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const lastChars = text.slice(-15);
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText(lastChars.slice(0, index + 1));
      index++;

      if (index >= lastChars.length) clearInterval(interval);
    }, 100); // Adjust speed here (in ms)

    return () => clearInterval(interval);
  }, [text]);

  return (
    <Animate className={className}>
      {/* Non-animated part */}
      <span>{text.slice(0, -15)}</span>
      {/* Typing animation */}
        {displayedText}
    </Animate>
  );
};

export default TypewriterText;
