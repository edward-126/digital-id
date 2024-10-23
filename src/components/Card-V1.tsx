"use client";

import { AnimatePresence, motion } from "framer-motion";

import Link from "next/link";
import { Icons } from "./Icons";
import { MYDATA } from "@/config/Index";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";

const cardVariant = {
  hidden: { opacity: 0 },

  right: (i: number) => ({
    scale: [2, 1],
    opacity: [0, 0, 1],
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 200,
      damping: 40,
      ease: "easeOut",
      delay: i * 0.1,
    },
  }),
};

const blurVariant = {
  hidden: { filter: "blur(10px)", opacity: 0 },
  visible: { filter: "blur(0px)", opacity: 1 },
};

function formatDate(date: Date): string {
  const day = date.getDate().toString().padStart(2, "0");
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const month = monthNames[date.getMonth()];
  return `${day} ${month}`;
}

const today = new Date();

const Card = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          variants={blurVariant}
        >
          {MYDATA.map((item, idx) => (
            <motion.div
              key={idx}
              className={cn(
                "relative flex h-[450px] w-[300px] flex-col items-center justify-between overflow-hidden rounded-xl border border-dashed border-primary/15 bg-white",
                GeistMono.className,
              )}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 1.01, rotate: 0.7 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
                duration: 1,
              }}
            >
              <div className="h-[50px] w-full px-[14px] pt-[13px]">
                <div className="flex h-fit w-full items-center justify-between">
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1, delay: 1 }}
                    variants={blurVariant}
                    className="group peer -mt-1"
                  >
                    <span className="text-[14px] font-semibold transition-all duration-300 ease-in-out group-hover:text-[14.5px] group-hover:font-bold">
                      {item.name}
                    </span>
                  </motion.div>

                  <motion.div
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1, delay: 1.1 }}
                    variants={blurVariant}
                    className="text-[10px] text-primary/50 transition-all duration-300 ease-in-out peer-hover:text-primary/0"
                  >
                    {item.title}
                    <span className=""></span>
                  </motion.div>
                </div>
              </div>
              <Icons.thili className="w-[118.35px]" />
              <div className="h-[50px] w-full px-[14px] pb-[10px]">
                <div className="-mb-1 flex h-full w-full items-end justify-between">
                  <Link href={item.website} target="_blank" className="group">
                    <motion.span
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 1, delay: 1.2 }}
                      variants={blurVariant}
                      className="text-xs text-primary/50 transition-all duration-300 ease-in-out group-hover:font-medium group-hover:text-primary/70 group-active:text-primary"
                    >
                      {item.websiteDisplay}
                    </motion.span>
                  </Link>
                  <motion.span
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1, delay: 1.3 }}
                    variants={blurVariant}
                    className="text-xs text-primary/50"
                  >
                    {formatDate(today)}
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Card;
