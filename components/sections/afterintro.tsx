import { afterIntroData } from "@/data/afterintrodata";
import Description from "../description";
import Header from "../header";
import LeftRight from "../leftright";
import AfterIntroCard from "../afterintrocard";

export default function AfterIntro() {
	return (
		<LeftRight>
			<div className="mb-24 ">
				<Header className="!text-left">
					Excellence in Software Development
					Delivered Quickly
				</Header>
				<br /><br />
				<Description className="!text-left">
					At Dev Olympus, we bring your ideas to life with professionalism, quality, and reliability in every digital creation.
					<br />
					<br />
					Our goal is not just to meet your expectations but to exceed them, ensuring your satisfaction and delivering exactly what you need. Your happiness with our product is our ultimate priority.
				</Description>
				<br />
				<br />
				<button className="bg-[var(--accent)] text-[var(--accent-foreground)] p-4 rounded-full">
					Get Started
				</button>
			</div>
			<div className="grid grid-cols-3 gap-10">
				{afterIntroData.map((data, index: number) =>
					<AfterIntroCard data={data} key={index} />
				)}
			</div>
		</LeftRight>
	)
}