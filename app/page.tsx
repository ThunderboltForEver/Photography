import Image from "next/image";
import Link from "next/link";
import womanImage from "../public/img/home/woman.png";

export default function Home() {
  return (
    <>
      <main className="flex flex-col md:flex-row h-screen md:px-8 lg:px-24 items-center md:relative">
        <div className=" md:ml-20 mb-10 md:absolute md:z-30">
          <div className="mb-6">
            <h1 className="text-[2.4rem] md:text-[3rem] lg:text-[4.5rem] font-semibold">
              Photographer <br /> & Film Maker
            </h1>
            <p className="text-[1.3rem]">Los Angles , USA</p>
          </div>
          <Link href={"/contact"} className="btn">
            Hire me
          </Link>
        </div>

        <div className="md:max-w-[50%] h-full md:absolute md:right-[30px] lg:right-[94px] overflow-hidden">
          <Image src={womanImage} alt={""} className="h-full hover:scale-110 transition duration-300"/>
        </div>
      </main>
    </>
  );
}
