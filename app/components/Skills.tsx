import Image from "next/image";

const Skills = () => {
  return (
    <div className="w-full flex flex-col lg:gap-y-16 gap-y-6 justify-center items-center lg:mt-[200px] mt-[80px] mb-[100px] lg:mb-[100px]">
      <h1 className="lg:text-5xl text-4xl uppercase font-unbounded">Skills</h1>
      <Image
        src="/stack.jpg"
        alt="Tech Stack"
        width={1200}
        height={400}
        className="lg:w-[1000px] w-[350px] border-2 border-black rounded-lg shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]"
      />
    </div>
  );
};

export default Skills;
