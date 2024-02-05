import Image, { StaticImageData } from "next/image";
import Header from "./header";
import Description from "./description";

export default function List({ data }: {
	data: {
		title: string;
		description: string;
		items: {
			header: string;
			description: string;
			image: StaticImageData;
		}[],
	};
}) {
	return (
		<div className="text-center">
			<Header>{data.title}</Header>
			<p className="text-lg w-1/2 m-auto">{data.description}</p>
			<br /><br />
			<br /><br />
			<div className={`grid grid-cols-3 gap-[5%]`}>
			{data.items.map((item, index) => (
				<div key={index} className={`flex flex-col items-center gap-8 p-6 rounded-md`}>
					<div className="p- shadow-lg rounded-full">
						<Image className="object-contain" src={item.image} alt="icon" width={60} height={60} />
					</div>
					<div>
						<Header className="text-[var(--base)] text-lg font-semibold">{item.header}</Header>
						<Description>{item.description}</Description>
					</div>
				</div>
			))}
			</div>
		</div>
	)
}