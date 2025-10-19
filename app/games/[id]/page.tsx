import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaSteam, FaApple, FaAndroid } from "react-icons/fa";

type Game = {
  cover: string;
  platforms: {
    steam?: boolean;
    iphone?: boolean;
    android?: boolean;
  };
};

export default function GamePlatforms({ game }: { game: Game }) {
  const { cover, platforms } = game;

  const buttons = [
    platforms.steam && { name: "Steam", icon: <FaSteam className="w-5 h-5" /> },
    platforms.iphone && { name: "iPhone", icon: <FaApple className="w-5 h-5" /> },
    platforms.android && { name: "Android", icon: <FaAndroid className="w-5 h-5" /> },
  ].filter(Boolean) as { name: string; icon: React.ReactNode }[];

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-64 h-36 rounded-xl overflow-hidden shadow-md">
        <Image src={cover} alt="Game cover" fill className="object-cover" />
      </div>

      <div className="flex gap-3">
        {buttons.map((btn) => (
          <Button key={btn.name} variant="outline" className="flex items-center gap-2">
            {btn.icon}
            {btn.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
