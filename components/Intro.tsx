import Description from "@/components/description";
import Header from "@/components/header";
import LeftRight from "@/components/leftright";
import Image from 'next/image';
import WhoAreWE from "@/images/who-are-we.png";
import MobileDevelopment from "@/images/mobile-developlment.png";

export default function Intro() {
	return (
		<>
			<LeftRight>
				<div>
					<Header>WHO ARE WE</Header>
					<Description>
						As a UX Engineer, I have the design thinking and visual expertise of a designer, as well as the technical skills of a frontend software engineer.
						This allows me to advocate for users and create powerful visual designs, wireframes, storyboards, and prototypes while also understanding the technical limitations and challenges that engineers may face. I'm also able to code out prototypes and build component libraries with user needs and accessibility in mind
					</Description>
				</div>
				<div>
					<Image src={WhoAreWE} alt="image" />
				</div>
			</LeftRight>
			<LeftRight>
				<div>
					<Image src={MobileDevelopment} alt="image" />
				</div>
				<div>
					<Header>We design, build and modernize software applications</Header>
					<Description>Engage Net Solutions to build a remote, Agile software development team to co-create or update your digital products or platforms with the latest web, mobile and cloud technologies.</Description>
				</div>
			</LeftRight>
		</>
	)
}