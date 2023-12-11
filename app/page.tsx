import Contact from "@/components/contact";
import Description from "@/components/description";
import Details from "@/components/details";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HowItWorks from "@/components/howitworks";
import Intro from "@/components/intro";

export default function Home() {
  return (
	<main className="m-auto justify-center max-w-7xl h-[2000px]">
		<Intro />
		<Details />
		<HowItWorks />
		<Contact />
		<Footer />
	</main>
  )
}
