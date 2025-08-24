import React from 'react';
import { motion } from 'framer-motion';

const games = [
  {
    title: "Pixel Dungeons",
    image: "/games/pixel-dungeons.jpg",
    description: "A turn-based puzzle game.",
    link: "https://store.steampowered.com/app/3896240/Pixel_Dungeons/",
    layout: { col: 4, row:4 },
  },
  {
    title: "Fishing-Contest",
    image: "/games/fishing-contest.jpg",
    description: "(IN DEVELOPMENT)",
    layout: { col: 2, row: 2 },
  },
  {
    title: "Mini Chef",
    image: "/games/mini-chef.jpg",
    description: "(IN DEVELOPMENT)",
    layout: { col: 2, row: 2 },
  },
];

export default function Games() {
  return (
    <section id="games" className="md:py-32   md:mb-48 px-6">
     <motion.div
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}

  transition={{ duration: 0.8 }}
>
  <h2 className="text-5xl md:text-6xl  font-bold text-center text-[hsl(var(--primary-foreground))] mb-12">
    Our Games
  </h2>
</motion.div>

      <div className="max-w-6xl mx-auto md:grid flex flex-col grid-cols-6 gap-6 auto-rows-[6rem]">
  {games.map((game, index) => (
    <motion.a
      key={index}
      href={game.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative rounded-3xl w-full max-md:aspect-video  overflow-hidden shadow-lg bg-[hsl(var(--card))] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      style={{
        gridColumn: `span ${game.layout.col} / span ${game.layout.col}`,
        gridRow: `span ${game.layout.row} / span ${game.layout.row}`,
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
    >
      <img
        src={game.image}
        alt={game.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.58)] opacity-0 hover:opacity-100 flex flex-col items-center justify-center gap-4 text-white transition-opacity duration-300">
        {/* <h1 className="text-4xl text-white font-bold">{game.title}</h1> */}
        <p className="bold text-xl">{game.description}</p>
      </div>
    </motion.a>
  ))}
</div>

    </section>
  );
}
