"use client"

import Br from "@/components/br";
import WhatWeDo from "@/components/sections/whatwedo";
import Footer from "@/components/sections/footer";
import WhoAreWe from "@/components/sections/whoarewe";
import Intro from "@/components/sections/intro";
import BoxContainer from "@/components/boxcontainer";
import AfterIntro from "@/components/sections/afterintro";
import Quote from "@/components/sections/quote";

export default function Home() {
  return (
	<main className="overflow-hidden">
		<div className="max-w-5xl m-auto pl-4 pr-4">
			<Intro />
			<Br size={4} />
			<AfterIntro />
			<Br size={4}/>
			<WhatWeDo />
			<Br size={4}/>
			<BoxContainer />
			<Br size={5} />
			<Quote />
			<Br size={3}/>
			<Footer />
		</div>
	</main>
  )
}
