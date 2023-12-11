import Description from "@/components/description";
import Header from "@/components/header";
import LeftRight from "@/components/leftright";
import Image from 'next/image';
import WhoAreWE from "@/images/intro-new.png";
import MobileDevelopment from "@/images/mobile-developlment.png";

export default function Details() {
	return (
		<>
			<LeftRight>
				<div>
					<Header>WHO ARE WE</Header>
					<Description>
						As a UX Engineer, I have the design thinking and visual expertise of a designer, as well as the technical skills of a frontend software engineer.
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