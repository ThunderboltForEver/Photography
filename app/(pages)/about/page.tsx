import Image from "next/image";
import Link from "next/link";
import womanImage from "../../../public/img/about/woman.png";
import PageWrapper from "@/app/components/PageWrapper/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <div className=" md:max-w-[380px] mx-auto sm:pt-24 md:pt-0">
        <Image src={womanImage} alt="" className="max-h-full" />
      </div>
      <div className="flex flex-col gap-4 py-5 items-start md:max-w-[350px] max-[768px]:mx-auto">
        <h1 className="text-[2.5rem] sm:text-[3rem] font-semibold">About Me</h1>
        <p className="text-gray-800 leading-7">
          In photography, I discover joy and creative expression. With a passion
          for capturing beauty and emotions, I invite you to explore my visual
        </p>
        <p className="text-gray-800 leading-7">
          journey. Through my lens, I aim to reveal the extraordinary in the
          ordinary and share unfolding stories in each frame.
        </p>
        <Link href={"/portfolio"} className="btn">
          View My Work
        </Link>
      </div>
    </PageWrapper>
  );
}
