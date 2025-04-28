import { Variants, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import icon_aboutUs from "@/assets/icons/icon_aboutUs.png";
import quote from "@/assets/icons/icon_quote1.png";
import medal from "@/assets/icons/icon_medal1.png";
import developer from "@/assets/icons/icon_developer1.png";
import satisfied from "@/assets/icons/icon_satisfied1.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const textVariants: Variants = {
  hide: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};

const pointsVariants: Variants = {
  hide: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};

function Text() {
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
      variants={textVariants}
    >
    <div className="flex flex-col items-center justify-center w-full px-5 gap-4 text-center">
      <div className="flex items-center justify-center w-[40px] h-[40px] md:w-[45px] md:h-[45px] rounded-[6px] md:rounded-[8px] mb-5 bg-[#057dcd] dark:bg-[#057dcd7c]">
        <img
          src={icon_aboutUs.src}
          alt="About Us Icon"
          className="w-5 h-5 md:w-7 md:h-7"
        />
      </div>

      <h2 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl text-[#121D39] dark:text-white">
        {t("about:title")}
      </h2>
      <p className="w-full max-w-[750px] text-black text-sm md:text-xs lg:text-base/relaxed xl:text-base dark:text-white mb-5">
        {t("about:desc")}
      </p>

      <Button className="bg-[#057dcd7c] hover:bg-[#a5e2ff] text-white font-semibold rounded-[8px] px-9 py-2 transition">
        <Link href="#join" className="text-black dark:text-white opacity-100">
          {t("navbar:join-us")}
        </Link>
      </Button>
    </div>
    </motion.div>
  );
}

function Points() {
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
      className="w-full"
      initial="hide"
      animate={control}
      variants={pointsVariants}
    >
      <div className="absolute flex items-end justify-center w-full h-[100px] md:h-[150px] rounded-t-[100%] bg-[#057dcd] dark:bg-[#001526]">
        <div className="flex items-center justify-center w-[40px] h-[40px] md:w-[45px] md:h-[45px] rounded-[6px] md:rounded-[8px] mb-5 md:mb-10 bg-[#ffffff52]">
            <img
              src={quote.src}
              alt="About Us Icon"
              className="w-5 h-5 md:w-7 md:h-7"
            />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full pt-[40px] mt-[70px] md:pt-[60px] md:mt-[90px] p-10 gap-14 bg-[#057dcd] dark:bg-[#001526] text-[#FBFCFF]">

        <h2 className="flex items-center justify-center max-w-[750px] text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl">
          {t("about:title2")}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4  items-center justify-between w-full gap-10 md:gap-16 lg:gap-20 max-w-[1200px] mt-10 mb-10">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center justify-center p-2 md:p-3 bg-[#ffffff52] rounded-full">
              <img 
                src= {medal.src}
                alt="Experiencia estudiantil" 
                className="w-5 h-5 md:w-7 md:h-7"
                />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <h3 className="text-md font-medium">{t("about:point1_title")}</h3>
              <p className="text-sm font-extralight">
                {t("about:point1_desc")}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center justify-center p-2 md:p-3 bg-[#ffffff52] rounded-full">
              <img 
                src= {developer.src}
                alt="Developer" 
                className="w-5 h-5 md:w-7 md:h-7"
                />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <h3 className="text-md font-medium">{t("about:point2_title")}</h3>
              <p className="text-sm font-extralight">
                {t("about:point2_desc")}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center p-2 md:p-3 bg-[#ffffff52] rounded-full">
              <img 
                src= 'https://img.icons8.com/?size=100&id=85369&format=png&color=fbfcff'
                alt="Experiencia estudiantil" 
                className="w-5 h-5 md:w-7 md:h-7"
                />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <h3 className="text-md font-medium">{t("about:point3_title")}</h3>
              <p className="text-sm font-extralight">
                {t("about:point3_desc")}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center p-2 md:p-3 bg-[#ffffff52] rounded-full">
              <img 
                src= {satisfied.src}
                alt="satisfied" 
                className="w-5 h-5 md:w-7 md:h-7"
                />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <h3 className="text-md font-medium">{t("about:point4_title")}</h3>
              <p className="text-sm font-extralight">
                {t("about:point4_desc")}
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center w-full my-24 overflow-hidden"
    >
      <div className="w-full">
        <div className="flex flex-col items-center justify-center w-full text-center gap-[80px]">
          <Text />
          <Points />
        </div>
      </div>
    </section>
  );
}
