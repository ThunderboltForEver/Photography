import Image from "next/image";
import Link from "next/link";
import React from "react";
import { woman1, woman2, woman3, woman4 } from "@/public/img/exports";

const images = [woman1,woman2, woman3, woman4];

export default function Portfolio() {
  return (
    <section className="grid grid-cols-1 gap-8 lg:gap-0 md:grid-cols-2 items-center min-h-screen md:px-8 lg:px-24">
      <div className="flex flex-col gap-4 py-5 items-start max-w-[70%] md:max-w-[350px] mx-auto">
        <h1 className="text-[2.5rem] sm:text-[3rem] font-semibold">
          Portfolio
        </h1>
        <p className="text-gray-800 leading-7">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, ullam!
          Quae repellat tempore dicta iure debitis officia a quidem deleniti
        </p>
        <p className="text-gray-800 leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, unde
          nesciunt! Dolorum, voluptatibus officiis?
        </p>
        <Link href={"/contact"} className="btn">
          Hire Me
        </Link>
      </div>
      <div className="grid grid-cols-1 mx-auto md:grid-cols-2 gap-4">
        
         
        
      </div>
    </section>
  );
}
