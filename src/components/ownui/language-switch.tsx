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

export function LanguageSwitch() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

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
          size="icon"
          className="bg-transparent border-none"
        >
          <span className="sr-only">Switch language</span>
          <ReactCountryFlag
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
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => handleChange("en")}
          className="flex items-center gap-2"
        >
          <ReactCountryFlag countryCode="us" svg />
          <span>English</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleChange("es")}
          className="flex items-center gap-2"
        >
          <ReactCountryFlag countryCode="es" svg />
          <span>Español</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleChange("de")}
          className="flex items-center gap-2"
        >
          <ReactCountryFlag countryCode="de" svg />
          <span>Deutsch</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleChange("fr")}
          className="flex items-center gap-2"
        >
          <ReactCountryFlag countryCode="fr" svg />
          <span>Français</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleChange("it")}
          className="flex items-center gap-2"
        >
          <ReactCountryFlag countryCode="it" svg />
          <span>Italiano</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleChange("zh")}
          className="flex items-center gap-2"
        >
          <ReactCountryFlag countryCode="cn" svg />
          <span>中文</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
