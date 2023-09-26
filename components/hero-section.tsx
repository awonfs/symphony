import { Button } from "./ui/button";

function HeroSection() {
  return (
    <div className="container md:h-screen">
      <div className="flex flex-col w-full py-6 items-center text-center gap-3">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 from-10% via-purple-400 via-30% to-emerald-500 font-bold md:text-7xl">
          Welcome to Symphony
        </span>
        <span className="text-slate-200">
          Search your favorite artists and songs easily with Symphony
        </span>
        <Button className="w-1/5 py-6 bg-gradient-to-r from-violet-500 to-fuchsia-500 drop-shadow-xl shadow-inner text-xl">
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
