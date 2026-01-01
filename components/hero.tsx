import React, { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

export default function Hero() {

	const videoRef = useRef<HTMLVideoElement>(null);
	  const [fallback, setFallback] = useState(false);
	
	  useEffect(() => {
		const vid = videoRef.current;
		if (!vid) return;
		const tryPlay = async () => {
			try {
				await vid.play();
			} catch {
				setFallback(true);
			}
		}
	
		tryPlay();
	  }, []);


  return (
    	<section className="h-screen relative flex-col  justify-center bg-secondary flex">
		{/* Logo/Video */}
	 	 <div className=' relative  min-h-[460px] h-min max-w-2xl mx-auto' >

	    {fallback ? 
		    <motion.img
		    src="/logo/image.png"
		    alt="bird-box-studios.png"
		    className=" w-full object-contain"
		    height={400}
		    width={400}
		    initial={{ opacity: 0, x: -80 }}
		    animate={{ opacity: 1, x: 0 }}
		    transition={{ duration: 0.7, type: 'spring', bounce: 0.5 }}
		    /> :
					<video
					ref={videoRef}
					height={400}
					width={400}
					muted
					autoPlay
					playsInline
					className=" w-full object-contain"
					>
					<source src="/logo/anim_1024_compressed.mp4" type="video/mp4" />
					<source src="/logo/anim_1024_compressed.webm" type="video/webm" />
					</video>   
				}

			<motion.div className='flex justify-center relative -top-[22%]'
			initial={{ opacity: 0, x: 80 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ delay: 1.5, duration: 0.7, type: 'spring', bounce: 0.5 }}
			>

				<Button 
					onClick={() => document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })}
					className="text-lg md:text-xl px-10 max-md:mt-4 relative"
					>
					See Our Games
				</Button>
			</motion.div>
	</div>
      {/* Bottom 1/3: Animated Text + Button */}
		

       

    </section>
  );
}
