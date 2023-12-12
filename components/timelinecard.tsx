import { motion, useAnimate } from "framer-motion";
import Header from "./header";
import Description from "./description";

export default function TimelineCard({ index, data } : { index: number, data: {
	header: string;
    description: string;
}}) { 
	let initialProps = index % 2 == 0 ? 
	{ x: -100, opacity: 0 }
	: { x: 100, opacity: 0 };
	const [scope, animate] = useAnimate();
	return (
			
		<motion.div
			className="flex justify-around w-full relative"
			ref={scope}
			onViewportEnter={() => animate(scope.current, { x: 0, opacity: 100}, { duration: 1, delay: 0.1 })}
			initial={initialProps}
		>
			<div className={`mt-[106px] absolute bg-[var(--background)] rounded-full w-8 h-8 flex items-center justify-center `} />
			<div className={`mt-[114px] absolute bg-[var(--header)] rounded-full w-4 h-4 flex items-center justify-center `} />
			<div className={`mt-[120px] absolute h-1 z-[-1] w-24 bg-[var(--foreground)] ${index % 2 == 0 ? 'ml-[70px]' : 'mr-[70px]'} `}/>
			<div className={`bg-[var(--foreground)] p-8 rounded-md w-2/5 ${index % 2 == 0 ? 'ml-[700px]' : 'mr-[700px]'}`}>
				<Header className="text-[25px]">{data.header}</Header>
				<Description>{data.description}</Description>
			</div>
		</motion.div>

	)
}