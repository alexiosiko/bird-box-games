import React, { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

export default function Hero() {

	const videoRef = useRef<HTMLVideoElement>(null);
	  const [fallback, setFallback] = useState(true);
	
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
    <section className="h-screen flex-col justify-center flex">
      {/* Logo/Video */}
       {fallback ? 
		<motion.img
          src="/logo/image.png"
          alt="bird-box-studios.png"
          className="max-h-full object-contain flex justify-center items-center h-2/3 max-md:mt-48 md:mt-24 w-full"
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
			className="max-h-full object-contain flex justify-center items-center h-2/3 max-md:mt-48 md:mt-24 w-full"
			>
			<source src="/logo/anim.mp4" type="video/mp4" />
			<source src="/logo/anim.webm" type="video/webm" />
			</video>   
		}

      {/* Bottom 1/3: Animated Text + Button */}
       <motion.div
  className='mx-auto h-full bottom-[10%] relative'
  initial={{ opacity: 0, y: 20 }}
  viewport={{ once: true }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ 
    delay: fallback ? 0.625 : 2.5, // 75% less if fallback
    duration: 0.8,
    ease: 'easeOut'
  }}
>
  <Button 
    onClick={() => document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })}
    className="text-lg md:text-xl px-10"
  >
    See Our Games
  </Button>
</motion.div>


      <style jsx>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
      `}</style>
    </section>
  );
}
