"use client";
import { motion } from "framer-motion";
import useFadeInWhenInView from "@/lib/hooks/useFadeinWhenInView";
import { Github, Linkedin, PlayCircleIcon } from "lucide-react";
import NavGroup from "./nav-group";
import Link from "next/link";

function Header() {
  const { controls, ref } = useFadeInWhenInView();
  return (
    <motion.header
      ref={ref}
      initial={{ opacity: 0, y: -5 }}
      animate={controls}
      className="container flex items-center justify-around py-6 mt-4 text-white bg-primary-gradient rounded-xl w-3/4"
    >
      <Link
        href="/"
        className="flex gap-2 items-center justify-center hover:cursor-pointer"
      >
        <PlayCircleIcon strokeWidth={2} size={28} />
        <h1 className="text-xl tracking-tight lg:text-3xl">Symphony</h1>
      </Link>
      <nav>
        <NavGroup />
      </nav>
      <div className="hidden md:flex md:gap-2">
        <Link href="https://github.com/awonfs" target="_blank">
          <Github />
        </Link>
        <Link
          href="https://www.linkedin.com/in/eetu-r%C3%B6nkk%C3%B6-433289246/"
          target="_blank"
        >
          <Linkedin />
        </Link>
      </div>
    </motion.header>
  );
}

export default Header;
