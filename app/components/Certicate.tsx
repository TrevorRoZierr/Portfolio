import Image from "next/image";
import Link from "next/link";

interface CertificateProps {
  image: string;
  link: string;
  desc: string;
}

const Certicate = ({ desc, image, link }: CertificateProps) => {
  return (
    <div className="flex gap-y-3 bg-gradient-to-tr from-red-600 to-purple-800 flex-col justify-center items-center text-center p-2 border-2 border-black rounded-lg">
      <Image
        src={image}
        alt="Certificates"
        width={300}
        height={300}
        className="lg:w-[400px] border-4 border-black rounded-lg"
      />
      <h3 className="font-unbounded font-semibold text-neutral-200">{desc}</h3>
      <button className="bg-white text-xs hover:text-pink-500 duration-300 p-2 font-unbounded text-black lg:text-sm border-2 border-black rounded-lg shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]">
        <Link href={link} target="_blank">
          View
        </Link>
      </button>
    </div>
  );
};

export default Certicate;
