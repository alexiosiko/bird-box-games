
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
    image: "/games/you-move-i-move/you-move-i-move.png",
    description: "A turn-based puzzle game.",
	platforms: {
		computer: "https://store.steampowered.com/app/3896240/Pixel_Dungeons/",
		android: "https://store.steampowered.com/app/3896240/Pixel_Dungeons/",
		iphone: "https://apps.apple.com/ca/app/pixel-dungeons/id6752780292",
	},
    layout: { col: 4, row:4 },
  },
  {
    title: "Fishing Contest",
    image: "/games/fishing-contest/fishing-contest.jpg",
    description: "(IN DEVELOPMENT)",
	platforms: {

	},
    layout: { col: 2, row: 2 },
  },
  {
    title: "Mini Chef",
    image: "/games/mini-chef/mini-chef.jpg",
    description: "(IN DEVELOPMENT)",
    layout: { col: 2, row: 2 },
	platforms: {

	},
  },
];
