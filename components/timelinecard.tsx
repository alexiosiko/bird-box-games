import { motion, useAnimate } from "framer-motion";
import Header from "./header";
import Description from "./description";

export default function TimelineCard({ index, data } : { index: number, data: {
	header: string;
    description: string;
    img: string;
}}) { 
	let initialProps = index % 2 == 0 ? 
	{ x: -100, opacity: 0 }
	: { x: 100, opcaity: 0 };
	const [scope, animate] = useAnimate();
	return (
		<div>
			asd
		</div>
		// <motion.div 
		// 	key={index}
		// 	className="flex justify-around w-full relative " 
		// 	ref={scope}
		// 	initial={initialProps}
		// 	onViewportEnter={() => animate(scope.current, { x: 0, opacity: 100 }, { duration: 0.8 })}
		// 	>

		// 	<div className="bg-[var(--accent-foreground)] w-1 h-[270px] absolute" />{/* Vertical line */} 
		// 	<div className={`absolute top-20 bg-[var(--accent)] rounded-full w-4 h-4 flex items-center justify-center `}></div>{/* Title */} 
		// 	<div className={`absolute top-[86px] h-1 z-[-1] w-24 bg-[var(--accent-foreground)]  ${index % 2 == 0 ? 'ml-24' : 'mr-24'} `}/>{/* Arrow */} 
		// 	<div className={`w-1/3 ${index % 2 == 0 ? 'ml-[700px]' : 'mr-[700px]'}`}>
		// 		<Header>{data.header}</Header>
		// 		<Description>{data.description}</Description>
		// 	</div>
		// </motion.div>
	)
}