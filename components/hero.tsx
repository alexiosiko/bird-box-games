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
    <section className="h-screen flex-col justify-center  flex">
      {/* Logo/Video */}
	  <div >

       {fallback ? 
			<motion.img
			src="/logo/image.png"
			alt="bird-box-studios.png"
			className="h-full w-full max-w-xl mx-auto object-contain"
			height={400}
			width={400}
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
			/> :
			<video
			ref={videoRef}
			muted
			autoPlay
			playsInline
			className="h-full w-full max-w-xl mx-auto object-contain"
			>
			<source src="/logo/anim.mp4" type="video/mp4" />
			<source src="/logo/anim.webm" type="video/webm" />
			</video>   
		}

	</div>
      {/* Bottom 1/3: Animated Text + Button */}
		

	  <motion.div className=' mx-auto relative bottom-[10%]'
	initial={{ opacity: 0, y: 20 }}
	animate={{ opacity: 1, y: 0 }}
	  transition={{ delay: fallback ? 1.25 : 0}}
	  >

		<Button 
			onClick={() => document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })}
			className="text-lg md:text-xl px-10"
			>
			See Our Games
		</Button>
			</motion.div>
       

    </section>
  );
}
