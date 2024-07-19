"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Photo = () => {
  return (
    <div className="h-full w-full ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
        }}
      >
        <div className="w-[298] h-[298] xl:w-[498] xl:h-[498] mix-blend-lighten ">
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            width={370}
            height={370}
            alt=""
            className="object-contain rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
