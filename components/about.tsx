import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const aboutCards = [
  {
    image: "/images/art.jpg",
    alt: "Art & Design",
    title: "Art",
    description: "From sketches to cozy worlds—we bring the visuals to life.",
  },
  {
    image: "/images/gameplay.jpg",
    alt: "Programming",
    title: "Programming",
    description: "Building mechanics, fixing bugs, and making sure it all actually works.",
  },
  {
    image: "/images/community.jpg",
    alt: "Community",
    title: "Community",
    description: "Sharing our games, listening to players, and growing together.  Basically — we do it all.",
  },
];

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!mounted) {
    // Render nothing until after hydration to avoid mismatch
    return null;
  }

  return (
    <section
      id="about"
      className="md:py-24 px-6 md:px-20 text-center bg-[hsl(var(--background))]"
    >
      {/* Headline */}
      {isMobile ? (
        <h2 className="text-4xl md:text-6xl font-bold text-[hsl(var(--foreground))] mb-10 ">
          Our Studio, Your Playground
        </h2>
      ) : (
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-[hsl(var(--foreground))] mb-10 "
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.25, type: 'tween', ease: 'easeInOut' }}
        >
          Our Studio, Your Playground
        </motion.h2>
      )}

      {/* Subline */}
      {isMobile ? (
        <p className="text-2xl md:text-3xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto mb-10 leading-relaxed">
          Designing playful, stylish, and cozy experiences for players around the world.
        </p>
      ) : (
        <motion.p
          className="text-2xl md:text-3xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.25, type: 'tween', ease: 'easeInOut' }}
        >
          Designing playful, stylish, and cozy experiences for players around the world.
        </motion.p>
      )}

      {/* Showcase Grid */}
   
    </section>
  );
};

export default About;