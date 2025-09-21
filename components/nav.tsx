import React from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "#", label: "Home" },
  { id: "#about", label: "About" },
  { id: "#games", label: "Games" },
  { id: "#footer", label: "Contact" },
];

export default function Nav() {


  return (
    <motion.nav
      className="w-full md:gap-8 max-md:gap-4 flex justify-center items-center py-6 px-4 md:px-12 bg-[hsl(var(--background))] fixed top-0 z-50"
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 2, duration: 0.7, type: 'spring', bounce: 0.5 }}
    >
      {sections.map((section) => (
        <a
          key={section.label}
			href={section.id}
          className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary-foreground))] transition text-lg font-medium"
        >
          {section.label}
        </a>
      ))}
	  
    </motion.nav>
  );
}
