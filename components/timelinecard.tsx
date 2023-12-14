import { motion, useAnimate } from "framer-motion";
import Header from "./header";
import Description from "./description";
import Triangle from "./triangle";

export default function TimelineCard({ index, data }: { index: number; data: { title: string; description: string } }) {
	let endProps = index % 2 == 0 ? 
	{ x: -300, opacity: 1, }
	: { x: 300, opacity: 1 };
	const [scope, animate] = useAnimate();

	const triangleStyle = index % 2 == 0 ? "rotate-90 translate-x-[500px]" : "-rotate-90 -translate-x-[40px]";
	return (
		<div className="flex justify-center text-center"> 
			<div className="bg-[var(--accent)] w-[1px] h-48 absolute"></div> { /* Vertical divider */ }
			<motion.div	
				className="border-1 border border-[var(--accent)] max-w-[40%] h-48 p-4 rounded-md"
				ref={scope}
				onViewportEnter={() => animate(scope.current, endProps, { duration: 1.2, delay: 0.1 })}
				initial={{ x: 0, opacity: 0 }}
				>
				<Triangle className={` ${triangleStyle} absolute translate-y-[65px] z-10 `} />
				<div className="text-[var(--title)] text-2xl mb-5 font-bold">{data.title}</div>
				<div>{data.description}</div>
			</motion.div>

		</div>
	)
}