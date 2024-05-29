import { ArrowBigRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  title: string;
  link: string;
  image: string;
  desc: string;
}

const Project = ({ title, link, image, desc }: ProjectProps) => {
  return (
    <div className="flex gap-y-3 bg-gradient-to-tr from-red-300 to-green-200 flex-col justify-center items-center text-center p-2 border-2 border-black rounded-lg">
      <Image
        src={image}
        alt="Project"
        width={300}
        height={300}
        className="lg:w-[400px] border-4 border-black rounded-lg"
      />
      <h3 className="font-unbounded font-semibold">{title}</h3>
      <button className="bg-indigo-600 text-xs hover:text-black duration-300 p-2 font-unbounded text-white lg:text-sm border-2 border-black rounded-lg shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]">
        <Link href={link}>
          <ArrowBigRight />
        </Link>
      </button>
      <p className="text-sm font-bold">{desc}</p>
    </div>
  );
};

export default Project;
