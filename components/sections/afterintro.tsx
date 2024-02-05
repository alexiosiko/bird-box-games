import { afterIntroData } from "@/data/afterintrodata";
import Description from "../description";
import Header from "../header";
import LeftRight from "../leftright";
import AfterIntroCard from "../afterintrocard";
import ScrollLink from "../scrolllink";

export default function AfterIntro() {
	return (
		<LeftRight>
			<div className="mb-24 max-md:flex flex-col">
				<Header>
					Excellence in Software Development
					Delivered Quickly
				</Header>
				<br /><br />
				<Description>
					At Dev Olympus, we bring your ideas to life with professionalism, quality, and reliability in every digital creation.
					<br />
					<br />
					Our goal is not just to meet your expectations but to exceed them, ensuring your satisfaction and delivering exactly what you need. Your happiness with our product is our ultimate priority.
				</Description>
				<br />
				<br />
				<ScrollLink to="contact" className="button">
					Get Started
				</ScrollLink>
			</div>
			<div className="grid grid-cols-3 gap-[3%]">
				{afterIntroData.map((data, index: number) =>
					<AfterIntroCard data={data} index={index} key={index} />
				)}
			</div>
		</LeftRight>
	)
}