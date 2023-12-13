import Description from "@/components/description";
import Header from "@/components/header";
import LeftRight from "@/components/leftright";
import Image from 'next/image';
import WhoAreWE from "@/images/app-dev-img.png";
import MobileDevelopment from "@/images/teamworking.png";

export default function Details() {
	return (
		<section>
			<LeftRight>
				<div>
					<Image src={WhoAreWE} alt="image" />
				</div>
				<div>
					<Header>Who Are We</Header>
					<Description>
					As a close-knit team of developers, we thrive on creating user-friendly software, intuitive apps, and more. Our focus centers on simplicity, accessibility, and reliability, ensuring that our clients are happy with the results they see.
					</Description>
				</div>
			</LeftRight>
			<LeftRight>
				<div>
					<Header>What We Do</Header>
					<Description>Coding is our thing! We build full-stack applications, play with front-end libraries, handle back-end complexities, and groove with databases. We also deploy to mobile; making apps that run on Android and Apple. We keep it simple, accessible, and rock-solid. Why? Because creating awesome stuff that just works? That's what we're all about!</Description>
				</div>
				<div>
					<Image src={MobileDevelopment} alt="image" />
				</div>
			</LeftRight>
		</section>
	)
}