import Image, { StaticImageData } from "next/image";
import Description from "./description";
import { motion, useAnimate } from "framer-motion";

export default function Industry({ data, index } : {
	data: {
		img: StaticImageData,
		header: string,
	},
	index: number,
}) {
	const [scope, animate] = useAnimate();

	return (
		<motion.div key={index} className="flex gap-4 items-center"
			initial={{ y: 50, opacity: 0 }}
			ref={scope}
			onViewportEnter={() => animate(scope.current, { y: 0, opacity: 100 }, { delay: index / 10 })}
		>
			<Image className="ml-8 mr-4 object-contain" alt="app-icon" src={data.img} width={50} height={50} />
			<Description className="text-[var(--dark)]">{data.header}</Description>
		</motion.div>
	)
}