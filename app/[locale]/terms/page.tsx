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

export default async function TermsOfService({
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
          <h1 className="text-3xl font-semibold mb-2">Terms of Service</h1>
          <p className="text-foreground-muted mb-8">
            <strong>Effective Date:</strong> March 8, 2026
            <br />
            <strong>Last Updated:</strong> March 8, 2026
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4 leading-relaxed">
            By downloading, installing, accessing, or using the ProgLoad mobile application (&ldquo;App,&rdquo; &ldquo;Service,&rdquo; or &ldquo;ProgLoad&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, you may not use the Service.
          </p>
          <p className="mb-4 leading-relaxed">
            These Terms constitute a legally binding agreement between you (&ldquo;User,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and Ernesto Jaramillo (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), the operator of ProgLoad. By creating an account or using the App, you confirm that you are at least 13 years of age and have the legal capacity to enter into this agreement.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">2. Description of Service</h2>
          <p className="mb-4 leading-relaxed">
            ProgLoad is a fitness coaching and workout tracking application that connects coaches with athletes. The Service includes:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Workout Tracking:</strong> Users can log sets, reps, and weight for exercises on iPhone and Apple Watch.</li>
            <li><strong>Routine Management:</strong> Coaches can create workout routines and assign them to customers.</li>
            <li><strong>Coach Dashboard:</strong> Coaches can review completed workouts, leave feedback, and manage customer relationships.</li>
            <li><strong>Apple Watch Integration:</strong> Users can track workouts from their wrist with HealthKit integration for heart rate and calories.</li>
            <li><strong>Progressive Overload Tracking:</strong> Users can view exercise statistics and progress over time.</li>
          </ul>
          <p className="mb-4 leading-relaxed">
            The App is available on iOS and watchOS. We reserve the right to modify, suspend, or discontinue any part of the Service at any time, with or without notice.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">3. Account Registration</h2>
          <p className="mb-4 leading-relaxed">
            To use ProgLoad, you must create an account by providing a valid email address and a password. You agree to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Provide accurate and complete registration information.</li>
            <li>Maintain the security of your password and are solely responsible for all activity under your account.</li>
            <li>Not create more than one account per person.</li>
            <li>Promptly notify us if you become aware of unauthorized use of your account.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-10 mb-4">4. Coach-Customer Relationships</h2>
          <p className="mb-4 leading-relaxed">
            ProgLoad facilitates connections between coaches and their customers. By accepting a coach invitation:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>You consent to your coach viewing your assigned routines, completed workout logs, and exercise statistics.</li>
            <li>You understand that your coach may leave feedback on your completed workouts.</li>
            <li>You may disconnect from a coach at any time.</li>
          </ul>
          <p className="mb-4 leading-relaxed">
            ProgLoad is not responsible for the quality, safety, or accuracy of any coaching advice provided through the App. Coaches are independent users and not employees or agents of ProgLoad.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">5. Health and Safety Disclaimer</h2>
          <p className="mb-4 leading-relaxed">
            ProgLoad is a workout tracking tool and does not provide medical advice. You should consult a healthcare professional before beginning any exercise program. You acknowledge that:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>You exercise at your own risk and are solely responsible for your physical safety.</li>
            <li>ProgLoad is not a substitute for professional medical or fitness advice.</li>
            <li>Heart rate and calorie data from HealthKit are estimates and should not be relied upon for medical decisions.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-10 mb-4">6. User Conduct</h2>
          <p className="mb-4 leading-relaxed">
            You agree to use the Service in a lawful and respectful manner. The following conduct is prohibited:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Harassment and Abuse:</strong> Threatening, bullying, or harassing other users.</li>
            <li><strong>Impersonation:</strong> Creating accounts that impersonate other individuals or coaches.</li>
            <li><strong>Spam and Manipulation:</strong> Sending unsolicited messages or creating fake accounts.</li>
            <li><strong>Interference:</strong> Attempting to disrupt or interfere with the Service&apos;s infrastructure or security.</li>
            <li><strong>Data Collection:</strong> Scraping or harvesting information about other users without consent.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-10 mb-4">7. User-Generated Content</h2>
          <p className="mb-4 leading-relaxed">
            &ldquo;User Content&rdquo; refers to all content you create through the Service, including routine names, exercise data, workout logs, and coach feedback.
          </p>
          <p className="mb-4 leading-relaxed">
            <strong>Ownership:</strong> You retain full ownership of your User Content.
          </p>
          <p className="mb-4 leading-relaxed">
            <strong>License Grant:</strong> By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and process your User Content solely for operating and providing the Service. This license terminates when you delete your content or account.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">8. Intellectual Property</h2>
          <p className="mb-4 leading-relaxed">
            The Service, including its design, features, branding, and underlying code, is owned by Ernesto Jaramillo and is protected by intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of the Service without written consent.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">9. Privacy</h2>
          <p className="mb-4 leading-relaxed">
            Your privacy is important to us. Our collection and use of personal information is described in our{" "}
            <Link href={`/${locale}/privacy`} className="text-pl-brand hover:underline">Privacy Policy</Link>.
            By using the Service, you acknowledge that you have read and understood our Privacy Policy.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">10. Termination</h2>
          <p className="mb-4 leading-relaxed">
            <strong>By You:</strong> You may stop using the Service at any time. You may delete your account by contacting us at the email address listed below.
          </p>
          <p className="mb-4 leading-relaxed">
            <strong>By Us:</strong> We may suspend or terminate your account at any time for violation of these Terms or conduct harmful to other users or the Service.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">11. Disclaimer of Warranties</h2>
          <p className="mb-4 leading-relaxed uppercase text-sm">
            The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis, without warranties of any kind. We disclaim all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>
          <p className="mb-4 leading-relaxed uppercase text-sm">
            We make no guarantees regarding fitness results, workout effectiveness, or any health outcomes from use of the Service.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">12. Limitation of Liability</h2>
          <p className="mb-4 leading-relaxed uppercase text-sm">
            To the fullest extent permitted by law, Ernesto Jaramillo shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service. Our total liability shall not exceed the amount you paid us in the twelve months preceding the claim.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">13. Indemnification</h2>
          <p className="mb-4 leading-relaxed">
            You agree to indemnify and hold harmless Ernesto Jaramillo from any claims, liabilities, damages, losses, and expenses arising from your use of the Service, your User Content, or your violation of these Terms.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">14. Governing Law</h2>
          <p className="mb-4 leading-relaxed">
            These Terms shall be governed by and construed in accordance with the laws of the State of Texas, United States. Any disputes shall be resolved in the state or federal courts located in Texas.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">15. Changes to Terms</h2>
          <p className="mb-4 leading-relaxed">
            We may update these Terms from time to time. When we make changes, we will revise the &ldquo;Last Updated&rdquo; date. Your continued use of the Service after any changes constitutes acceptance of the revised Terms.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">16. General Provisions</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Entire Agreement:</strong> These Terms, together with the Privacy Policy, constitute the entire agreement between you and us regarding the Service.</li>
            <li><strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions continue in full force.</li>
            <li><strong>Waiver:</strong> Our failure to enforce any right does not constitute a waiver of that right.</li>
            <li><strong>Assignment:</strong> You may not assign your rights under these Terms without our consent.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-10 mb-4">17. Contact Information</h2>
          <p className="mb-4 leading-relaxed">
            If you have any questions about these Terms, please contact us:
          </p>
          <p className="mb-4 leading-relaxed">
            <strong>Ernesto Jaramillo</strong><br />
            Email: <a href="mailto:support@progload.app" className="text-pl-brand hover:underline">support@progload.app</a>
          </p>
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
              <span className="text-foreground">{dict.footer.terms}</span>
              <Link href={`/${locale}/support`} className="hover:text-pl-brand transition-colors">
                {dict.footer.support}
              </Link>
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
