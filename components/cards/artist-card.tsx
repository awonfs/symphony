"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import useFadeInWhenInView from "@/lib/hooks/useFadeinWhenInView";

interface ArtistCardProps {
  imageUrl: string;
  songName: string;
  artistName: string;
  albumName: string;
  songLink: string;
}

const ArtistCard: React.FC<ArtistCardProps> = ({
  imageUrl,
  songName,
  artistName,
  albumName,
  songLink,
}) => {
  const { ref, controls } = useFadeInWhenInView();
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={controls}>
      <Card className="flex flex-col bg-gradient-to-r from-violet-500 to-fuchsia-500 drop-shadow-xl shadow-inner border-none rounded-lg h-[400px] w-[300px] hover:scale-105 hover:drop-shadow-2xl transition-all ">
        <CardHeader className="relative flex-grow">
          <Image
            className="rounded-t-lg"
            layout="fill"
            objectFit="cover"
            src={imageUrl}
            alt={`Cover image for ${songName}`}
            placeholder="blur"
            blurDataURL={imageUrl}
          />
        </CardHeader>
        <CardContent className="px-2 py-1 mt-2"></CardContent>
        <CardFooter className="truncate flex flex-col items-start w-full font-semibold p-5">
          <CardTitle className=" text-white text-base">{songName}</CardTitle>
          <CardDescription className="text-gray-200  text-xs">
            {artistName}
          </CardDescription>
          <CardDescription className="text-gray-300  text-xs">
            {albumName}
          </CardDescription>
          <Link
            href={songLink}
            target="_blank"
            className="text-gray-300 underline mt-1"
            rel="noopener noreferrer"
          >
            Listen on Spotify
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ArtistCard;
