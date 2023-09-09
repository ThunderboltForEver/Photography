import Button from "@/app/components/Button/Button";
import Image from "next/image";
import WomanImage from "../../../public/img/contact/woman.png";
import PageWrapper from "@/app/components/PageWrapper/PageWrapper";

export default function contact() {
  return (
    <PageWrapper className="gradient">
      <div className=" max-w-[80%] mx-auto sm:mt-24 flex flex-col gap-4 mb-40 sm:mb-0">
        <div>
          <h1 className="text-[3rem] lg:text-[3.8rem] font-semibold">
            Contact Me
          </h1>
          <p className="text-[#666]">
            I would love to get suggestions from you
          </p>
        </div>
        <form action="" className="flex flex-col max-w-full gap-4">
          <div className="flex flex-1 relative flex-wrap gap-4">
            <input
              type="text"
              name=""
              id="name"
              placeholder="Enter you name"
              className="outline-none border-b p-1 flex-1 md:bg-[#E4F1F4] border-b-black"
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email"
              className="outline-none border-b border-b-black p-1 flex-1 md:bg-[#E4F1F4]"
            />
          </div>

          <div className="flex flex-col gap-4 w-full">
            <input
              type="text"
              name=""
              id=""
              placeholder="Your Message"
              className="outline-none border-b border-b-black p-1 min-w-full md:bg-[#E4F1F4]"
            />
            <Button />
          </div>
        </form>
      </div>
      <div className="relative min-h-screen overflow-hidden flex items-center">
        <Image
          src={WomanImage}
          alt=""
          className="md:absolute md:top-1/2 md:-translate-y-[50%] lg:top-0 lg:translate-y-20 lg:min-h-screen md:bottom-0 md:max-h-[900px]"
        />
      </div>
    </PageWrapper>
  );
}
