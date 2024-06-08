import { ModeToggle } from "@/components/ownui/theme-toggle";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string | undefined;
}

export default function Navbar({ className }: NavbarProps) {
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
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="opacity-50 hover:opacity-100 transition text-sm"
          >
            Inicio
          </Link>
          <Link
            href="/"
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
