import { getDictionary } from "@/lib/dictionaries";
import { type Locale, locales } from "@/i18n.config";
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import IPhoneShowcase from "./components/IPhoneShowcase";
import WatchShowcase from "./components/WatchShowcase";
import OverloadSection from "./components/OverloadSection";
import WorksYourWay from "./components/WorksYourWay";
import PrivacySection from "./components/PrivacySection";
import StorySection from "./components/StorySection";
import DownloadCTA from "./components/DownloadCTA";
import Footer from "./components/Footer";

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

  return (
    <div style={{ background: '#000000' }}>
      {/* Fixed navigation */}
      <Nav locale={locale} downloadLabel={dict.nav.downloadFree} />

      {/* 1. Hero */}
      <HeroSection
        overline={dict.hero.overline}
        title={dict.hero.title}
        titleHighlight={dict.hero.titleHighlight}
        description={dict.hero.description}
        cta={dict.hero.cta}
        secondaryCta={dict.hero.secondaryCta}
      />

      {/* 2. iPhone Showcase — Light */}
      <IPhoneShowcase
        overline={dict.iphoneShowcase.overline}
        headline={dict.iphoneShowcase.headline}
        body={dict.iphoneShowcase.body}
      />

      {/* 3. Apple Watch Showcase — Dark */}
      <WatchShowcase
        overline={dict.watchShowcase.overline}
        headline={dict.watchShowcase.headline}
        body={dict.watchShowcase.body}
      />

      {/* 4. Progressive Overload — Light */}
      <OverloadSection
        overline={dict.overload.overline}
        headline={dict.overload.headline}
        body={dict.overload.body}
      />

      {/* 5. Works Your Way — Light warm gray */}
      <WorksYourWay
        headline={dict.modes.headline}
        body={dict.modes.body}
        soloTitle={dict.modes.soloTitle}
        soloPoints={[dict.modes.soloPoint1, dict.modes.soloPoint2, dict.modes.soloPoint3]}
        coachTitle={dict.modes.coachTitle}
        coachPoints={[dict.modes.coachPoint1, dict.modes.coachPoint2, dict.modes.coachPoint3]}
      />

      {/* 6. Privacy & Trust — Dark */}
      <PrivacySection
        headline={dict.privacy.headline}
        privateTitle={dict.privacy.privateTitle}
        privateBody={dict.privacy.privateBody}
        syncTitle={dict.privacy.syncTitle}
        syncBody={dict.privacy.syncBody}
        secureTitle={dict.privacy.secureTitle}
        secureBody={dict.privacy.secureBody}
      />

      {/* 7. Origin Story — Light */}
      <StorySection
        headline={dict.story.headline}
        quote={dict.story.quote}
      />

      {/* 8. Download CTA — Dark */}
      <DownloadCTA
        headline={dict.download.headline}
        body={dict.download.body}
        cta={dict.download.cta}
      />

      {/* 9. Footer */}
      <Footer
        locale={locale}
        privacy={dict.footer.privacy}
        terms={dict.footer.terms}
        support={dict.footer.support}
        contact={dict.footer.contact}
        copyright={dict.footer.copyright}
      />
    </div>
  );
}
