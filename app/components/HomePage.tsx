import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="w-full lg:mt-[100px] mt-[30px] flex lg:flex-row flex-col lg:gap-y-0 gap-y-10 justify-between items-center bg-white">
      <div className="lg:ml-[300px] flex flex-col justify-center text-center lg:gap-y-4 gap-y-2 items-center">
        <h1 className="font-unbounded lg:text-6xl text-4xl uppercase font-bold">
          Sayyed Saad
        </h1>
        <h3 className="lg:text-2xl text-lg capitalize font-medium">
          Fullstack Web Developer - React Js.
        </h3>
        <div className="flex lg:gap-x-8 gap-x-5">
          <button className="bg-red-600 hover:bg-green-400 text-xs hover:text-black duration-300 p-2 font-unbounded text-white lg:text-sm border-2 border-black rounded-lg shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]">
            <Link href="/Sayyed_Saad_Resume.pdf" target="_blank">
              Resume
            </Link>
          </button>
          <button className="bg-blue-700 hover:bg-green-400 text-xs hover:text-black duration-300 p-2 font-unbounded text-white lg:text-sm border-2 border-black rounded-lg shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]">
            <Link href="/Sayyed_Saad_Internship.pdf" target="_blank">
              Internship
            </Link>
          </button>
          <button className="bg-amber-500 hover:bg-green-400 text-xs hover:text-black duration-300 p-2 font-unbounded text-white lg:text-sm border-2 border-black rounded-lg shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]">
            <Link href="/certificates">Certificate</Link>
          </button>
        </div>
        <p className="text-neutral-500 font-semibold capitalize lg:text-sm text-xs mt-2">
          Click to Know more about me!
        </p>
      </div>
      <Image
        src="/avatar.jpg"
        alt="Avatar"
        width={300}
        height={300}
        className="lg:mr-[300px] w-[250px] lg:w-[300px] bg-gradient-to-tr from-blue-500 to-white border-2 border-black rounded-lg shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]"
      />
    </div>
  );
};

export default HomePage;
