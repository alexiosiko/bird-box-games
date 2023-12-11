import Description from "@/components/description";
import Details from "@/components/details";
import Header from "@/components/header";
import HowItWorks from "@/components/howitworks";
import Intro from "@/components/intro";

export default function Home() {
  return (
	<main className="m-auto justify-center max-w-7xl h-[2000px]">
		<Intro />
		<Details />
		<HowItWorks />
		<div className="m-40 mb-[700px]">
			<Header>Free consulation!</Header>
			<Description>We want you to be happy with your expected results before we get started</Description>
		</div>
	</main>
  )
}
