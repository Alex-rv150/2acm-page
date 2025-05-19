"use client";

import ReactCountryFlag from "react-country-flag";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import { usePathname, useRouter } from "next/navigation";
import i18nConfig from "@/next-i18next.config.mjs";
import { Icon } from "lucide-react";

export function LanguageSwitch() {
  const { i18n, t } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const pathname = usePathname();

  const languageNames: Record<string, string> = {
    en: "English",
    es: "Español",
    it: "Italiano",
  };

  const handleChange = async (newLocale: string) => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // Change the language in i18n
    await i18n.changeLanguage(newLocale);

    // redirect to the new locale path
    const segments = pathname.split('/');
    segments[1] = newLocale; // Replace the locale segment
    const newPath = segments.join('/');
    
    router.push(newPath);
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex bg-transparent border-none gap-4 items-center hover:bg-[#FBFCFF] hover:text-[#a5e2ff] transition-none"
        >
          <img 
            src="https://img.icons8.com/?size=100&id=30633&format=png&color=16243B" 
            width="25" 
            height="25"
            alt="Language"
          />
          <span className="sr-only">Switch language</span>
          {languageNames[currentLocale] ?? currentLocale}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => handleChange("en")}
          className="flex items-center gap-2"
        >
          <span>English</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleChange("es")}
          className="flex items-center gap-2"
        >
          <span>Español</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleChange("it")}
          className="flex items-center gap-2"
        >
          <span>Italiano</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
