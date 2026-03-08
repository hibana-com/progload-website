import Link from "next/link";
import { locales, type Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionaries";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

function LogoIcon({ className = "w-5 h-5" }: { className?: string }) {
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

export default async function Support({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/60">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center gap-3">
          <Link href={`/${locale}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 brand-gradient rounded-lg flex items-center justify-center">
              <LogoIcon className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-lg">ProgLoad</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <h1 className="text-3xl font-semibold mb-2">{dict.support.title}</h1>
          <p className="text-xl text-foreground-muted mb-12 leading-relaxed">
            {dict.support.description}
          </p>

          {/* Contact */}
          <section className="mb-12 p-6 rounded-xl glass-card border border-border/60 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <h2 className="text-xl font-semibold mb-4">{dict.support.contactTitle}</h2>
            <p className="text-foreground-muted mb-4 leading-relaxed">
              {dict.support.contactDescription}
            </p>
            <a
              href="mailto:support@progload.app"
              className="inline-flex items-center gap-2 px-6 py-3 brand-gradient text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              support@progload.app
            </a>
          </section>

          {/* FAQ */}
          <h2 className="text-2xl font-semibold mb-8">{dict.support.faqTitle}</h2>

          <div className="space-y-4">
            <details className="group p-5 rounded-xl glass-card border border-border/60 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <summary className="font-semibold text-base cursor-pointer list-none flex items-center justify-between">
                {dict.support.faq1Question}
                <svg className="w-5 h-5 text-foreground-muted group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-foreground-muted leading-relaxed text-sm">
                {dict.support.faq1Answer}
              </p>
            </details>

            <details className="group p-5 rounded-xl glass-card border border-border/60 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <summary className="font-semibold text-base cursor-pointer list-none flex items-center justify-between">
                {dict.support.faq2Question}
                <svg className="w-5 h-5 text-foreground-muted group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-foreground-muted leading-relaxed text-sm">
                {dict.support.faq2Answer}
              </p>
            </details>

            <details className="group p-5 rounded-xl glass-card border border-border/60 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <summary className="font-semibold text-base cursor-pointer list-none flex items-center justify-between">
                {dict.support.faq3Question}
                <svg className="w-5 h-5 text-foreground-muted group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-foreground-muted leading-relaxed text-sm">
                {dict.support.faq3Answer}
              </p>
            </details>

            <details className="group p-5 rounded-xl glass-card border border-border/60 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <summary className="font-semibold text-base cursor-pointer list-none flex items-center justify-between">
                {dict.support.faq4Question}
                <svg className="w-5 h-5 text-foreground-muted group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-foreground-muted leading-relaxed text-sm">
                {dict.support.faq4Answer}
              </p>
            </details>

            <details className="group p-5 rounded-xl glass-card border border-border/60 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <summary className="font-semibold text-base cursor-pointer list-none flex items-center justify-between">
                {dict.support.faq5Question}
                <svg className="w-5 h-5 text-foreground-muted group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-foreground-muted leading-relaxed text-sm">
                {dict.support.faq5Answer}
              </p>
            </details>

            <details className="group p-5 rounded-xl glass-card border border-border/60 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <summary className="font-semibold text-base cursor-pointer list-none flex items-center justify-between">
                {dict.support.faq6Question}
                <svg className="w-5 h-5 text-foreground-muted group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-foreground-muted leading-relaxed text-sm">
                {dict.support.faq6Answer}
              </p>
            </details>
          </div>

          {/* Links */}
          <div className="mt-12 p-6 rounded-xl glass-card border border-border/60 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <h2 className="text-xl font-semibold mb-4">{dict.support.linksTitle}</h2>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${locale}/privacy`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border/60 hover:bg-border/30 transition-all font-medium text-sm"
              >
                {dict.footer.privacy}
              </Link>
              <Link
                href={`/${locale}/terms`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border/60 hover:bg-border/30 transition-all font-medium text-sm"
              >
                {dict.footer.terms}
              </Link>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="relative py-12">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Link href={`/${locale}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 brand-gradient rounded-lg flex items-center justify-center">
                <LogoIcon className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-lg">ProgLoad</span>
            </Link>
            <div className="flex gap-8 text-foreground-muted text-sm font-medium">
              <Link href={`/${locale}/privacy`} className="hover:text-pl-brand transition-colors">
                {dict.footer.privacy}
              </Link>
              <Link href={`/${locale}/terms`} className="hover:text-pl-brand transition-colors">
                {dict.footer.terms}
              </Link>
              <span className="text-foreground">{dict.footer.support}</span>
              <a href="mailto:support@progload.app" className="hover:text-pl-brand transition-colors">
                {dict.footer.contact}
              </a>
            </div>
            <div className="text-foreground-muted text-sm">
              {dict.footer.copyright.replace("{year}", new Date().getFullYear().toString())}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
