import Image from "next/image";
import icon from "@/images/icons/check.png";
import { motion, useAnimate } from "framer-motion";
export default function PricingCard({ data, middle }: {
	data: {
		title: string;
		price: string;
		rate: string;
		beforeDiscount?: string,
		description: string;
		features: string[];
	},
	middle?: boolean
}) {
	const scale = middle ? '1.1' : '1';
	const [scope, animate] = useAnimate();
	return (
		<motion.div 
			ref={scope}
			initial={{ y: 200, opacity: 0 }}
			className={`${scale} w-[300px] text-center p-6 bg-white shadow-lg`}
			onViewportEnter={() => animate(scope.current, { y: 0, opacity: 100, scale: scale  }, {  delay: (middle ? 0.7 : 0.35) , duration: 0.65 })}
			>
			<h1 className="text-lg font-bold mb-2">{data.title}</h1>
			<h2 className="text-2xl text-red-400">{data.beforeDiscount}</h2>
			<h2 className="text-4xl">{data.price}</h2>
			<p>{data.rate}</p>
			<br />
			<p className="text-sm">{data.description}</p>
			<br />
			<hr />
			<br />
			<div className="gap-4 flex  flex-col">
				{
					data.features.map((check: string, index: number) => 
					<div className="grid grid-cols-6 gap-4" key={index} >
						<Image src={icon} alt="icon" width={20} height={20} className="object-contain" />
						<p className="col-span-5 text-sm text-left">{check}</p>
					</div>
					)
				}
				
			</div>
		</motion.div>
	)
}