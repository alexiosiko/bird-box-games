import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaSteam, FaApple, FaAndroid } from "react-icons/fa";
import { Game, games } from "@/lib/game";

export default function Games() {
  return (
    <section id="games" className="md:py-32 py-16 px-6">
      {/* Section title */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.25, type: "tween", ease: "easeInOut" }}
      >
        <h2 className="text-5xl md:text-6xl font-bold text-center text-[hsl(var(--primary-foreground))] mb-16">
          Our Games
        </h2>
      </motion.div>

      {/* Games list */}
      <div className="flex flex-col gap-20 max-w-6xl mx-auto">
        {games.map((game, index) => {
          const isReversed = index % 2 === 1;

          return (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                isReversed ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Cover Image */}
              <div className="relative w-full md:w-1/2 aspect-[16/9] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info + Buttons */}
              <div
                className={`flex flex-col justify-center gap-6 w-full md:w-1/2
                  items-center text-center 
                  md:items-${isReversed ? "end" : "start"} md:text-${
                  isReversed ? "right" : "left"
                }`}
              >
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-3">
                    {game.title}
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-md mx-auto md:mx-0">
                    {game.description}
                  </p>
                </div>

                <div
                  className={`flex flex-wrap gap-3 justify-center md:justify-${
                    isReversed ? "end" : "start"
                  }`}
                >
                  {game.platforms.computer && (
                    <Button
                      onClick={() => window.open(game.platforms.computer)}
                      className="flex items-center gap-2"
                    >
                      <FaSteam className="w-5 h-5" /> Steam
                    </Button>
                  )}
                  {game.platforms.iphone && (
                    <Button
                      onClick={() => window.open(game.platforms.iphone)}
                      className="flex items-center gap-2"
                    >
                      <FaApple className="w-5 h-5" /> iPhone
                    </Button>
                  )}
                  {game.platforms.android && (
                    <Button
                      onClick={() => window.open(game.platforms.android)}
                      className="flex items-center gap-2"
                    >
                      <FaAndroid className="w-5 h-5" /> Android
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
