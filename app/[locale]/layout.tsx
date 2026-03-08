import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { locales, type Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionaries";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  return {
    title: `ProgLoad - ${dict.hero.title}`,
    description: dict.hero.description,
    keywords: ["workout tracker", "fitness coach", "Apple Watch workout", "strength training", "progressive overload", "coaching app"],
    authors: [{ name: "ProgLoad" }],
    openGraph: {
      title: `ProgLoad - ${dict.hero.title}`,
      description: dict.hero.description,
      type: "website",
      locale: locale,
      siteName: "ProgLoad",
    },
    twitter: {
      card: "summary_large_image",
      title: `ProgLoad - ${dict.hero.title}`,
      description: dict.hero.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;

  return (
    <html lang={locale}>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
