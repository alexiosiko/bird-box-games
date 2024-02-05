"use client"

import Br from "@/components/br";
import Contact from "@/components/sections/contact";
import WhatWeDo from "@/components/sections/whatwedo";
import Footer from "@/components/sections/footer";
import WhoAreWe from "@/components/sections/whoarewe";
import Intro from "@/components/sections/intro";
import BoxContainer from "@/components/boxcontainer";
import Pricing from "@/components/sections/pricing";
import AfterIntro from "@/components/sections/afterintro";

export default function Home() {
  return (
	<main className="overflow-hidden">
		<div className="max-w-7xl m-auto pl-4 pr-4">
			<Intro />
			<Br size={4} />
			<AfterIntro />
			<Br size={6} />
			<WhoAreWe />
			<Br size={5}/>
			<WhatWeDo />
			<Br size={0}/>
			<BoxContainer />
			<Br size={9} />
			<Pricing />
			<Br size={10}/>
			<Contact />
			<Br size={7}/>
			<Footer />
		</div>
	</main>
  )
}
