import Image, { StaticImageData } from "next/image";
import Icon from "@/images/icons/money.png";
import Header from "./header";

export default function ColumnList({ data }: {
	data: {
	title: string;
	description: string;
	items: {
		header: string;
		description: string;
		image: StaticImageData;
	}[];
	};
}) {
	return (
		<div className="w-[70%] m-auto">
			<Header>{data.title}</Header>
			<p className="text-lg">{data.description}</p>
			<br /><br />
			{data.items.map((item, index) => (
				<div key={index} className="flex gap-8 mb-6">
					<Image className="object-contain" src={item.image} alt="icon" width={40} height={40} />
					<div>
						<h2 className="text-[var(--dark)]">{item.header}</h2>
						<p className="text-base ">{item.description}</p>
					</div>
				</div>
			))}
		</div>
	)
}