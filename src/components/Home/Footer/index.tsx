import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { PiTiktokLogo, PiInstagramLogo } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="bg-gray-100 p-6 md:py-12 w-full dark:bg-gray-800">
      <div className="container max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        <div className="flex items-center gap-2">
          <Link href="/" className="group">
            <Image
              alt="Logo"
              src={Logo}
              className="w-12 h-auto group-hover:brightness-125 transition"
            />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://www.instagram.com/acmuninorte"
            aria-label="Instagram"
            prefetch={false}
            target="_blank"
          >
            <PiInstagramLogo className="h-5 w-5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition" />
          </Link>
          <Link
            href="https://www.tiktok.com/@acmuninorte"
            aria-label="TikTok"
            prefetch={false}
            target="_blank"
          >
            <PiTiktokLogo className="h-5 w-5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition" />
          </Link>
        </div>
        <p className="text-gray-500 dark:text-gray-400">
          &copy; 2024 ACM Uninorte.
        </p>
      </div>
    </footer>
  );
}
