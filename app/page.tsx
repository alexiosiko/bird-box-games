"use client";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import Games from "@/components/games/games";
import About from "@/components/about";
import Hero from "@/components/hero";
import WhoWeAre from "@/components/whoarewe";
import DevPhotos from "@/components/devPhotos";

export default function Home() {
  return (
    <>
      	<Nav />
		<main className=" mx-auto bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
			<Hero />
			<DevPhotos />
			<About />
			<WhoWeAre />
			<Games />
			<Footer />
		</main>
    </>
  );
}
