import { Github, Linkedin } from "lucide-react";

function Header() {
  return (
    <header className="container flex items-center justify-evenly border border-white py-6 mt-4 text-white rounded-xl w-3/4">
      <div>
        <h1 className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl">
          Symphony
        </h1>
      </div>
      <nav>
        <ul className="flex gap-3">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="flex gap-2">
        <Github />
        <Linkedin />
      </div>
    </header>
  );
}

export default Header;
