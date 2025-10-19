import { Button } from "@/components/ui/button";
import { FaSteam, FaApple, FaAndroid } from "react-icons/fa";
import React from "react";

export default function PlatformButtons({ game }: { game: Game }) {
  const { computer, iphone, android } = game.platforms;

  const platforms = [
    computer && {
      name: "Steam",
      icon: <FaSteam className="w-5 h-5 mr-2 text-[#1b2838]" />, // Steam dark blue-gray
      url: computer,
      color: "hover:bg-[#1b2838]/10 text-[#1b2838] border-[#1b2838]",
    },
    iphone && {
      name: "App Store",
      icon: <FaApple className="w-5 h-5 mr-2 text-blue-600 " />,
      url: iphone,
      color: "hover:bg-gray-200/40 text-blue-600 border-blue-600",
    },
    android && {
      name: "Play Store",
      icon: <FaAndroid className="w-5 h-5 mr-2 text-green-500" />, // Android green
      url: android,
      color: "hover:bg-[#3ddc84]/10 text-green-500 border-green-500",
    },
  ].filter(Boolean) as { name: string; icon: JSX.Element; url: string; color: string }[];

  return (
    <div className="flex flex-wrap gap-3 mt-4">
      {platforms.map(({ name, icon, url, color }) => (
        <Button
          key={name}
          variant="outline"
          onClick={() => window.open(url, "_blank")}
          className={`flex items-center border ${color}`}
        >
          {icon}
          {name}
        </Button>
      ))}
    </div>
  );
}
