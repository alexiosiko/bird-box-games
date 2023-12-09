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
		<LeftRight>
			<div>
				<Image src={screenIcon} alt="image" />
			</div>
			<div>
				<Header>We design, build and modernize software applications</Header>
				<Description>Engage Net Solutions to build a remote, Agile software development team to co-create or update your digital products or platforms with the latest web, mobile and cloud technologies.</Description>
			</div>
		</LeftRight>
		<HowItWorks />
	</main>
  )
}
