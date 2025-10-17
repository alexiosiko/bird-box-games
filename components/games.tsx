import React from 'react';
import { motion } from 'framer-motion';

type Game = {
	title: string;
    image: string;
    description: string;
    computer: string;
    android: string;
    iphone: string;
    layout: {
        col: number;
        row: number;
    };
}
const games: Game[] = [
  {
    title: "Pixel Dungeons",
    image: "/games/pixel-dungeons.jpg",
    description: "A turn-based puzzle game.",
    computer: "https://store.steampowered.com/app/3896240/Pixel_Dungeons/",
	android: "https://store.steampowered.com/app/3896240/Pixel_Dungeons/",
	iphone: "https://apps.apple.com/ca/app/pixel-dungeons/id6752780292",
    layout: { col: 4, row:4 },
  },
  {
    title: "Fishing-Contest",
    image: "/games/fishing-contest.jpg",
    description: "(IN DEVELOPMENT)",
	computer: "",
	android: "",
	iphone: "",
    layout: { col: 2, row: 2 },
  },
  {
    title: "Mini Chef",
    image: "/games/mini-chef.jpg",
    description: "(IN DEVELOPMENT)",
	computer: "",
	android: "",
	iphone: "",
    layout: { col: 2, row: 2 },
  },
];

export default function Games() {
	const getDeviceType = () => {
		const ua = navigator.userAgent.toLowerCase();

		if (/iphone|ipad|ipod/.test(ua)) return "iPhone";
		if (/android/.test(ua)) return "Android";
		return "Computer";
	};

	const handleGameClick = (game: Game) => {
		const deviceType = getDeviceType();
		switch (deviceType) {
			case "iPhone": window.open(game.iphone); break;
			case "Android": window.open(game.android); break;
			case "Computer": window.open(game.computer); break;
		}
		console.log(getDeviceType());
	}
  return (
    <section
      id="games"
      className="md:py-32 md:mb-48 px-6"
    >
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.25, type: 'tween', ease: 'easeInOut' }}
      >
        <h2 className="text-5xl md:text-6xl font-bold text-center text-[hsl(var(--primary-foreground))] mb-12">
          Our Games
        </h2>
      </motion.div>

      <div className="max-w-6xl mx-auto md:grid flex flex-col grid-cols-6 gap-6 auto-rows-[6rem]">
        {games.map((game, index) => (
          <motion.a
		  	onClick={() => handleGameClick(game)}
            key={index}
            // href={game.link}
            rel="noopener noreferrer"
            className="relative rounded-3xl w-full max-md:aspect-video overflow-hidden shadow-lg bg-[hsl(var(--card))] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              gridColumn: `span ${game.layout.col} / span ${game.layout.col}`,
              gridRow: `span ${game.layout.row} / span ${game.layout.row}`,
            }}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.25, type: 'tween', ease: 'easeInOut' }}
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
