import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="bg-primary/20 text-primary-foreground px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative  rounded-3xl p-8 md:p-12  overflow-hidden flex flex-col md:flex-row items-center gap-8">
          {/* Text Column */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'tween', ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-primary inline-block" />
              <span className="text-sm uppercase tracking-wide text-[background/50]">About Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold  leading-tight mb-4">
              Who We Are
            </h2>

            <p className="text-lg md:text-xl  mb-4 leading-relaxed">
              We started as two uni students in Athens with too much coffee and too many ideas. What began as sketches and experiments slowly turned into a shared drive to make cozy, meaningful games.
            </p>

            <p className="text-base md:text-lg  leading-relaxed">
              Now we ship small, thoughtful experiences—learning by doing, iterating fast, and keeping things playful (and messy) along the way.
            </p>

          </motion.div>

          {/* Image Column */}
          <motion.div
            className="md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'tween', ease: 'easeOut', delay: 0.1 }}
          >
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Στιγμιότυπο οθόνης 2025-12-25 131551.png"
                alt="Team brainstorming in a cozy café in Athens"
                width={900}
                height={900}
                className="object-cover w-full h-full"
                priority={true}

				/>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
