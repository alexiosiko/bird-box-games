import { Container } from "@/components/Container";
import Animate from "./animations/animate";
import Image from "next/image";

export const Portfolio = () => {

  return (
    <div id="portfolio">
		<Animate>
			<div className="text-sm font-bold tracking-wider text-primary uppercase text-center">
				Portfolio
			</div>
			<h2 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white text-center">
				Our Portfolio
			</h2>
			<p className="py-5 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300 text-center">
				Take a look at some of the projects we’ve successfully delivered for our clients.
			</p>
		</Animate>
      
      <div className="grid gap-10 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Animate delay={index / 10 + 0.5} key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image src={project.image} alt={project.title} className="lg:w-full mx-auto h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
              <p className="mt-3 text-gray-600">{project.description}</p>
            </div>
          </Animate>
        ))}
      </div>
    </div>
  );
};
const projects = [
	{
	  title: "Unity Puzzle Game",
	  description:
		"Created all the sprites and animations to bring a classic puzzle game from childhood to life for the client.",
	  image: "/portfolio/bilge.png",
	},
	{
	  title: "Fitness Tracking App",
	  description:
		"Built a smart app that uses AI for calorie tracking, with full user authentication and a custom database to keep it all running smoothly.",
	  image: "/portfolio/calories.png", // Example image path
	},
	{
	  title: "Musical Training Game",
	  description:
		"Made a fun piano game where players match the notes played back to them. It's a cool way to improve musical skills.",
	  image: "/portfolio/musicalnotestraining-app.png", // Example image path
	},
	{
	  title: "File Sharing System",
	  description:
		"Delivered a simple and secure file-sharing system for a client to safely send files within the company.",
	  image: "/portfolio/sharex.png", // Example image path
	},
	{
	  title: "Inventory Manager",
	  description:
		"Built a custom inventory management tool so the client can keep track of all the stock in her business.",
	  image: "/portfolio/inventory.png", // Example image path
	},
	{
	  title: "Photo Editor",
	  description:
		"Created a custom photo editor that’s optimized for the client’s employees to handle all their editing needs.",
	  image: "/portfolio/photoeditor.png", // Example image path
	},
  ];
  