import { Variants, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";

import statistics from "@/assets/icons/icon_statistics1.png";
import male from "@/assets/icons/icon_male.png"
import female from "@/assets/icons/icon_female.png"
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const oddVariants: Variants = {
  hide: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
    },
  },
};

const evenVariants: Variants = {
  hide: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
    },
  },
};

function Members() {
  const { t } = useTranslation();

  const control = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      control.start("show");
    }
  }, [control, inView]);

  return (
    <motion.div
      
      ref={ref}
      initial="hide"
      animate={control}
      variants={oddVariants}
    >
      <div className="flex items-center justify-center gap-x-4">
        <div className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14">
          <img
            src="https://img.icons8.com/?size=100&id=85369&format=png&color=16243B"
            alt="total members"
            className="w-10 h-10 md:w-14 md:h-14"
          />
        </div>
        <div className="flex flex-col items-center justify-center">

          <span className="flex items-center justify-center text-left md:text-3xl font-bold">
            +
            <AnimatedNumbers
              transitions={(index) => ({
                type: "spring",
                duration: index + 0.3,
              })}
              animateToNumber={130}
            />
          </span>
          <p className="text-[12px] md:text-md text-black dark:text-white font-extralight">
            {t("statistics:total_members")}
          </p>
        </div>
      </div>
        
      
    </motion.div>
  );
}

function Male() {
  const { t } = useTranslation();

  const control = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      control.start("show");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hide"
      animate={control}
      variants={evenVariants}
    >
      <div className="flex items-center justify-center gap-x-4">
        <div className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14">
          <img
            src={male.src}
            alt="statistics"
            className="h-10 w-10 md:w-14 md:h-14"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="flex items-center justify-center text-left md:text-3xl font-bold">
            <AnimatedNumbers
              transitions={(index) => ({
                type: "spring",
                duration: index + 0.3,
              })}
              animateToNumber={60}
            />
          </span>
            <p className="text-[12px] md:text-md text-black dark:text-white font-extralight">
              {t("statistics:male")}
            </p>
        </div>
      </div>
    </motion.div>
  );
}

function Female() {
  const { t } = useTranslation();

  const control = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      control.start("show");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hide"
      animate={control}
      variants={oddVariants}
    >
      <div className="flex items-center justify-center gap-x-4">
        <div className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14">
          <img
            src={female.src}
            alt="statistics"
            className="w-10 h-10 md:w-14 md:h-14"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="flex items-center justify-center text-left md:text-3xl font-bold">
            <AnimatedNumbers
              transitions={(index) => ({
                type: "spring",
                duration: index + 0.3,
              })}
              animateToNumber={10}
            />
          </span>
          <p className="text-[12px] text-left md:text-md text-black dark:text-white font-extralight">
            {t("statistics:female")}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Statistics() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center w-full text-center gap-[80px]">
      <div className="flex flex-col items-center justify-center w-full px-5 gap-4 text-center">
      <div className="flex items-center justify-center w-[40px] h-[40px] md:w-[45px] md:h-[45px] rounded-[6px] md:rounded-[8px] mb-5 bg-[#057dcd] dark:bg-[#057dcd7c]">
        <img
          src={statistics.src}
          alt="statistics"
          className="w-5 h-5 md:w-7 md:h-7"
        />
      </div>

      <h2 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl text-[#121D39] dark:text-white">
        {t("statistics:title")}
      </h2>
      <p className="w-full max-w-[750px] text-black text-sm md:text-xs xl:text-base dark:text-gray-400 mb-5">
        {t("statistics:description")}
      </p>
      <div className="flex items-center justify-center gap-4 md:gap-20 max-w-[750px] p-4 px-10 rounded-[10px] bg-[#057dcd32]">
        <Members />
        <Male />
        <Female />
      </div>
    </div>
    </div>
  );
}
