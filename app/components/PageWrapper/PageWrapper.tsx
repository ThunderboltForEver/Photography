"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
export default function PageWrapper({
  children,
  className,
  
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const pathName: string = usePathname();
  return (
    <AnimatePresence mode="wait" initial={true}>
      <motion.section
        key={pathName}
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        className={
          className +
          " " +
          `grid grid-cols-1 gap-8 lg:gap-0 md:grid-cols-2 items-center min-h-screen px-4 md:px-8 lg:px-24`
        }
        exit={{
          opacity: 0,
        }}
      >
        {children}
      </motion.section>
    </AnimatePresence>
  );
}
