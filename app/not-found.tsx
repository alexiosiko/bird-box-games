"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-[hsl(var(--background))] text-[hsl(var(--foreground))] px-6">
      {/* Funny Animation */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", type: "spring", bounce: 0.4 }}
        className="text-[6rem] select-none"
      >
        🐥
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-5xl md:text-6xl font-bold mb-4"
      >
        Oops! This page flew away 🕊️
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="text-xl md:text-2xl text-[hsl(var(--muted-foreground))] max-w-xl mb-10 leading-relaxed"
      >
        Sorry! The page you’re looking for doesn’t exist.  
        Maybe it’s off playing one of our games 🎮
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link href="/" passHref>
          <Button className="text-lg px-8 py-6 rounded-2xl shadow-md">
            Take me home 🏠
          </Button>
        </Link>
      </motion.div>

      {/* Small extra detail */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.2 }}
        className="text-sm text-[hsl(var(--muted-foreground))] mt-8 italic"
      >
        (Our mascot definitely didn’t eat the page. Probably.)
      </motion.p>
    </section>
  );
}
