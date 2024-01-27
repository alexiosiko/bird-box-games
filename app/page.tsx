"use client"

import Br from "@/components/br";
import Contact from "@/components/sections/contact";
import WhatWeDo from "@/components/sections/whatwedo";
import Footer from "@/components/sections/footer";
import WhoAreWe from "@/components/sections/whoarewe";
import Intro from "@/components/sections/intro";
import BoxContainer from "@/components/boxcontainer";
import Pricing from "@/components/sections/pricing";
import Industries from "@/components/sections/industries";
import AfterIntro from "@/components/sections/afterintro";

export default function Home() {
  return (
	<main>
		<div className="max-w-7xl m-auto">
			<Intro />
			<Br size={4} />
			<AfterIntro />
			<Br size={6} />
			<WhoAreWe />
			<Br size={7}/>
			<WhatWeDo />
			<Br size={3}/>
			<BoxContainer />
			<Br size={7} />
			<Industries />
			<Br size={10}/>
			<Pricing />
			<Br size={10}/>
			<Contact />
			<Br size={7}/>
			<Footer />
		</div>
	</main>
  )
}
