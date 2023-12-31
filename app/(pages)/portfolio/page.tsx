import Image from "next/image";
import Link from "next/link";
import React from "react";
import { woman1, woman2, woman3, woman4 } from "@/public/img/exports";
import PageWrapper from "@/app/components/PageWrapper/PageWrapper";
const images = [woman1, woman2, woman3, woman4];

export default function Portfolio() {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-4 py-5 items-start sm:max-w-[70%] md:max-w-[350px] mx-auto sm:pt-24 md:pt-0">
        <h1 className="text-[2.5rem] sm:text-[3rem] font-semibold">
          Portfolio
        </h1>
        <p className="text-gray-800 leading-7">
          My photography portfolio is a visual odyssey capturing life&apos;s
          extraordinary moments, from the vibrant hues of sunsets over remote
          landscapes to the intimate emotions shared between people.
        </p>
        <p className="text-gray-800 leading-7">
          Each frame in my portfolio is a testament to my commitment to
          storytelling through imagery, evoking feelings and memories that
          resonate deeply with viewers.
        </p>
        <Link href={"/contact"} className="btn">
          Hire Me
        </Link>
      </div>
      <div className=" flex flex-wrap justify-center md:grid md:grid-cols-2 gap-4 ">
        {images.map((image, key) => (
          <div
            className="overflow-hidden w-full sm:w-[70%] md:w-full"
            key={key}
          >
            <Image
              src={image}
              alt=""
              className="hover:scale-110 transition w-full"
            />
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
