"use client";
import Link from "next/link";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { Variants, motion } from "framer-motion";
import { links } from "../data/NavData";
import Socials from "./Socials";

interface MenuVariants {
  hidden: {
    x: string;
    transition?: {
      easeOut: number[];
    };
  };
  show: {
    x: number;
    transition: {
      ease: number[];
    };
  };
}
const menuVariants: MenuVariants = {
  hidden: {
    x: "100%",
    transition: {
      easeOut: [2.6, 2.4, 1.5, 0.9],
    },
  },
  show: {
    x: 0,
    transition: {
      ease: [2.6, 2.4, 1.5, 0.9],
    },
  },
};
const variants: Variants = {
  hidden: menuVariants.hidden,
  show: menuVariants.show,
};

export default function MobileNav() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <nav className="md:hidden">
      <div
        onClick={() => {
          setOpenMenu(true);
        }}
        className="text-2xl md:hidden cursor-pointer"
      >
        <CgMenuRight />
      </div>

      <motion.div
        className="md:hidden text-xl font-semibold fixed top-0 right-0 min-h-screen bg-[#f9fbfb] flex flex-col items-center justify-center gap-6 w-[250px]"
        initial={menuVariants.hidden}
        variants={variants}
        animate={openMenu ? "show" : "hidden"}
      >
        <div
          className="absolute top-4 left-4 cursor-pointer"
          onClick={() => {
            setOpenMenu(false);
          }}
        >
          <IoMdClose />
        </div>

        {links.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.url}
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              {link.text}
            </Link>
          );
        })}
        <div className="absolute bottom-40">
          <Socials />
        </div>
      </motion.div>
    </nav>
  );
}
