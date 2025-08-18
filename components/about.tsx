import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="md:py-32 px-6 md:px-20 text-center bg-[hsl(var(--background))]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Headline */}
      <motion.h2
        className="text-4xl md:text-6xl font-bold text-[hsl(var(--foreground))] mb-10 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}

        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
       Our Studio, Your Playground
      </motion.h2>

      {/* Subline */}
      <motion.p
        className="text-2xl md:text-3xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto mb-10 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}

        transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
      >
        Designing playful, stylish, and cozy experiences for players around the world.
      </motion.p>

      {/* Showcase Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}

        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {/* Left card */}
<div className="flex flex-col justify-between rounded-3xl overflow-hidden shadow-xl bg-[hsl(var(--muted))] hover:scale-[1.02] transition-transform duration-700">
  <Image
    src="/images/art.jpg"
    alt="Art & Design"
    width={800}
    height={800}
    className="object-cover w-full h-72"
  />
  <div className="p-6 text-left">
    <h3 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-2">Art</h3>
    <p className="text-[hsl(var(--muted-foreground))]">
      From sketches to cozy worlds—we bring the visuals to life.
    </p>
  </div>
</div>

{/* Center card */}
<div className="flex flex-col justify-between rounded-3xl overflow-hidden shadow-xl bg-[hsl(var(--muted))] hover:scale-[1.02] transition-transform duration-700">
  <Image
    src="/images/gameplay.jpg"
    alt="Programming"
    width={800}
    height={800}
    className="object-cover w-full h-72"
  />
  <div className="p-6 text-left">
    <h3 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-2">Programming</h3>
    <p className="text-[hsl(var(--muted-foreground))]">
      Building mechanics, fixing bugs, and making sure it all actually works.
    </p>
  </div>
</div>

{/* Right card */}
<div className="flex flex-col justify-between rounded-3xl overflow-hidden shadow-xl bg-[hsl(var(--muted))] hover:scale-[1.02] transition-transform duration-700">
  <Image
    src="/images/community.jpg"
    alt="Community"
    width={800}
    height={800}
    className="object-cover w-full h-72"
  />
  <div className="p-6 text-left">
    <h3 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-2">Community</h3>
    <p className="text-[hsl(var(--muted-foreground))]">
      Sharing our games, listening to players, and growing together.  
      Basically — we do it all.
    </p>
  </div>
</div>

      </motion.div>
    </motion.section>
  );
}
