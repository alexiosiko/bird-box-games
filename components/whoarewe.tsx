import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WhoWeAre() {
  return (
    <motion.section
      id="who-we-are"
      className="py-16 md:py-32 px-6 md:px-20 bg-[hsl(var(--background))] flex flex-col md:flex-row items-center gap-12"
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
			We were just two lost uni students in Athens, bored of our degrees and dreaming
			about making games together. What started as random doodles and silly ideas
			slowly grew into something real (with way too much coffee involved).
		</p>
		<p className="text-xl md:text-2xl text-[hsl(var(--muted-foreground))] leading-relaxed mt-4">
			Now we’re bringing that dream to life—with trial and error, plenty of roadblocks,
			and a fair bit of backtracking, of course. Sometimes it’s meaningful, sometimes
			it’s just chaos, but always made with love (and a bit of bullshit).
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
