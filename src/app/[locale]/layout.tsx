import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TranslationsProvider } from "@/components/translations-provider";
import initTranslations from "@/lib/i18n";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ACM Uninorte",
  description: "Capítulo estudiantil de ACM en Uninorte",
};

const namespaces = [
  "common",
  "theme",
  "navbar",
  "header",
  "about",
  "statistics",
  "board",
  "departments",
  "events",
  "contact",
];

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { t, resources } = await initTranslations(locale, namespaces);

  return (
    <html lang="en">
      <body className={inter.className}>
        <TranslationsProvider
          resources={resources}
          locale={locale}
          namespaces={namespaces}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </TranslationsProvider>
      </body>
    </html>
  );
}
