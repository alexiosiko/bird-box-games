import Br from "@/components/br";
import Contact from "@/components/sections/contact";
import WhatWeDo from "@/components/sections/whatwedo";
import Footer from "@/components/sections/footer";
import WhoAreWe from "@/components/sections/whoarewe";
import Intro from "@/components/sections/intro";
import Wallpaper from '@/components/wallpaper';
import BoxContainer from "@/components/boxcontainer";
import Pricing from "@/components/sections/pricing";
import wallpaperSVG from "@/images/svg/top.svg";

export default function Home() {
  return (
	<main>
		<div className="max-w-7xl m-auto">
			<Wallpaper svg={wallpaperSVG} className=" " />
			<Br size={9} />
			<Intro />
			<Br size={9} />
			<BoxContainer />
			<Br size={9} />
			<WhoAreWe />
			<Br size={3}/>
			<WhatWeDo />
			<Br size={5}/>
			<Pricing />
			<Br size={8}/>
			<Contact />
			<Br size={7}/>
			<Footer />
		</div>
	</main>
  )
}
