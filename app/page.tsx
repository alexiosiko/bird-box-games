import Br from "@/components/br";
import Contact from "@/components/contact";
import Details from "@/components/details";
import Footer from "@/components/footer";
import HowItWorks from "@/components/howitworks";
import Intro from "@/components/intro";

export default function Home() {
  return (
	<main className="m-auto justify-center max-w-7xl h-[2000px]">
		<Br size={12}/>
		<Intro />
		<Br size={7}/>
		<Details />
		<Br size={7}/>
		<HowItWorks />
		<Br size={5}/>
		<Contact />
		<Br size={7}/>
		<Footer />
	</main>
  )
}
