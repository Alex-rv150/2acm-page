import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { PiTiktokLogo, PiInstagramLogo } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation(); // sin argumentos

  return (
    <footer className="bg-gray-100 p-8 md:py-12 w-full dark:bg-gray-800">
      <div className="container max-w-4xl mx-auto flex flex-col items-center text-center gap-6 text-sm">
        <Link href="/" className="group">
          <Image
            alt="Logo ACM UniNorte"
            src={Logo}
            className="w-16 h-auto group-hover:brightness-125 transition"
          />
        </Link>

        <p className="text-gray-600 dark:text-gray-400 max-w-xl">
          {t("footer:description")}
        </p>

        <div className="flex gap-6 items-center justify-center">
          <Link
            href="https://www.instagram.com/acmuninorte"
            aria-label="Instagram"
            target="_blank"
            prefetch={false}
          >
            <PiInstagramLogo className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition" />
          </Link>
          <Link
            href="https://www.tiktok.com/@acmuninorte"
            aria-label="TikTok"
            target="_blank"
            prefetch={false}
          >
            <PiTiktokLogo className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/acmuninorte/"
            aria-label="LinkedIn"
            target="_blank"
            prefetch={false}
          >
            <FaLinkedin className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition" />
          </Link>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <Link
            href="mailto:acm@uninorte.edu.co"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition"
          >
            {t("footer:contact")}
          </Link>
          <Link
            href="https://www.acm.org/"
            target="_blank"
            prefetch={false}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition underline"
          >
            {t("footer:acmGlobal")}
          </Link>
        </div>

        <p className="text-gray-500 dark:text-gray-400 mt-4">
          &copy; 2025 ACM UniNorte. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
