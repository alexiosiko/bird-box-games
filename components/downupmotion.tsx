import { motion, useAnimate } from "framer-motion";
import React from "react";

export default function DownUpMotion({ children, className }: {
	children: React.ReactNode,
	className?: string,
}) {
	const [scope, animate] = useAnimate();

	return (
			<motion.div className={className}
				initial={{ y: 50, opacity: 0 }}
				ref={scope}
				onViewportEnter={() => animate(scope.current, { y: 0, opacity: 100 })}
			>
			{children}
		</motion.div>
	)
}