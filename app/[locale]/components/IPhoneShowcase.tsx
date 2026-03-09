import PhoneMockup from './PhoneMockup';
import ScrollReveal from './ScrollReveal';

interface IPhoneShowcaseProps {
  overline: string;
  headline: string;
  body: string;
}

export default function IPhoneShowcase({ overline, headline, body }: IPhoneShowcaseProps) {
  return (
    <section
      id="iphone"
      className="py-32 px-6"
      style={{ background: '#F5F5F7' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-16">
        <ScrollReveal className="text-center max-w-2xl">
          <span
            className="text-sm font-semibold tracking-widest uppercase"
            style={{ color: '#FF6B35' }}
          >
            {overline}
          </span>
          <h2
            className="font-semibold tracking-tight mt-4"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              lineHeight: 1.08,
              color: '#1d1d1f',
            }}
          >
            {headline}
          </h2>
          <p
            className="mt-6 leading-relaxed"
            style={{ fontSize: '1.125rem', color: '#86868b' }}
          >
            {body}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <PhoneMockup variant="dark" size="lg" />
        </ScrollReveal>
      </div>
    </section>
  );
}
