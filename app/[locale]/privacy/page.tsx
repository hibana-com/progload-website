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

export default async function PrivacyPolicy({
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
          <h1 className="text-3xl font-semibold mb-2">Privacy Policy for ProgLoad</h1>
          <p className="text-foreground-muted mb-8">
            <strong>Effective Date:</strong> March 8, 2026
            <br />
            <strong>Last Updated:</strong> March 8, 2026
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">Introduction</h2>
          <p className="mb-4 leading-relaxed">
            This Privacy Policy describes how ProgLoad (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and shares your personal information when you use the ProgLoad mobile application (&ldquo;App&rdquo;). ProgLoad is a fitness coaching and workout tracking application, operated by Ernesto Jaramillo.
          </p>
          <p className="mb-4 leading-relaxed">
            We are committed to protecting your privacy and being transparent about the data we collect. Please read this policy carefully. By using ProgLoad, you agree to the collection and use of information in accordance with this policy.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">1. Information We Collect</h2>

          <h3 className="text-lg font-medium mt-6 mb-3">1.1 Information You Provide Directly</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Account Information:</strong> When you create an account, we collect your email address through Firebase Authentication. You also provide your name and select your role (coach or customer).</li>
            <li><strong>Workout Data:</strong> We collect the workout information you create and log, including routine names, exercises, sets, reps, weight, and completion timestamps.</li>
            <li><strong>Coach-Customer Relationships:</strong> We store information about coach-customer connections, including invitations and accepted relationships.</li>
            <li><strong>Coach Feedback:</strong> If your coach leaves feedback on your completed workouts, that feedback is stored alongside your workout data.</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-3">1.2 Health and Fitness Data</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>HealthKit Data:</strong> If you grant permission, ProgLoad reads heart rate and active energy burned data from Apple HealthKit during workouts on Apple Watch. This data is displayed in the App and is never sent to our servers or shared with third parties.</li>
            <li><strong>Workout Sessions:</strong> When using the Apple Watch app, ProgLoad may create HealthKit workout sessions to track your training activity.</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-3">1.3 Information Collected Automatically</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Analytics Data:</strong> We may use Firebase Analytics to collect anonymized usage data, including screen views and feature usage patterns. This data is aggregated and does not personally identify you.</li>
            <li><strong>Crash and Performance Data:</strong> We may use Firebase Crashlytics to collect crash logs and diagnostic data to improve App stability.</li>
            <li><strong>Device Information:</strong> We collect basic device information including operating system version and device model, used exclusively for crash reporting and App compatibility.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-10 mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Provide and Maintain the App:</strong> To operate the core features of ProgLoad, including workout tracking, routine management, and coach-customer connectivity.</li>
            <li><strong>Account Management:</strong> To create and manage your user account, authenticate your identity, and enable secure login.</li>
            <li><strong>Coach Features:</strong> To facilitate coach-customer connections, routine assignment, workout review, and feedback.</li>
            <li><strong>Sync Between Devices:</strong> To synchronize your workout data between iPhone and Apple Watch.</li>
            <li><strong>Improvements and Analytics:</strong> To understand how users interact with the App and make informed decisions about future improvements.</li>
            <li><strong>Bug Fixes and Stability:</strong> To diagnose crashes, fix bugs, and ensure the App runs reliably.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-10 mb-4">3. Data Sharing and Disclosure</h2>

          <h3 className="text-lg font-medium mt-6 mb-3">3.1 Coach-Customer Data Sharing</h3>
          <p className="mb-4 leading-relaxed">
            When you are connected with a coach, your coach can view your assigned routines, completed workout logs, and exercise statistics. This sharing is a core feature of the App and only occurs between you and your assigned coach.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-3">3.2 Third-Party Service Providers</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Firebase (operated by Google):</strong> We use Firebase as our backend infrastructure provider for authentication, database storage, analytics, and crash reporting. Google acts as a data processor under our instructions.</li>
            <li><strong>Apple:</strong> The App is distributed through the Apple App Store. Apple may collect certain data in connection with App distribution. HealthKit data stays on your device and is not sent to our servers.</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-3">3.3 What We Do Not Do</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>We do not sell your personal data.</strong> We have never sold personal data and have no plans to do so.</li>
            <li><strong>We do not share your data with advertisers.</strong> ProgLoad does not display third-party advertisements.</li>
            <li><strong>We do not share your HealthKit data.</strong> Heart rate and calorie data from HealthKit never leaves your device.</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-3">3.4 Legal Requirements</h3>
          <p className="mb-4 leading-relaxed">
            We may disclose your information if required to do so by law or in response to valid legal requests by public authorities.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">4. Data Retention</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Account Data:</strong> We retain your account information and workout data for as long as your account is active.</li>
            <li><strong>After Account Deletion:</strong> When you request account deletion, we will delete or anonymize your personal data within 30 days. Some data may be retained in encrypted backups for up to 90 days.</li>
            <li><strong>Analytics Data:</strong> Anonymized analytics data may be retained indefinitely as it cannot identify individual users.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-10 mb-4">5. Your Rights and Choices</h2>

          <h3 className="text-lg font-medium mt-6 mb-3">5.1 Access Your Data</h3>
          <p className="mb-4 leading-relaxed">
            You have the right to request a copy of the personal data we hold about you. You can view most of your data directly within the App.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-3">5.2 Delete Your Data</h3>
          <p className="mb-4 leading-relaxed">
            You can request deletion of your account and all associated data by contacting us at the email address listed below.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-3">5.3 HealthKit Permissions</h3>
          <p className="mb-4 leading-relaxed">
            You can revoke HealthKit permissions at any time through your device&apos;s Settings &gt; Health &gt; Data Access. Revoking permissions will not affect the core workout tracking functionality.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-3">5.4 Update Your Information</h3>
          <p className="mb-4 leading-relaxed">
            You can update your name and other profile information directly within the App at any time.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">6. Children&apos;s Privacy</h2>
          <p className="mb-4 leading-relaxed">
            ProgLoad is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal data from a child under 13, we will take steps to delete that information promptly.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">7. Security</h2>
          <p className="mb-4 leading-relaxed">
            We take reasonable measures to protect your personal information:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Encryption in Transit:</strong> All data transmitted between the App and our servers is encrypted using TLS.</li>
            <li><strong>Encryption at Rest:</strong> Data stored in Firebase is encrypted at rest using Google&apos;s default encryption.</li>
            <li><strong>Authentication:</strong> We use Firebase Authentication to securely manage user credentials.</li>
            <li><strong>Access Controls:</strong> Firestore security rules ensure users can only access data they are authorized to view.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-10 mb-4">8. International Data Transfers</h2>
          <p className="mb-4 leading-relaxed">
            Your information may be transferred to and processed in countries other than your country of residence, including the United States, where Firebase servers are located. By using the App, you consent to the transfer of your information to these countries.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">9. GDPR Compliance (European Economic Area Users)</h2>
          <p className="mb-4 leading-relaxed">
            If you are located in the EEA, UK, or Switzerland, you have additional rights under the GDPR:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Contract Performance:</strong> Processing necessary to provide the App&apos;s services (Article 6(1)(b) GDPR).</li>
            <li><strong>Legitimate Interests:</strong> Processing for analytics and crash reporting (Article 6(1)(f) GDPR).</li>
            <li><strong>Consent:</strong> Where required, we obtain your consent before processing, such as for HealthKit data access (Article 6(1)(a) GDPR).</li>
            <li>You may restrict processing, object to processing, withdraw consent, or lodge a complaint with your local data protection authority.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-10 mb-4">10. California Privacy Rights (CCPA)</h2>
          <p className="mb-4 leading-relaxed">
            If you are a California resident, you have additional rights under the CCPA:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Right to Know:</strong> Request information about personal data collected about you.</li>
            <li><strong>Right to Delete:</strong> Request deletion of your personal information.</li>
            <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your rights.</li>
            <li><strong>No Sale of Personal Information:</strong> We do not sell personal information as defined under the CCPA.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-10 mb-4">11. Changes to This Privacy Policy</h2>
          <p className="mb-4 leading-relaxed">
            We may update this Privacy Policy from time to time. When we make material changes, we will update the &ldquo;Last Updated&rdquo; date at the top of this page. Your continued use of the App constitutes acceptance of the updated policy.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">12. Contact Us</h2>
          <p className="mb-4 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us:
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
              <span className="text-foreground">{dict.footer.privacy}</span>
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
              {dict.footer.copyright.replace("{year}", new Date().getFullYear().toString())}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
