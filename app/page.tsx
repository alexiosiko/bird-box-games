"use client";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import Games from "@/components/games";
import About from "@/components/about";
import Hero from "@/components/hero";
import WhoWeAre from "@/components/whoarewe";

export default function Home() {
  return (
    <>
      	<Nav />
		<main className="max-w-7xl  mx-auto bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
			<Hero />
			<About />
			<WhoWeAre />
			<Games />
			<Footer />
		</main>
    </>
  );
}
