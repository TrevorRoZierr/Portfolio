import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full lg:p-6 p-8">
      <h1 className="font-arizona lg:text-4xl text-3xl lg:ml-6 ml-2">Trev.</h1>
      <ul className="flex lg:gap-x-6 gap-x-3 font-unbounded text-black duration-300 font-medium ">
        <li>
          <Link
            href="https://github.com/TrevorRoZierr/"
            className="lg:w-8 lg:h-8 w-4 h-4"
          >
            <Github />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/saad-sayyed-b7b000304/"
            className="lg:w-8 lg:h-8 w-4 h-4"
          >
            <Linkedin />
          </Link>
        </li>
        <li>
          <Link
            href="https://x.com/trEvoR7223"
            className="lg:w-8 lg:h-8 w-4 h-4"
          >
            <Twitter />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/trevor.rozierr/"
            className="lg:w-8 lg:h-8 w-4 h-4"
          >
            <Instagram />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;