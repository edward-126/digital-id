"use client";

import { motion, AnimatePresence } from "framer-motion";

import img from "@/app/assets/Pinterest image (3).jpeg";

{
  console.log("Have a Nice Day 😉🖖!");
}

const scaleVariants = {
  whileInView: {
    scale: [1.5, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: [0.43, 0.13, 0.23, 0.96],
      type: "ease-in",
    },
  },
};

const Card = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div variants={scaleVariants} animate="whileInView">
          <motion.div
            className=" overflow-hidden relative h-fit w-fit rounded-2xl shadow-lg bg-white"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          >
            <div className=" absolute w-fit rotate-90 my-24 -mx-12 h-fit top-0 left-0">
              <h1 className="font-medium uppercase select-none tracking-widest">
                Web&nbsp;&nbsp;Developer
              </h1>
            </div>
            <div className=" w-72">
              <div className="overflow-hidden">
                <img
                  src={img.src}
                  alt=""
                  className=" w-full h-auto select-none"
                  style={{ userSelect: "none", pointerEvents: "none" }}
                />
              </div>
            </div>
            <div className=" p-5">
              <div className=" relative w-fit">
                <div className=" absolute bottom-0 left-0 h-[.5px] w-full bg-neutral-950/30"></div>
                <h1 className="font-medium tracking-wide mb-2 text-xl">
                  Thilina Rathnayaka
                </h1>
              </div>

              <a
                href="mailto:rathnayaka3548@gmail.com"
                className="mb-1 text-sm"
                target="_blank"
                rel="noreferrer"
              >
                <motion.div
                  className=""
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <p className="inline-block tracking-wider font-medium">
                    MAIL{" "}
                  </p>
                  <p className=" mx-2 inline-block font-medium"> | </p>
                  rathnayaka3548@gmail.com
                </motion.div>
              </a>

              <a
                href="https://www.instagram.com/morningstar_126/"
                className=" mb-1 text-sm"
                target="_blank"
                rel="noreferrer"
              >
                <motion.div
                  className=" "
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <p className="inline-block tracking-wider font-medium">
                    INSTAGRAM{" "}
                  </p>
                  <p className=" mx-2 inline-block font-medium"> | </p>
                  @morningstar_126
                </motion.div>
              </a>

              <a
                href="https://wa.me/718913548?text=Message%20Via%20ID"
                className=" mb-1 text-sm"
                target="_blank"
                rel="noreferrer"
              >
                <motion.div
                  className=" "
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <p className="inline-block tracking-wider font-medium">
                    WHATSAPP{" "}
                  </p>
                  <p className=" mx-2 inline-block font-medium"> | </p>
                  +94 71 891 3548
                </motion.div>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Card;
