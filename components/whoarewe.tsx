import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WhoWeAre() {
  return (
    <motion.section
      id="who-we-are"
      className="py-32 px-6 md:px-20 bg-[hsl(var(--background))] flex flex-col md:flex-row items-center gap-12"
      initial={{ opacity: 0, y: 50 }}
        viewport={{ once: true }}

      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Text Column */}
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-5xl md:text-6xl font-bold text-[hsl(var(--primary-foreground))] mb-6">
          Who We Are
        </h2>
        <p className="text-xl md:text-2xl text-[hsl(var(--muted-foreground))] leading-relaxed">
          We were a bunch of lost students wandering through Athens, bored of our
          fields of study and dreaming of something more playful. Over late-night
          coffee and endless sketches, we found each other—and a shared passion for
          creating games that bring joy and cozy adventures to players everywhere.
        </p>
        <p className="text-xl md:text-2xl text-[hsl(var(--muted-foreground))] leading-relaxed mt-4">
          Today, we’re a small, close-knit indie studio, turning our little ideas
          into worlds you can explore and fall in love with.
        </p>
      </motion.div>

      {/* Image Column */}
      <motion.div
        className="md:w-1/2 flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <Image
          src="/images/2friends.jpg" // replace with your AI-generated image
          alt="Team brainstorming in a cozy café in Athens"
          width={600}
          height={600}
          className="rounded-3xl shadow-2xl object-cover"
        />
      </motion.div>
    </motion.section>
  );
}
