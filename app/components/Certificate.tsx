import Link from "next/link";

interface CertificateProps {
  title: string;
  link: string;
  desc: string;
}

const Certificate = ({ desc, title, link }: CertificateProps) => {
  return (
    <div className="flex gap-y-3 bg-gradient-to-tr from-red-600 to-purple-800 flex-col justify-center items-center text-center p-4 shadow-[0.45rem_0.45rem_10px_0px_rgba(0,0,0,1)] border-2 border-black rounded-lg bg-white">
      <h3 className="font-unbounded font-semibold text-neutral-200">{title}</h3>
      <p className="font-semibold text-neutral-200 text-sm">{desc}</p>
      <button className="bg-white text-xs hover:text-pink-500 duration-300 p-2 font-unbounded text-black lg:text-sm border-2 border-black rounded-lg shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]">
        <Link href={link} target="_blank">
          View
        </Link>
      </button>
    </div>
  );
};

export default Certificate;
