import React from "react";
import { motion } from "framer-motion";

const sections = [
  { 
    id: "#", 
    label: "Home", 
    icon: "🏠",
  },
  { 
    id: "#about", 
    label: "About", 
    icon: "🐦",
  },
  { 
    id: "#games", 
    label: "Games", 
    icon: "🎮",
  },
  { 
    id: "#footer", 
    label: "Contact", 
    icon: "💌",
  },
];

export default function Nav() {

  return (
    <motion.nav
      className="w-full flex justify-center items-center py-3 md:py-6 px-2 sm:px-4 md:px-12 bg-[hsl(var(--background))] fixed top-0 z-50"
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 2, duration: 0.7, type: 'spring', bounce: 0.5 }}
    >
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 justify-center">
        {sections.map((section, index) => (
          <motion.a
            key={section.label}
            href={section.id}
            className="relative hover:bg-primary -125 group flex items-center gap-1 sm:gap-2 px-3 sm:px-4 md:px-4 py-2 sm:py-2 rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 + index * 0.1 }}
          >
            {/* Background gradient on hover */}
            <motion.div
              className={`absolute inset-0 rounded-full bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
              layoutId="navBackground"
            />
            
            {/* Icon with simple hover animation */}
            <span className="text-2xl sm:text-xl hover:scale-115 transition-transform duration-300">
              {section.icon}
            </span>
            
            {/* Text with cute styling - hidden on mobile */}
            <span className="hidden sm:inline text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary-foreground))] font-medium text-sm md:text-base relative">
              {section.label}
              
              {/* Underline effect */}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-full"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </span>
          </motion.a>
        ))}
      </div>
      
      {/* Floating decorative elements - hidden on mobile for cleaner look */}
      <motion.div
        className="hidden sm:block absolute -top-2 left-1/4 text-yellow-400 text-xs opacity-60"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        ⭐
      </motion.div>
      
      <motion.div
        className="hidden sm:block absolute -top-1 right-1/4 text-pink-400 text-xs opacity-60"
        animate={{ 
          y: [0, -8, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        🌟
      </motion.div>
    </motion.nav>
  );
}
