"use client";

import React from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
export default function PageWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const pathName: string = usePathname();

  interface PageVariants {
    hidden: {
      opacity: number;
      y: number;
    };
    show: {
      opacity: number;
      y: number;
      transition: {
        duration: number;
      };
    };
  }

  const pageVariants: PageVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const variants: Variants = {
    hidden: pageVariants.hidden,
    show: pageVariants.show,
  };

  return (
    <AnimatePresence mode="popLayout" initial={true}>
      <motion.section
        key={pathName}
        initial={"hidden"}
        animate={"show"}
        variants={variants}
        className={
          className +
          " " +
          `grid grid-cols-1 gap-8 lg:gap-0 md:grid-cols-2 items-center min-h-screen px-4 md:px-8 lg:px-24`
        }
        exit={"hidden"}
      >
        {children}
      </motion.section>
    </AnimatePresence>
  );
}
