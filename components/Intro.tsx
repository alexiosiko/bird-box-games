import Description from "@/components/description";
import Header from "@/components/header";
import LeftRight from "@/components/leftright";
import Image from 'next/image';
import screenIcon from "@/images/screen-icon.png";

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
					<Image src={screenIcon} alt="image" />
				</div>
			</LeftRight>
		</>
	)
}