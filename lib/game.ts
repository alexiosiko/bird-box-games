
export type Game = {
  title: string;
  image: string;
  description: string;
  platforms: {
	  computer?: string,
	  android?: string,
	  iphone?: string
	}
  layout: {
    col: number;
    row: number;
  };
};

export const games: Game[] = [
  {
    title: "You Move I Move",
    image: "/games/you-move-i-move.png",
    description: "A turn-based puzzle game.",
	platforms: {
		computer: "https://store.steampowered.com/app/3896240/Pixel_Dungeons/",
		android: "https://store.steampowered.com/app/3896240/Pixel_Dungeons/",
		iphone: "https://apps.apple.com/ca/app/pixel-dungeons/id6752780292",
	},
    layout: { col: 4, row:4 },
  },
  {
	title: "Eyes On Me",
	image: "/games/eyes-on-me.png",
	description: "First person interactive horror game.",
	platforms: {
		computer: "https://store.steampowered.com/app/3558100",

	},
	layout: { col: 2, row: 2 },
  },
  {
	title: "Ear Training",
	image: "/games/ear-training.png",
	description: "Turn music training into a game.",
	platforms: {
		computer: "https://store.steampowered.com/app/3855710",

	},
	layout: { col: 2, row: 2 },
  },
  {
    title: "Poker Crush",
    image: "/games/poker-crush.jpg",
    description: "A simple swap and collapse poker style puzzle game.",
	platforms: {
		computer: "https://store.steampowered.com/app/2536410",
	},
    layout: { col: 2, row: 2 },
  },
  {
    title: "The Closing Shift",
    image: "/games/the-closing-shift.jpg",
    description: "First person horror game about a killer lose in the town.",
	platforms: {
		computer: "https://store.steampowered.com/app/3420300/"
	},
    layout: { col: 2, row: 2 },
  },
  {
    title: "Fishing Contest",
    image: "/games/fishing-contest.jpg",
    description: "Catch the biggest and most valueable fish to win!",
	platforms: {

	},
    layout: { col: 2, row: 2 },
  },
  {
    title: "Mini Chef",
    image: "/games/mini-chef.jpg",
    description: "Mix the recipes and become the ultimate mini chef!",
    layout: { col: 2, row: 2 },
	platforms: {

	},
  },
];
