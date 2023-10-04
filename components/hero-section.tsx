"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import useFadeInWhenInView from "@/lib/hooks/useFadeinWhenInView";

function HeroSection() {
  const { controls, ref } = useFadeInWhenInView();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="container md:h-screen"
    >
      <div className="flex flex-col w-full py-6 items-center text-center gap-3">
        <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 from-10% via-purple-400 via-30% to-emerald-500 font-bold md:text-7xl pb-2">
          Welcome to Symphony
        </span>
        <span className="text-slate-200 text-xs md:text-lg">
          Check your most listened tracks and artists on Spotify or search for
          new music
        </span>
        <Button className="py-6 bg-primary-gradient md:w-1/5 md:text-xl">
          <Link href="/api/login">Get started now</Link>
        </Button>
      </div>
    </motion.div>
  );
}

export default HeroSection;
