import Image, { StaticImageData } from "next/image";
import Header from "./header";
import Description from "./description";
import { motion, useAnimate } from "framer-motion";

export default function AfterIntroCard({ data, index }: { 
	data: {
		header: string;
		description: string;
		img: StaticImageData;
	},
	index: number
}) {
	const [scope, animate] = useAnimate();
	return (
		<motion.div
		className="grid bg-[var(--foreground)] font-[var(--dark)] p-6 rounded-bl-[50px] shadow-md"
		ref={scope}
		initial={{ x: 100, opacity: 0 }}
		onViewportEnter={() => animate(scope.current, { x: 0, opacity: 100 }, { delay: 0.2 + index / 10})}
		>
			<div className="flex flex-col items-center">
				<Image className="m-auto" width={60} height={60} src={data.img} alt="icon" />
				<br />
				<Header className="!text-3xl flex-grow">{data.header}</Header>
			</div>
			<Description>{data.description}</Description>
		</motion.div>
	)
}