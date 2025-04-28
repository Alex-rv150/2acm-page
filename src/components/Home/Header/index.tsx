import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import Background from "./Background";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

// function Wave() {
//   const { theme } = useTheme();
//   const [fill, setlFill] = useState<string>("#fff");

//   useEffect(() => {
//     setlFill(theme == "light" ? "#fff" : "#020817");
//   }, [theme]);

//   return (
//     <svg
//       style={{ transform: "rotate(0deg)", transition: "0.3s" }}
//       viewBox="0 0 1440 210"
//       version="1.1"
//       xmlns="http://www.w3.org/2000/svg"
//       className="absolute bottom-0"
//     >
//       <path
//         style={{ transform: "translate(0, 0px)", opacity: 1 }}
//         fill="rgba(59, 130, 246, 1)"
//         d="M0,63L1440,189L2880,42L4320,63L5760,168L7200,105L8640,21L10080,126L11520,105L12960,147L14400,21L15840,105L17280,168L18720,189L20160,84L21600,42L23040,189L24480,147L25920,189L27360,147L28800,84L30240,63L31680,0L33120,63L34560,63L34560,210L33120,210L31680,210L30240,210L28800,210L27360,210L25920,210L24480,210L23040,210L21600,210L20160,210L18720,210L17280,210L15840,210L14400,210L12960,210L11520,210L10080,210L8640,210L7200,210L5760,210L4320,210L2880,210L1440,210L0,210Z"
//       ></path>
//       <path
//         style={{ transform: "translate(0, 50px)", opacity: 1 }}
//         fill={fill}
//         d="M0,126L1440,84L2880,126L4320,42L5760,105L7200,63L8640,0L10080,0L11520,189L12960,147L14400,21L15840,147L17280,21L18720,168L20160,147L21600,84L23040,84L24480,42L25920,105L27360,168L28800,84L30240,42L31680,21L33120,42L34560,105L34560,210L33120,210L31680,210L30240,210L28800,210L27360,210L25920,210L24480,210L23040,210L21600,210L20160,210L18720,210L17280,210L15840,210L14400,210L12960,210L11520,210L10080,210L8640,210L7200,210L5760,210L4320,210L2880,210L1440,210L0,210Z"
//       ></path>
//     </svg>
//   );
// }

interface HeaderProps {
  height: number;
}

export default function Header({ height }: HeaderProps) {
  const { t } = useTranslation();

  return (
    <div
      className="w-full"
      id="header"
      /* Dynamic height: */ style={{ height: `${height}vh` }}
    >
      <Background />
      <div className="absolute w-full md:w-auto h-[40vh] md:h-auto flex flex-col justify-center md:justify-start items-center md:items-start text-center md:text-left md:absolute md:top-auto md:right-auto md:left-[10vw] md:bottom-[20vh] md:translate-x-0 md:translate-y-0 select-none">
        <div>

        <p className="text-md md:text-xl text-white md:mb-10">
            {t("header:subtitle1")}
        </p>
        <div className="flex flex-col gap-6 w-full justify-center mb-5">
          {/* <Image
            src={Logo}
            alt="Logo"
            className="h-28 w-auto drop-shadow-xl"
          ></Image> */}
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl drop-shadow-xl">
            {t("header:title1")} <br />
            {t("header:title2")}
          </h1>
        </div>
        <p className="text-md md:text-xl text-white mb-10">
          {t("header:subtitle2")}
        </p>
        </div>
        <div className="flex w-full items-center justify-center md:justify-start gap-1">
        <Button className="bg-white hover:bg-[#a5e2ff] w-[130px] text-black font-semibold rounded-[8px] py-[20px] transition mr-2">
            <Link href="#join" className="text-black">
              {t("navbar:join-us")}
            </Link>
        </Button>
        <Button className="bg-[#1E2533] bg-opacity-20 hover:bg-opacity-30 w-[130px] text-white font-semibold rounded-[8px] py-[20px] transition ml-2">
            <Link href="#about" className="text-white">
              {t("navbar:about_us")}
            </Link>
        </Button>
        </div>
        
      </div>
      {/* <Wave /> */}
    </div>
  );
}
