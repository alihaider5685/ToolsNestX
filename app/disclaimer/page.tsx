export const metadata = {
  title: "Disclaimer | ToolsNestX",
  description:
    "Read the ToolsNestX disclaimer regarding the use of our online tools, blog content, and website information.",
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl max-w-screen-2xl px-6 py-20">

        <div className="mb-14 text-center">
          <h1 className="text-4xl text-center font-black md:text-7xl">
            Disclaimer
          </h1>

          <p className="mx-auto mt-6 max-w-8xl text-lg text-gray-400">
            Please read this disclaimer carefully before using ToolsNestX.
            By accessing our website, you agree to the terms outlined below.
          </p>
        </div>

        <div className="h-10 bg-black" />

        <div className="space-y-12">

          <section>
            <h2 className="mb-4 text-2xl font-bold">
              General Information
            </h2>

            <p className="leading-8 text-gray-300">
              All information, online tools, and blog content provided on
              ToolsNestX are published in good faith and for general
              informational and educational purposes only. While we strive to
              keep everything accurate and up to date, we make no guarantees
              regarding the completeness, reliability, or accuracy of any
              information available on this website.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">
              Online Tools
            </h2>

            <p className="leading-8 text-gray-300">
              Our online tools are provided on an "as is" and "as available"
              basis. Although we continuously improve our services, we cannot
              guarantee that every tool will always produce error-free results
              or meet every specific use case. Users are encouraged to verify
              important outputs before relying on them.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">
              Blog Content
            </h2>

            <p className="leading-8 text-gray-300">
              Articles published on ToolsNestX are intended to educate and
              assist users. They should not be considered professional,
              financial, legal, medical, or technical advice. Always consult a
              qualified professional when making important decisions.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">
              Third-Party Links
            </h2>

            <p className="leading-8 text-gray-300">
              Our website may contain links to third-party websites for
              reference or convenience. We do not control these websites and
              are not responsible for their content, privacy practices, or
              services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">
              Limitation of Liability
            </h2>

            <p className="leading-8 text-gray-300">
              ToolsNestX shall not be liable for any direct, indirect,
              incidental, consequential, or special damages resulting from the
              use of our website, tools, or content. Your use of this website
              is entirely at your own risk.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">
              Consent
            </h2>

            <p className="leading-8 text-gray-300">
              By using ToolsNestX, you acknowledge that you have read,
              understood, and agreed to this disclaimer and our website terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">
              Updates
            </h2>

            <p className="leading-8 text-gray-300">
              We may update this disclaimer from time to time to reflect
              changes in our services or legal requirements. Any updates will
              be published on this page with immediate effect.
            </p>
          </section>

          <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6">
            <p className="text-center text-sm text-gray-300">
              <strong>Last Updated:</strong> July 10, 2026
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}