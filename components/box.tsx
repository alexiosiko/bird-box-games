import Money from '@/images/icon/money.png';
import Image, { StaticImageData } from 'next/image';
import { motion } from "framer-motion";
import { boxDataType } from './boxcontainer';
import Header from './header';
import Description from './description';

export default function Box({ data, index }: {
	data: boxDataType,
	index: number,
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 100, y: 0 }}
			transition={{ delay: 1.2 + index / 5, duration: 0.4 }}
			className="bg-[var(--foreground)] m-auto rounded-lg shadow-lg aspect-square p-8"
			>
			<Image className='m-auto' src={data.img} width={80} height={80} alt='money' />
			<br />
				<Header className='!text-2xl font-bold mb-4'>{data.header}</Header>
			<Description className='mb-4 '>{data.description}</Description>
		</motion.div>
	)
}