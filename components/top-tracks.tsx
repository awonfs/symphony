"use client";
import Spinner from "./ui/spinner";
import useFadeInWhenInView from "@/lib/hooks/useFadeinWhenInView";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useGetTopTracks } from "@/lib/hooks/useGetTopTracks";

function TopTracks({ token }: { token: string }) {
  const { ref, controls } = useFadeInWhenInView();
  const { data, isLoading, isError } = useGetTopTracks(token);

  if (isLoading) return <Spinner />;
  if (isError)
    return (
      <div className="container flex justify-center mt-32 md:mt-8">
        <Button className="md:w-1/5 py-6 bg-gradient-to-r from-violet-500 to-fuchsia-500 drop-shadow-xl shadow-inner text-sm">
          <Link href="/api/login">Log in to see your stats</Link>
        </Button>
      </div>
    );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="relative flex items-start bg-transparent rounded-lg p-4 mt-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-purple-700 opacity-60 drop-shadow-2xl shadow-inner"></div>{" "}
      <div className="relative z-10 flex flex-col w-full md:w-1/2">
        {data?.items.map((item, index) => (
          <div
            key={index}
            className="flex items-center mb-2 text-start bg-purple-600 text-lime-300 shadow-inner drop-shadow-2xl rounded-xl px-4 py-2 w-3/4 overflow-hidden"
          >
            <div className="text-3xl font-bold mr-4 drop-shadow-2xl">
              {index + 1}
            </div>
            <div className="flex flex-col">
              <span className="text-lime-300 font-semibold text-xl">
                {item.name}
              </span>
              <span className="text-slate-300 text-sm">
                {item.artists[0].name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default TopTracks;
