import { motion, useAnimate } from "framer-motion";

export default function Card({ index, child, }: { index: number, child: React.ReactNode }) {
	let initialProps = index % 2 == 0 ? 
	{ x: -100, opacity: 0 }
	: { x: 100, opcaity: 0 };
	const [scope, animate] = useAnimate();
	return (
		<motion.div 
			key={index} 
			className="flex-1 p-4 mb-24 items-center flex"
			ref={scope}
			initial={initialProps}
			onViewportEnter={() => animate(scope.current, { x: 0, opacity: 100 }, { duration: 0.8 })}
			>
			{child}
		</motion.div>
	)
}