import { ModeToggle } from "@/components/ownui/theme-toggle";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface NavbarProps {
  className?: string | undefined;
  headerHeight?: number;
}

export default function Navbar({ className, headerHeight }: NavbarProps) {
  const [pastHeader, setPastHeader] = useState<boolean>(false);

  useEffect(() => {
    if (!headerHeight) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;

      if (scrollPosition > (headerHeight * window.innerHeight) / 100) {
        console.log("User has scrolled past 80vh");
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
    <nav className={cn(["w-full py-2 backdrop-blur z-50", className])}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="group">
          <Image
            alt="Logo"
            src={Logo}
            className="w-12 h-auto group-hover:brightness-125 transition"
          />
        </Link>
        <div
          className={cn([
            "flex items-center gap-8",
            pastHeader ? "" : "text-white",
          ])}
        >
          <Link
            href="/"
            className="opacity-50 hover:opacity-100 transition text-sm"
          >
            Inicio
          </Link>
          <Link
            href="/#about"
            className="opacity-50 hover:opacity-100 transition text-sm"
          >
            Acerca de
          </Link>
          <Link
            href="/"
            className="opacity-50 hover:opacity-100 transition text-sm"
          >
            Departamentos
          </Link>
          <Link
            href="/"
            className="opacity-50 hover:opacity-100 transition text-sm"
          >
            Eventos
          </Link>
          <Link
            href="/"
            className="opacity-50 hover:opacity-100 transition text-sm"
          >
            Únete
          </Link>
          <Link
            href="/"
            className="opacity-50 hover:opacity-100 transition text-sm"
          >
            Contáctanos
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
