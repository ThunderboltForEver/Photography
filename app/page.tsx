"use client";
import Image from "next/image";
import Link from "next/link";
import womanImage from "../public/img/home/woman.png";
import { motion } from "framer-motion";
import PageWrapper from "./components/PageWrapper/PageWrapper";

export default function Home() {
  return (
    <PageWrapper  className="overflow-hidden sm:grid-cols-2 md:grid-cols-[40%,1fr] lg:grid-cols-2 mx-auto h-screen md:px-8  xl:px-20 items-center">
      
        <div

          className="mx-auto mb-10 md:relative md:left-12 min-w-fit"
        >
          <div className="mb-6">
            <h1 className="text-[2.5rem] lg:text-[4rem] font-semibold">
              Photographer <br /> & Film Maker
            </h1>
            <p className="text-[1.3rem]">Los Angles , USA</p>
          </div>
          <Link href={"/contact"} className="btn">
            Hire me
          </Link>
        </div>

        <div className="max-w-full h-full overflow-hidden">
          <Image
            src={womanImage}
            alt={""}
            className="max-h-full min-h-full hover:scale-110 transition duration-300"
          />
        </div>
      
    </PageWrapper>
  );
}
