import { getDictionary } from "@/lib/dictionaries";
import { type Locale, locales, localeNames } from "@/i18n.config";
import Link from "next/link";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/* ------------------------------------------------------------------ */
/*  Ascending-bars logo (progressive overload metaphor)               */
/*  4 bars, 4px wide, 2px gap, heights ~5/8/11/14, rounded rx=2      */
/* ------------------------------------------------------------------ */
function LogoIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="17" width="4" height="5" rx="2" />
      <rect x="8" y="13" width="4" height="9" rx="2" />
      <rect x="14" y="8" width="4" height="14" rx="2" />
      <rect x="20" y="3" width="4" height="19" rx="2" />
    </svg>
  );
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
      {/* ================================================================ */}
      {/*  Navigation                                                      */}
      {/* ================================================================ */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-hero border-b border-border/60">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 brand-gradient rounded-xl flex items-center justify-center">
              <LogoIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold tracking-tight">ProgLoad</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#how-it-works"
              className="text-foreground-muted hover:text-pl-brand transition-colors font-medium text-sm"
            >
              {dict.nav.howItWorks}
            </a>
            <a
              href="#features"
              className="text-foreground-muted hover:text-pl-brand transition-colors font-medium text-sm"
            >
              {dict.nav.features}
            </a>

            {/* Language Switcher */}
            <div className="relative group">
              <button className="text-foreground-muted hover:text-pl-brand transition-colors font-medium text-sm flex items-center gap-1">
                {localeNames[locale]}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full right-0 mt-2 glass-card border border-border/60 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[140px]">
                {locales.map((l) => (
                  <Link
                    key={l}
                    href={`/${l}`}
                    className={`block px-4 py-2 text-sm hover:bg-border/30 first:rounded-t-xl last:rounded-b-xl ${
                      l === locale ? "text-pl-brand font-medium" : "text-foreground-muted"
                    }`}
                  >
                    {localeNames[l]}
                  </Link>
                ))}
              </div>
            </div>

            <a
              href="#download"
              className="brand-gradient text-white px-5 py-2 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              {dict.nav.downloadFree}
            </a>
          </div>
        </div>
      </nav>

      {/* ================================================================ */}
      {/*  Hero Section                                                    */}
      {/* ================================================================ */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#FF6B35]/8 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#007AFF]/6 blur-[100px] rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-[#AF52DE]/5 blur-[100px] rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-pl-brand/20 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <LogoIcon className="w-4 h-4 text-pl-brand" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-pl-brand">
                {dict.hero.badge}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">
              {dict.hero.title}{" "}
              <span className="brand-gradient-text">{dict.hero.titleHighlight}</span>
            </h1>

            <p className="text-lg text-foreground-muted max-w-xl leading-relaxed">
              {dict.hero.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#download"
                className="brand-gradient text-white px-8 py-3.5 rounded-xl font-semibold text-base hover:opacity-90 transition-all shadow-lg shadow-[#FF4D29]/20"
              >
                {dict.hero.cta}
              </a>
              <a
                href="#how-it-works"
                className="glass-card border border-border/60 px-8 py-3.5 rounded-xl font-semibold text-base hover:bg-border/30 transition-all flex items-center gap-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
              >
                {dict.hero.secondary}
              </a>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#FF6B35]/15 blur-[100px] rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#007AFF]/10 blur-[100px] rounded-full"></div>

            <div className="relative mx-auto w-[280px] md:w-[300px] animate-float">
              <div className="w-full aspect-[9/19.5] rounded-[2.5rem] glass-card border border-border/60 shadow-2xl flex flex-col items-center justify-center p-6 gap-4 overflow-hidden">
                {/* Fake workout card UI inside phone */}
                <div className="w-full glass-subtle rounded-xl p-4 border border-border/40 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg brand-gradient flex items-center justify-center">
                      <LogoIcon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-foreground-muted">TODAY</div>
                      <div className="text-sm font-semibold">Push Day A</div>
                    </div>
                  </div>
                  <div className="h-px bg-border/40"></div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-foreground-muted">Bench Press</span>
                      <span className="text-xs font-semibold tabular-nums">4 x 8</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-foreground-muted">Incline DB Press</span>
                      <span className="text-xs font-semibold tabular-nums">3 x 10</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-foreground-muted">Cable Fly</span>
                      <span className="text-xs font-semibold tabular-nums">3 x 12</span>
                    </div>
                  </div>
                </div>

                {/* Mini stat bar */}
                <div className="w-full glass-subtle rounded-xl p-3 border border-border/40 flex items-center gap-3">
                  <div className="flex-1 text-center">
                    <div className="text-[10px] text-foreground-muted">Sets</div>
                    <div className="text-sm font-semibold tabular-nums">10</div>
                  </div>
                  <div className="w-px h-6 bg-border/40"></div>
                  <div className="flex-1 text-center">
                    <div className="text-[10px] text-foreground-muted">Volume</div>
                    <div className="text-sm font-semibold tabular-nums">4,250</div>
                  </div>
                  <div className="w-px h-6 bg-border/40"></div>
                  <div className="flex-1 text-center">
                    <div className="text-[10px] text-foreground-muted">PR</div>
                    <div className="text-sm font-semibold text-pl-green">+5 lb</div>
                  </div>
                </div>

                {/* Start button */}
                <div className="w-full brand-gradient rounded-xl py-2.5 text-center text-white text-sm font-semibold">
                  Start Workout
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  How It Works                                                    */}
      {/* ================================================================ */}
      <section id="how-it-works" className="relative py-24 bg-background-alt overflow-hidden">
        {/* Subtle gradient mesh */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#007AFF]/4 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#AF52DE]/4 blur-[100px] rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {dict.howItWorks.title}{" "}
              <span className="brand-gradient-text">{dict.howItWorks.titleHighlight}</span>{" "}
              {dict.howItWorks.titleEnd}
            </h2>
            <p className="text-lg text-foreground-muted">{dict.howItWorks.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative p-6 rounded-xl glass-card border border-pl-blue/20 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-pl-blue/10 rounded-xl flex items-center justify-center text-pl-blue mb-5 group-hover:scale-105 transition-transform">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-[#007AFF] to-[#005BBF] text-white text-sm font-semibold">1</span>
                <h3 className="text-xl font-semibold">{dict.howItWorks.step1Title}</h3>
              </div>
              <p className="text-foreground-muted leading-relaxed text-sm">{dict.howItWorks.step1Description}</p>
            </div>

            {/* Step 2 */}
            <div className="relative p-6 rounded-xl glass-card border border-pl-purple/20 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-pl-purple/10 rounded-xl flex items-center justify-center text-pl-purple mb-5 group-hover:scale-105 transition-transform">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-[#AF52DE] to-[#8B3EBA] text-white text-sm font-semibold">2</span>
                <h3 className="text-xl font-semibold">{dict.howItWorks.step2Title}</h3>
              </div>
              <p className="text-foreground-muted leading-relaxed text-sm">{dict.howItWorks.step2Description}</p>
            </div>

            {/* Step 3 */}
            <div className="relative p-6 rounded-xl glass-card border border-pl-orange/20 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-pl-orange/10 rounded-xl flex items-center justify-center text-pl-orange mb-5 group-hover:scale-105 transition-transform">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-[#FF9500] to-[#CC7700] text-white text-sm font-semibold">3</span>
                <h3 className="text-xl font-semibold">{dict.howItWorks.step3Title}</h3>
              </div>
              <p className="text-foreground-muted leading-relaxed text-sm">{dict.howItWorks.step3Description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  Features Section                                                */}
      {/* ================================================================ */}
      <section id="features" className="relative py-24 overflow-hidden">
        {/* Subtle gradient mesh */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#FF6B35]/4 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-[#34C759]/4 blur-[100px] rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {dict.features.title}{" "}
              <span className="brand-gradient-text">{dict.features.titleHighlight}</span>
            </h2>
            <p className="text-lg text-foreground-muted">{dict.features.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 - Watch */}
            <div className="p-6 rounded-xl glass-card border border-pl-blue/20 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-pl-blue/10 rounded-xl flex items-center justify-center text-pl-blue mb-5 group-hover:scale-105 transition-transform">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{dict.features.feature1Title}</h3>
              <p className="text-foreground-muted leading-relaxed text-sm">{dict.features.feature1Description}</p>
            </div>

            {/* Feature 2 - Solo or Coach */}
            <div className="p-6 rounded-xl glass-card border border-pl-purple/20 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-pl-purple/10 rounded-xl flex items-center justify-center text-pl-purple mb-5 group-hover:scale-105 transition-transform">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{dict.features.feature2Title}</h3>
              <p className="text-foreground-muted leading-relaxed text-sm">{dict.features.feature2Description}</p>
            </div>

            {/* Feature 3 - Progressive Overload */}
            <div className="p-6 rounded-xl glass-card border border-pl-orange/20 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-pl-orange/10 rounded-xl flex items-center justify-center text-pl-orange mb-5 group-hover:scale-105 transition-transform">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="3" y="17" width="3.5" height="5" rx="1.75" />
                  <rect x="8.5" y="13" width="3.5" height="9" rx="1.75" />
                  <rect x="14" y="8" width="3.5" height="14" rx="1.75" />
                  <rect x="19.5" y="3" width="3.5" height="19" rx="1.75" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{dict.features.feature3Title}</h3>
              <p className="text-foreground-muted leading-relaxed text-sm">{dict.features.feature3Description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  Trust / Privacy Section                                         */}
      {/* ================================================================ */}
      <section className="py-24 bg-background-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-card rounded-xl p-10 border border-border/60 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{dict.trust.title}</h2>
              <p className="text-lg text-foreground-muted">{dict.trust.description}</p>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center space-y-3">
                  <div className="w-14 h-14 mx-auto bg-pl-blue/10 rounded-xl flex items-center justify-center text-pl-blue">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-base">{dict.trust.private}</h3>
                  <p className="text-foreground-muted text-sm">{dict.trust.privateDescription}</p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-14 h-14 mx-auto bg-pl-purple/10 rounded-xl flex items-center justify-center text-pl-purple">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-base">{dict.trust.sync}</h3>
                  <p className="text-foreground-muted text-sm">{dict.trust.syncDescription}</p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-14 h-14 mx-auto bg-pl-green/10 rounded-xl flex items-center justify-center text-pl-green">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-base">{dict.trust.secure}</h3>
                  <p className="text-foreground-muted text-sm">{dict.trust.secureDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  Origin Story                                                    */}
      {/* ================================================================ */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <div className="w-20 h-20 mx-auto brand-gradient rounded-2xl flex items-center justify-center">
            <LogoIcon className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{dict.story.title}</h2>
          <p className="text-lg text-foreground-muted leading-relaxed max-w-2xl mx-auto">
            {dict.story.descriptionPart1}{" "}
            <span className="brand-gradient-text font-semibold">{dict.story.descriptionHighlight}</span>
            {dict.story.descriptionPart2}
          </p>
          <p className="text-foreground-muted italic">{dict.story.attribution}</p>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  Download CTA                                                    */}
      {/* ================================================================ */}
      <section id="download" className="py-24 bg-background-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="brand-gradient rounded-2xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{dict.download.title}</h2>
              <p className="text-lg text-white/90">{dict.download.description}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm border border-white/30 px-8 py-4 rounded-xl font-semibold text-base">
                  {dict.download.comingSoon}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  Footer                                                          */}
      {/* ================================================================ */}
      <footer className="relative py-12">
        {/* Soft gradient fade instead of hard border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 brand-gradient rounded-lg flex items-center justify-center">
                <LogoIcon className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-lg">ProgLoad</span>
            </div>
            <div className="flex gap-8 text-foreground-muted text-sm font-medium">
              <Link href={`/${locale}/privacy`} className="hover:text-pl-brand transition-colors">
                {dict.footer.privacy}
              </Link>
              <Link href={`/${locale}/terms`} className="hover:text-pl-brand transition-colors">
                {dict.footer.terms}
              </Link>
              <Link href={`/${locale}/support`} className="hover:text-pl-brand transition-colors">
                {dict.footer.support}
              </Link>
              <a href="mailto:support@progload.app" className="hover:text-pl-brand transition-colors">
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
