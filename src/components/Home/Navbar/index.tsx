import { ModeToggle } from "@/components/ownui/theme-toggle";
import { LanguageSwitch } from "@/components/ownui/language-switch";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import Logo2 from "@/assets/logo2.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string | undefined;
  headerHeight?: number;
}

export default function Navbar({ className, headerHeight }: NavbarProps) {
  const [pastHeader, setPastHeader] = useState<boolean>(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (!headerHeight) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;

      if (scrollPosition > (headerHeight * window.innerHeight) / 100) {
        setPastHeader(true);
      } else {
        setPastHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav className="flex flex-col items-center justify-center w-full md:px-5 md:pt-5 bg-none md:bg-[#FBFCFF]">
      <div className="flex w-full px-5 justify-between items-center">
        <div className="hidden md:flex items-center text-[#000000] gap-16">
          <Link
            href="#contact"
            className="hover:text-[#a5e2ff] transition text-sm"
          >
            {t("navbar:contact")}
          </Link>
          <Link
            href="#about"
            className="hover:text-[#a5e2ff] transition text-sm"
          >
            {t("navbar:about_us")}
          </Link>

        </div>
        <Link href="/" className="group md:hidden">
          <Image
            alt="Logo"
            src={Logo2}
            className="w-12 h-auto group-hover:brightness-125 transition"
          />
        </Link>
        <div
          className={cn([
            "items-center gap-8 hidden md:flex",
            pastHeader ? "" : "text-[#424242]",
          ])}
        >
          {/* <Link
            href="#header"
            className="hover:text-[#a5e2ff] transition text-sm"
          >
            {t("navbar:home")}
          </Link>
          
          <Link
            href="#departments"
            className="hover:text-[#a5e2ff] transition text-sm"
          >
            {t("navbar:departments")}
          </Link>
          <Link
            href="#events"
            className="hover:text-[#a5e2ff] transition text-sm"
          >
            {t("navbar:events")}
          </Link>
          <Link
            href="#"
            className="hover:text-[#a5e2ff] transition text-sm"
          >
            {t("navbar:join-us")}
          </Link> */}
          
          {/* <ModeToggle /> */}
          <LanguageSwitch />
          <Button className="bg-[#057DCD] hover:bg-[#a5e2ff] text-white font-semibold rounded-[8px] px-9 py-2 transition">
            <Link href="#join" className="text-white">
              {t("navbar:join-us")}
            </Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden bg-transparent border-none">
              <Menu className="h-6 w-6 text-[#FBFCFF] dark:text-gray-300" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 p-6">
              <SheetClose asChild>
                <Link
                  href="#header"
                  className="text-black hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  {t("navbar:home")}
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="#about"
                  className="text-black hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  {t("navbar:about_us")}
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="#departments"
                  className="text-black hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  {t("navbar:departments")}
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="#events"
                  className="text-black hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  {t("navbar:events")}
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="#join"
                  className="text-black hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  {t("navbar:join-us")}
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="#contact"
                  className="text-black hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  {t("navbar:contact")}
                </Link>
              </SheetClose>
              <div>
                <ModeToggle />
                <LanguageSwitch />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:flex items-center justify-center">
      <Link href="/" className="group">
          <Image
            alt="Logo"
            src={Logo}
            className="w-12 h-auto group-hover:brightness-125 transition"
          />
        </Link>
      </div>

      <div className="hidden md:flex w-full h-[60px] border-gray-200 border-t-[1px] items-center justify-center mx-4 mt-5">
          
            <Link href="#header" className="flex items-center justify-center w-[150px] h-full text-[#000000] hover:bg-[#057dcd12] transition text-sm">
              {t("navbar:home")}
            </Link>
            <Link href="#about" className="flex items-center justify-center w-[150px] h-full text-[#000000] hover:bg-[#057dcd12] transition text-sm">
              {t("navbar:about_us")}
            </Link>
            <Link href="#departments" className="flex items-center justify-center w-[150px] h-full text-[#000000] hover:bg-[#057dcd12] transition text-sm">
              {t("navbar:departments")}
            </Link>
            <Link href="#events" className="flex items-center justify-center w-[150px] h-full text-[#000000] hover:bg-[#057dcd12] transition text-sm">
              {t("navbar:events")}
            </Link>
      </div>
    </nav>
  );
}
