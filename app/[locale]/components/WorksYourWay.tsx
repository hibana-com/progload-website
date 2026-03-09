import ScrollReveal from './ScrollReveal';

interface WorksYourWayProps {
  headline: string;
  body: string;
  soloTitle: string;
  soloPoints: string[];
  coachTitle: string;
  coachPoints: string[];
}

export default function WorksYourWay({
  headline,
  body,
  soloTitle,
  soloPoints,
  coachTitle,
  coachPoints,
}: WorksYourWayProps) {
  return (
    <section
      className="py-32 px-6"
      style={{ background: '#F5F5F7' }}
    >
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2
            className="font-semibold tracking-tight"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              lineHeight: 1.08,
              color: '#1d1d1f',
            }}
          >
            {headline}
          </h2>
          <p
            className="mt-4"
            style={{ fontSize: '1.125rem', color: '#86868b' }}
          >
            {body}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Solo panel */}
          <ScrollReveal delay={0}>
            <div
              className="rounded-3xl p-10 shadow-sm"
              style={{ background: '#FFFFFF' }}
            >
              <div
                className="w-12 h-12 mb-6 flex items-center justify-center rounded-2xl"
                style={{ background: 'rgba(255,107,53,0.1)' }}
              >
                <svg className="w-6 h-6" style={{ color: '#FF6B35' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3
                className="font-semibold mb-6"
                style={{ fontSize: '1.375rem', color: '#1d1d1f' }}
              >
                {soloTitle}
              </h3>
              <ul className="space-y-4">
                {soloPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: '#FF6B35' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span style={{ fontSize: '1rem', color: '#1d1d1f', lineHeight: 1.5 }}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Coach panel */}
          <ScrollReveal delay={100}>
            <div
              className="rounded-3xl p-10 shadow-sm"
              style={{ background: '#FFFFFF' }}
            >
              <div
                className="w-12 h-12 mb-6 flex items-center justify-center rounded-2xl"
                style={{ background: 'rgba(255,107,53,0.1)' }}
              >
                <svg className="w-6 h-6" style={{ color: '#FF6B35' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3
                className="font-semibold mb-6"
                style={{ fontSize: '1.375rem', color: '#1d1d1f' }}
              >
                {coachTitle}
              </h3>
              <ul className="space-y-4">
                {coachPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: '#FF6B35' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span style={{ fontSize: '1rem', color: '#1d1d1f', lineHeight: 1.5 }}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
