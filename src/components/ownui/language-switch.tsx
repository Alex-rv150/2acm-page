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
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const languageNames: Record<string, string> = {
    en: "English",
    es: "Español",
    it: "Italiano",
  };



  const handleChange = (lang: string) => {
    const newLocale = lang;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

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
          />
          {/* Agregar un icono */}
          
          <span className="sr-only">Switch language</span>
          {languageNames[currentLocale] ?? currentLocale}
          {/* <ReactCountryFlag
            countryCode={
              currentLocale === "zh"
                ? "cn"
                : currentLocale === "en"
                ? "us"
                : currentLocale
            }
            style={{
              width: "1.6em",
              height: "1.6em",
            }}
            svg
          /> */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => handleChange("en")}
          className="flex items-center gap-2"
        >
          {/* <ReactCountryFlag countryCode="us" svg /> */}
          <span>English</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleChange("es")}
          className="flex items-center gap-2"
        >
          {/* <ReactCountryFlag countryCode="es" svg /> */}
          <span>Español</span>
        </DropdownMenuItem>
        {/* <DropdownMenuItem
          onClick={() => handleChange("de")}
          className="flex items-center gap-2"
        >
          {/* <ReactCountryFlag countryCode="de" svg /> */}
          {/* <span>Deutsch</span> */}
        {/* </DropdownMenuItem> */}
        {/* <DropdownMenuItem */}
          {/* onClick={() => handleChange("fr")} */}
          {/* className="flex items-center gap-2" */}
        {/* > */}
          {/* <ReactCountryFlag countryCode="fr" svg /> */}
          {/* <span>Français</span> */}
        {/* </DropdownMenuItem> */}
        <DropdownMenuItem
          onClick={() => handleChange("it")}
          className="flex items-center gap-2"
        >
          {/* <ReactCountryFlag countryCode="it" svg /> */}
          <span>Italiano</span>
        </DropdownMenuItem>
        {/* <DropdownMenuItem
          onClick={() => handleChange("zh")}
          className="flex items-center gap-2"
        >
          <ReactCountryFlag countryCode="cn" svg />
          <span>中文</span>
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
