import React from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen flex-col justify-center flex">
      {/* Logo/Video */}
        <video
		muted
		
		autoPlay
		playsInline
		className="max-h-full object-contain flex justify-center items-center h-2/3 max-md:mt-48 md:mt-24 w-full"
		>
			<source src="/logo/anim.mp4" type="video/mp4" />
			<source src="/logo/anim.webm" type="video/webm" />
		</video>


      {/* Bottom 1/3: Animated Text + Button */}
        <motion.div
		className='mx-auto h-full bottom-[10%] relative'
          initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true }}

          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8, ease: 'easeOut' }}
        >
          <Button 
		 	  onClick={() => document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })}
			  className="text-lg md:text-xl px-10 ">See Our Games</Button>
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
