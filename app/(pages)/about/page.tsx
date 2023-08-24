import Image from "next/image";
import Link from "next/link";
import womanImage from "../../../public/img/about/woman.png";

export default function About() {
  return (
    <section className="grid grid-cols-1 gap-8 lg:gap-0 md:grid-cols-2 items-center h-screen md:px-8 lg:px-24">
      <div className="max-w-[90%] md:max-w-[380px] mx-auto">
        <Image src={womanImage} alt="" className="max-h-full" />
      </div>
      <div className="flex flex-col gap-4 py-5 items-start max-w-[70%] md:max-w-[350px] max-[768px]:mx-auto">
        <h1 className="text-[2.5rem] sm:text-[3rem] font-semibold" >About Me</h1>
        <p className="text-gray-800 leading-7">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, ullam!
          Quae repellat tempore dicta iure debitis officia a quidem deleniti
        </p>
        <p className="text-gray-800 leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, unde
          nesciunt! Dolorum, voluptatibus officiis? 
        </p>
        <Link href={'/portfolio'} className='btn'>View My Work</Link>
      </div>
    </section>
  );
}
