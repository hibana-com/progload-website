import WatchMockup from './WatchMockup';
import ScrollReveal from './ScrollReveal';

interface WatchShowcaseProps {
  overline: string;
  headline: string;
  body: string;
}

export default function WatchShowcase({ overline, headline, body }: WatchShowcaseProps) {
  return (
    <section
      id="watch"
      className="py-32 px-6"
      style={{ background: '#0A0A0A' }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-16">
        <ScrollReveal className="text-center max-w-2xl">
          <span
            className="text-sm font-semibold tracking-widest uppercase"
            style={{ color: '#FF6B35' }}
          >
            {overline}
          </span>
          <h2
            className="font-semibold tracking-tight mt-4 text-white"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              lineHeight: 1.08,
            }}
          >
            {headline}
          </h2>
          <p
            className="mt-6 leading-relaxed"
            style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.5)' }}
          >
            {body}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <WatchMockup />
        </ScrollReveal>
      </div>
    </section>
  );
}
