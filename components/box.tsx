"use client"

import Money from '@/images/icons/money.png';
import Image, { StaticImageData } from 'next/image';
import { motion } from "framer-motion";
import { boxDataType } from './boxcontainer';

export default function Box({ data, index }: {
	data: boxDataType,
	index: number,
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 100, y: 0 }}
			transition={{ delay: 1.2 + index / 5, duration: 0.4 }}
			className="bg-[var(--foreground)] m-auto rounded-lg shadow-lg w-[270px] aspect-square p-8"
			>
			<Image src={data.img} width={50} height={50} alt='money' />
			<br />
			<h3 className='text-xl text-[var(--dark)] font-bold mb-4'>{data.header}</h3>
			<p className='mb-4 text-base'>{data.description}</p>
		</motion.div>
	)
}