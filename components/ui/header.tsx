import { Github, Linkedin, PlayCircleIcon } from "lucide-react";
import NavGroup from "./nav-group";
import Link from "next/link";

function Header() {
  return (
    <header className="container sticky top-0 flex items-center justify-evenly py-6 mt-4 text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl w-3/4 drop-shadow-lg shadow-inner">
      <div className="flex gap-2 items-center justify-center hover:cursor-pointer">
        <h1 className="text-xl tracking-tight lg:text-3xl">Symphony</h1>
        <PlayCircleIcon strokeWidth={2} size={28} />
      </div>
      <nav>
        <NavGroup />
      </nav>
      <div className="flex gap-2">
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
    </header>
  );
}

export default Header;
