"use client";

import { AnimatePresence, motion } from "framer-motion";

import Link from "next/link";
import { Icons } from "./Icons";

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

const Card = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          variants={cardVariant}
          initial="hidden"
          animate="right"
          custom={1}
        >
          <motion.div
            className=" relative h-fit w-fit overflow-hidden rounded-xl bg-white shadow-lg"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className=" absolute left-0 top-0 m-4 h-fit w-fit">
              <Link
                href="https://edward-hyde.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Icons.logo className=" h-12 select-none stroke-black/10 stroke-[50] transition-all duration-300 ease-in-out hover:stroke-black/50" />
              </Link>
            </div>
            <div className=" w-72">
              <div className="aspect-square overflow-hidden">
                <Icons.pic className=" h-auto w-full select-none" />
              </div>
            </div>
            <div className=" flex flex-col gap-y-3 p-5 pt-1">
              <div className="relative w-fit">
                <h2 className=" -mb-1 text-xs font-medium opacity-40">
                  Web Developer
                </h2>
                <h1 className=" text-xl font-medium">Thilina Rathnayaka</h1>
              </div>
              <div className=" flex flex-col gap-y-1">
                <div className=" font- group w-fit">
                  <Link
                    href="https://wa.me/718913548?text=Message%20Via%20ID"
                    target="_blank"
                    rel="noreferrer"
                    className=" flex items-center gap-x-2"
                  >
                    <Icons.whatsapp className="size-5 transition-all duration-200 ease-in-out group-hover:scale-[1.04] group-active:fill-green-600" />
                    <span className=" text-sm transition-all duration-200 ease-in-out group-hover:-translate-x-[1.5px]">
                      +94 71 891 3548
                    </span>
                  </Link>
                </div>
                <div className=" font- group w-fit">
                  <Link
                    href="https://www.instagram.com/its_thili.rathnayaka/"
                    target="_blank"
                    rel="noreferrer"
                    className=" flex items-center gap-x-2"
                  >
                    <Icons.instagram className="size-5 transition-all duration-200 ease-in-out group-hover:scale-[1.04] group-active:fill-red-600" />
                    <span className=" text-sm transition-all duration-200 ease-in-out group-hover:-translate-x-[1.5px]">
                      its_thili.rathnayaka
                    </span>
                  </Link>
                </div>
                <div className=" font- group w-fit">
                  <Link
                    href="mailto:rathnayaka3548@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className=" flex items-center gap-x-2"
                  >
                    <Icons.gmail className="size-5 transition-all duration-200 ease-in-out group-hover:scale-[1.04] group-active:fill-blue-600" />
                    <span className=" text-sm transition-all duration-200 ease-in-out group-hover:-translate-x-[1.5px]">
                      rathnayaka3548@gmail.com
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Card;
