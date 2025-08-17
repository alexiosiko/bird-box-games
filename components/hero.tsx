import React from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen flex-col justify-center flex">
      {/* Logo/Video */}
        <video
          src="/logo/anim.mp4"
          autoPlay
          muted
          playsInline
          className="max-h-full object-contain flex justify-center items-center h-2/3 mt-24 w-full"
        />

      {/* Bottom 1/3: Animated Text + Button */}
        


        <motion.div
		className='mx-auto h-full bottom-[10%] relative'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8, ease: 'easeOut' }}
        >
          <Button className="text-lg md:text-xl px-10 ">See Our Games</Button>
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
