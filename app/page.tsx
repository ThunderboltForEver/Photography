"use client";
import Image from "next/image";
import Link from "next/link";
import womanImage from "../public/img/home/woman.png";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathName = usePathname();

  return (
   
    
  
    <section className="overflow-hidden sm:grid-cols-2 md:grid-cols-[40%,1fr] lg:grid-cols-2 mx-auto h-screen md:px-8  xl:px-20 items-center  grid grid-cols-1 gap-8 lg:gap-0 min-h-screen px-4 lg:px-24">
      <AnimatePresence mode="wait" initial={true}>
        <motion.div
          key={pathName}
          className="mx-auto mb-10 md:relative md:left-12 min-w-fit"
          initial={{ y: "-180%" }}
          animate={{ y: 0 }}
          exit={{ y: "-180%"}}
          transition={{ duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] }}
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
        </motion.div>
        <motion.div
          key={pathName}
          className="max-w-full h-full overflow-hidden"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] }}
        >
          <Image
            src={womanImage}
            alt={""}
            className="max-h-full min-h-full hover:scale-110 transition duration-300"
          />
        </motion.div>
      </AnimatePresence>
    </section>
    
  );
}
