import LeftRight from "@/components/leftright";
import Image from "next/image";
import screenIcon from "@/images/screen-icon.png";
import Header from "@/components/header";
import Description from "@/components/description";
import Intro from "@/components/Intro";
import HowItWorks from "@/components/howitworks";

export default function Home() {
  return (
	<main className="m-auto justify-center max-w-4xl h-[2000px]">
		<Intro />
		
		<HowItWorks />
	</main>
  )
}
