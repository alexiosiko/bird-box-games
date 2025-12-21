import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaSteam, FaApple, FaAndroid } from "react-icons/fa";
import { games } from "@/lib/game";

export default function Games() {
  return (
    <section id="games" className="md:py-32 py-12 px-6">
      {/* Section title */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, type: "tween", ease: "easeInOut" }}
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-center text-[hsl(var(--primary-foreground))] mb-10 md:mb-16">
          Our Games
        </h2>
      </motion.div>

      <div className="flex flex-col max-w-5xl mx-auto px-2">
        {games.map((game, index) => {
          const isReversed = index % 2 === 1;
          const isInDev = (game.description || "").toUpperCase().includes("IN DEVELOPMENT");

          return (
            <motion.div
              key={index}
              className={`group w-full flex flex-col md:flex-row ${isReversed ? 'md:flex-row-reverse' : ''} items-center gap-6 md:gap-10  rounded-3xl transition-transform duration-300 hover:scale-[1.01]`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
            >
              {/* Card background */}
              <div
                className={`w-full bg-primary/10 rounded-3xl md:p-6 flex flex-col md:flex-row ${isReversed ? 'md:flex-row-reverse' : ''} items-center gap-6 text-[hsl(var(--primary-foreground))]`}
              >
                {/* Image area */}
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? 80 : -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ duration: 0.25, type: 'tween', ease: 'easeInOut' }}
                  className={`relative flex-shrink-0 w-full md:w-1/2 lg:w-2/5 rounded-2xl overflow-hidden shadow-md shadow-gray-300`}
                > 
                  <div className="relative aspect-[16/9] ">
                    <Image src={game.image} alt={game.title} fill className="object-cover h-24" />
                  </div>
                </motion.div>
                {/* Info + Buttons */}
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ duration: 0.25, type: 'tween', ease: 'easeInOut' }}
                  className={`flex flex-col justify-center gap-4 w-full md:w-1/2 ${isReversed ? 'md:text-right md:items-end' : 'md:text-left md:items-start'}`}
                >
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                      {game.title}
                    </h3>
                    {isInDev && (
                      <span className="ml-2 inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full bg-yellow-100 text-yellow-800">
                        🚧 In development
                      </span>
                    )}
                  </div>

                  <p className="text-base text-muted-foreground max-w-prose">
                    {game.description}
                  </p>



                  <div className="flex flex-row gap-3 mt-3 max-md:mb-24">
                    {/* Action buttons - touch friendly on mobile */}
                    {game.platforms.computer && (
                      <Button
                        onClick={() => window.open(game.platforms.computer)}
                        className="w-full sm:w-auto flex items-center gap-2 justify-center rounded-full bg-primary text-[hsl(var(--primary-foreground))] hover:scale-105 transition-transform shadow-md"
                        aria-label={`Open ${game.title} on Steam`}
                      >
                        <FaSteam className="w-4 h-4" /> Steam
                      </Button>
                    )}

                    {game.platforms.iphone && (
                      <Button
                        onClick={() => window.open(game.platforms.iphone)}
                        className="w-full sm:w-auto flex items-center gap-2 justify-center rounded-full bg-primary text-[hsl(var(--primary-foreground))] hover:scale-105 transition-transform shadow-md"
                        aria-label={`Open ${game.title} on iPhone App Store`}
                      >
                        <FaApple className="w-4 h-4" /> iPhone
                      </Button>
                    )}

                    {game.platforms.android && (
                      <Button
                        onClick={() => window.open(game.platforms.android)}
                        className="w-full sm:w-auto flex items-center gap-2 justify-center rounded-full bg-primary text-[hsl(var(--primary-foreground))] hover:scale-105 transition-transform shadow-md"
                        aria-label={`Open ${game.title} on Android Play Store`}
                      >
                        <FaAndroid className="w-4 h-4" /> Android
                      </Button>
                    )}

                    {/* Fallback / info */}
                    {!game.platforms.computer && !game.platforms.iphone && !game.platforms.android && (
                      <Button
                        className="w-full sm:w-auto rounded-full bg-gray-100 text-gray-700"
                        disabled
                        aria-label={`${game.title} not available yet`}
                      >
                        Coming soon
                      </Button>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
