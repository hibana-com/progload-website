import { getDictionary } from "@/lib/dictionaries";
import { type Locale, locales, localeNames } from "@/i18n.config";
import Link from "next/link";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background-alt/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-pl-primary rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <span className="text-2xl font-bold tracking-tight">ProgLoad</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#how-it-works"
              className="text-foreground-muted hover:text-pl-primary transition-colors font-medium"
            >
              {dict.nav.howItWorks}
            </a>
            <a
              href="#features"
              className="text-foreground-muted hover:text-pl-primary transition-colors font-medium"
            >
              {dict.nav.features}
            </a>
            {/* Language Switcher */}
            <div className="relative group">
              <button className="text-foreground-muted hover:text-pl-primary transition-colors font-medium flex items-center gap-1">
                {localeNames[locale]}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full right-0 mt-2 bg-background-alt border border-border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[140px]">
                {locales.map((l) => (
                  <Link
                    key={l}
                    href={`/${l}`}
                    className={`block px-4 py-2 text-sm hover:bg-border/30 first:rounded-t-xl last:rounded-b-xl ${
                      l === locale ? "text-pl-primary font-medium" : "text-foreground-muted"
                    }`}
                  >
                    {localeNames[l]}
                  </Link>
                ))}
              </div>
            </div>
            <a
              href="#download"
              className="bg-pl-primary text-white px-6 py-2.5 rounded-xl font-bold hover:opacity-90 transition-opacity"
            >
              {dict.nav.downloadFree}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pl-primary/10 text-pl-primary text-sm font-bold uppercase tracking-wider">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              {dict.hero.badge}
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">
              {dict.hero.title}{" "}
              <span className="text-pl-primary">{dict.hero.titleHighlight}</span>
            </h1>
            <p className="text-xl text-foreground-muted max-w-xl leading-relaxed">
              {dict.hero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#download"
                className="bg-pl-primary text-white px-10 py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition-all shadow-lg shadow-pl-primary/25"
              >
                {dict.hero.cta}
              </a>
              <a
                href="#how-it-works"
                className="bg-background-alt border border-border px-10 py-4 rounded-2xl font-bold text-lg hover:bg-border/30 transition-all flex items-center gap-2"
              >
                {dict.hero.secondary}
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-pl-primary/20 blur-[100px] rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-pl-secondary/20 blur-[100px] rounded-full"></div>
            <div className="relative mx-auto w-[280px] md:w-[320px] animate-float">
              {/* Placeholder for app screenshot */}
              <div className="w-full aspect-[9/19.5] rounded-[3rem] bg-gradient-to-br from-pl-primary/20 to-pl-secondary/20 border-2 border-border shadow-2xl flex items-center justify-center">
                <div className="text-center space-y-4 px-8">
                  <svg className="w-16 h-16 mx-auto text-pl-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <p className="text-foreground-muted text-sm font-medium">App Screenshot</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-background-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              {dict.howItWorks.title}{" "}
              <span className="text-pl-primary">{dict.howItWorks.titleHighlight}</span>{" "}
              {dict.howItWorks.titleEnd}
            </h2>
            <p className="text-xl text-foreground-muted">{dict.howItWorks.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative p-8 rounded-3xl bg-background border border-border hover:shadow-xl transition-all group">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-pl-primary rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                1
              </div>
              <div className="w-16 h-16 bg-pl-primary/10 rounded-2xl flex items-center justify-center text-pl-primary mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">{dict.howItWorks.step1Title}</h3>
              <p className="text-foreground-muted leading-relaxed">{dict.howItWorks.step1Description}</p>
            </div>

            <div className="relative p-8 rounded-3xl bg-background border border-border hover:shadow-xl transition-all group">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-pl-secondary rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                2
              </div>
              <div className="w-16 h-16 bg-pl-secondary/10 rounded-2xl flex items-center justify-center text-pl-secondary mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">{dict.howItWorks.step2Title}</h3>
              <p className="text-foreground-muted leading-relaxed">{dict.howItWorks.step2Description}</p>
            </div>

            <div className="relative p-8 rounded-3xl bg-background border border-border hover:shadow-xl transition-all group">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-pl-accent rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                3
              </div>
              <div className="w-16 h-16 bg-pl-accent/10 rounded-2xl flex items-center justify-center text-pl-accent mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">{dict.howItWorks.step3Title}</h3>
              <p className="text-foreground-muted leading-relaxed">{dict.howItWorks.step3Description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              {dict.features.title} <span className="text-pl-primary">{dict.features.titleHighlight}</span>
            </h2>
            <p className="text-xl text-foreground-muted">{dict.features.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-background-alt border border-border hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-pl-primary/10 rounded-2xl flex items-center justify-center text-pl-primary mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">{dict.features.feature1Title}</h3>
              <p className="text-foreground-muted leading-relaxed">{dict.features.feature1Description}</p>
            </div>

            <div className="p-8 rounded-3xl bg-background-alt border border-border hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-pl-secondary/10 rounded-2xl flex items-center justify-center text-pl-secondary mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">{dict.features.feature2Title}</h3>
              <p className="text-foreground-muted leading-relaxed">{dict.features.feature2Description}</p>
            </div>

            <div className="p-8 rounded-3xl bg-background-alt border border-border hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-pl-accent/10 rounded-2xl flex items-center justify-center text-pl-accent mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">{dict.features.feature3Title}</h3>
              <p className="text-foreground-muted leading-relaxed">{dict.features.feature3Description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust/Privacy Section */}
      <section className="py-24 bg-background-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-pl-primary/5 to-pl-secondary/5 rounded-3xl p-12 border border-border">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-4xl font-extrabold tracking-tight">{dict.trust.title}</h2>
              <p className="text-xl text-foreground-muted">{dict.trust.description}</p>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-pl-primary/10 rounded-2xl flex items-center justify-center text-pl-primary">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg">{dict.trust.private}</h3>
                  <p className="text-foreground-muted text-sm">{dict.trust.privateDescription}</p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-pl-secondary/10 rounded-2xl flex items-center justify-center text-pl-secondary">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg">{dict.trust.sync}</h3>
                  <p className="text-foreground-muted text-sm">{dict.trust.syncDescription}</p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-pl-accent/10 rounded-2xl flex items-center justify-center text-pl-accent">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg">{dict.trust.secure}</h3>
                  <p className="text-foreground-muted text-sm">{dict.trust.secureDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <div className="w-24 h-24 mx-auto bg-pl-primary rounded-3xl flex items-center justify-center">
            <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight">{dict.story.title}</h2>
          <p className="text-xl text-foreground-muted leading-relaxed max-w-2xl mx-auto">
            {dict.story.descriptionPart1}{" "}
            <span className="text-pl-primary font-semibold">{dict.story.descriptionHighlight}</span>
            {dict.story.descriptionPart2}
          </p>
          <p className="text-foreground-muted italic">{dict.story.attribution}</p>
        </div>
      </section>

      {/* Download CTA Section */}
      <section id="download" className="py-24 bg-background-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-pl-primary to-pl-secondary rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">{dict.download.title}</h2>
              <p className="text-xl text-white/90">{dict.download.description}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm border border-white/30 px-8 py-4 rounded-2xl font-bold text-lg">
                  {dict.download.comingSoon}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-pl-primary rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <span className="font-bold text-lg">ProgLoad</span>
            </div>
            <div className="flex gap-8 text-foreground-muted text-sm font-medium">
              <Link href={`/${locale}/privacy`} className="hover:text-pl-primary transition-colors">
                {dict.footer.privacy}
              </Link>
              <Link href={`/${locale}/terms`} className="hover:text-pl-primary transition-colors">
                {dict.footer.terms}
              </Link>
              <Link href={`/${locale}/support`} className="hover:text-pl-primary transition-colors">
                {dict.footer.support}
              </Link>
              <a href="mailto:support@progload.app" className="hover:text-pl-primary transition-colors">
                {dict.footer.contact}
              </a>
            </div>
            <div className="text-foreground-muted text-sm">
              {dict.footer.copyright.replace("{year}", currentYear.toString())}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
