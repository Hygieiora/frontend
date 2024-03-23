// pages/privacy.js
import Head from "next/head";

export default function Privacy() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Hygieiora - Privacy Policy</title>
        <meta name="description" content="Privacy Policy for Hygieiora" />
      </Head>

      <main className="my-10">
        <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>

        <section className="space-y-4 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold">Introduction</h2>
          <p>
            At Hygieiora, we respect your privacy and are committed to
            protecting it. This policy outlines our practices for collecting,
            using, maintaining, and protecting your personal information.
          </p>

          <h2 className="text-2xl font-semibold">Information We Collect</h2>
          <p>
            Describe the types of information you collect (e.g., name, email
            address, usage data, etc.).
          </p>

          <h2 className="text-2xl font-semibold">
            How We Use Your Information
          </h2>
          <p>Explain how you use the collected information.</p>

          <h2 className="text-2xl font-semibold">
            How We Share Your Information
          </h2>
          <p>
            If and when you share user information with third parties, describe
            the circumstances here.
          </p>

          <h2 className="text-2xl font-semibold">Cookies</h2>
          <p>Explain your use of cookies, if applicable.</p>

          <h2 className="text-2xl font-semibold">Security</h2>
          <p>Describe the measures you take to protect user data.</p>

          <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>

          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at info@hygieiora.com.
          </p>
        </section>
      </main>
    </div>
  );
}
