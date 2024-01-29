import Image from 'next/image';
import { motion } from 'framer-motion';
import { boxDataType } from './boxcontainer';
import Header from './header';
import Description from './description';

export default function Box({ data, index }: { data: boxDataType; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 + index / 5, duration: 0.4 }}
      className="m-auto rounded-lg "
    >
      <Image className='m-auto' src={data.img} width={80} height={80} alt='money' />
      <br />
      <Header className='!text-2xl font-bold mb-4 text-center'>{data.header}</Header>
      <Description>{data.description}</Description>
    </motion.div>
  );
}
