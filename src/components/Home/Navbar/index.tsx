import { ModeToggle } from "@/components/ownui/theme-toggle";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full py-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="group">
          <Image alt="Logo" src={Logo} className="w-12 h-auto group-hover:brightness-125 transition" />
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
            Acerca de
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
