import Image, { StaticImageData } from "next/image";
import Header from "./header";
import Description from "./description";

export default function AfterIntroCard({ data }: { 
	data: {
		header: string;
		description: string;
		img: StaticImageData;
	}
}) {
	return (
		<div className="grid bg-[var(--foreground)] font-[var(--dark)] p-6 rounded-bl-[50px] shadow-md">
			<div className="flex flex-col items-center">
				<Image className="m-auto" width={60} height={60} src={data.img} alt="icon" />
				<br />
				<Header className="!text-3xl flex-grow">{data.header}</Header>
			</div>
			<Description>{data.description}</Description>
		</div>
	)
}