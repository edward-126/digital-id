"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { MYDATA } from "@/config/Index";
import Link from "next/link";
import { ArrowRight, AtSign, Code, MapPin, Search } from "lucide-react";

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
          className="w-full px-3 sm:w-[450px]"
        >
          {MYDATA.map((item, idx) => (
            <motion.div
              className="flex h-auto w-full flex-col gap-4 rounded-lg border border-border p-4 px-[1.1rem] shadow-sm"
              key={idx}
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
              <div className="flex items-center justify-between">
                <p className="font-medium">Contact Information</p>
                <small className="text-xs font-medium text-muted-foreground">
                  {formatDate(today)}
                </small>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-dashed border-border p-4 px-[1.1rem]">
                <div className="flex items-center gap-3">
                  <Image
                    width={200}
                    height={200}
                    src="/pfp.png"
                    alt={`Profile Image of ${item.name}`}
                    className="size-12 rounded-full border border-border bg-primary/10"
                  />
                  <div className=" flex flex-col gap-0">
                    <p className="font-medium">{item.name}</p>
                    <small className="font-medium text-muted-foreground">
                      {item.title}
                    </small>
                  </div>
                </div>

                <Link
                  href={item.website}
                  target="_blank"
                  className="group/icon active:scale-[0.96]"
                >
                  <div className="relative overflow-hidden rounded-sm border border-border bg-primary/20 p-2">
                    <Search className="size-4 stroke-primary transition-all duration-300 ease-in-out group-hover/icon:scale-[5.5]" />
                    <ArrowRight className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 scale-0 stroke-primary transition-all duration-300 ease-in-out group-hover/icon:scale-[1]" />
                  </div>
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-full border border-border p-3">
                  <MapPin className="size-5" />
                </div>
                <div className=" -space-y-0.5">
                  <span>Location</span>
                  <p className="font-medium">{item.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-full border border-border p-3">
                  <Code className="size-5" />
                </div>
                <div className=" -space-y-0.5">
                  <span>Specialty</span>
                  <div className="flex items-center gap-1.5">
                    {item.specialties.map((specialty, idx) => (
                      <p className="font-medium" key={idx}>
                        {specialty}
                        {idx < item.specialties.length - 1 && ","}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-full border border-border p-3">
                  <AtSign className="size-5" />
                </div>
                <div className=" -space-y-0.5">
                  <span>Email Address</span>
                  <Link href={`mailto:${item.email}`} target="_blank">
                    <p className="font-medium transition-all duration-300 ease-in-out hover:text-primary">
                      {item.email}
                    </p>
                  </Link>
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
