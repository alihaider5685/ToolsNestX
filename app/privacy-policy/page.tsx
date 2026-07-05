import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | FileNestX",
  description:
    "Read the Privacy Policy of FileNestX and learn how we collect, use and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="overflow-hidden bg-black text-white">

      {/* ================= BACKGROUND ================= */}

      <div className="fixed inset-0 -z-10 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-black to-[#06152d]" />

        <div
          className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)]
          bg-[size:80px_80px]
          opacity-20
        "
        />

        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[170px]" />
      </div>

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden">

        <div className="mx-auto flex min-h-[85vh] max-w-screen-2xl flex-col items-center justify-center px-6 py-32 text-center">

          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-2 text-sm font-semibold text-blue-300 backdrop-blur-xl">

            <ShieldCheck size={16} />

            Privacy & Data Protection

          </div>

          {/* Heading */}

          <h1 className="mt-10 max-w-5xl text-5xl font-black leading-tight md:text-7xl lg:text-8xl">

            Privacy{" "}

            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Policy
            </span>

          </h1>

          <div className="h-7 bg-black" />

          {/* Last Updated */}

          <p className="mt-6 text-sm uppercase tracking-[4px] text-gray-500">

            Last Updated • July 2026

          </p>

          {/* Description */}

          <p className="mx-auto mt-10 max-w-4xl text-xl leading-10 text-gray-400">

            At FileNestX, protecting your privacy is one of our highest
            priorities. This Privacy Policy explains what information we
            collect, how we use it, and the steps we take to keep your data
            secure whenever you use our online tools.

          </p>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-500">

            By using FileNestX, you agree to the practices described in this
            Privacy Policy. We encourage you to read this page carefully to
            understand how your information is handled.

          </p>

          {/* Buttons */}

          <div className="mt-14 flex flex-wrap justify-center gap-5">

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 px-8 py-4 text-lg font-semibold shadow-[0_0_40px_rgba(59,130,246,.45)] transition-all duration-300 hover:scale-105"
            >
              Contact Us

              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </Link>

            <Link
              href="/"
              className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold backdrop-blur-xl transition-all duration-300 hover:border-blue-500 hover:bg-white/10"
            >
              Back to Home
            </Link>

          </div>

        </div>

      </section>
      {/* ================= PRIVACY CONTENT ================= */}

<section className="px-6 py-28">

  <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center px-6">


    {/* Section Heading */}

    <div className="mx-auto max-w-4xl text-center">

      <p className="mb-5 text-sm font-bold uppercase tracking-[8px] text-blue-500">
        PRIVACY DETAILS
      </p>

      <h2 className="text-5xl font-black leading-tight md:text-6xl">

        How We Protect{" "}

        <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Your Information
        </span>

      </h2>

      <p className="mx-auto mt-8 max-w-4xl text-xl leading-10 text-gray-400">

        We believe privacy should be simple, transparent and easy to
        understand. Below you'll find how FileNestX handles your data.

      </p>

    </div>

    <div className="h-5 bg-black" />

    {/* Cards */}

    <div className="mx-auto mt-20 max-w-6xl space-y-8">

      {/* Card 1 */}

      <div className="rounded-[30px] border border-white/10 bg-[#111] p-10">

        <h3 className="text-3xl font-bold text-white">
          Information We Collect
        </h3>

        <p className="mt-6 text-lg leading-9 text-gray-400">
          Most FileNestX tools work directly in your browser. We generally do
          not require account registration or collect unnecessary personal
          information. Basic technical information such as browser type,
          operating system and anonymous usage statistics may be collected to
          improve performance and user experience.
        </p>

      </div>

      <div className="h-5 bg-black" />

      {/* Card 2 */}

      <div className="rounded-[30px] border border-white/10 bg-[#111] p-10">

        <h3 className="text-3xl font-bold text-white">
          How We Use Information
        </h3>

        <p className="mt-6 text-lg leading-9 text-gray-400">
          Information collected is used to improve our website, monitor
          performance, fix technical issues, enhance security and provide a
          better overall experience. We do not sell personal information to
          third parties.
        </p>

      </div>

      <div className="h-5 bg-black" />

      {/* Card 3 */}

      <div className="rounded-[30px] border border-white/10 bg-[#111] p-10">

        <h3 className="text-3xl font-bold text-white">
          Cookies
        </h3>

        <p className="mt-6 text-lg leading-9 text-gray-400">
          FileNestX may use cookies and similar technologies to remember user
          preferences, improve website performance and analyze anonymous usage
          statistics. You can disable cookies through your browser settings if
          you prefer.
        </p>

      </div>

      <div className="h-5 bg-black" />

      {/* Card 4 */}

      <div className="rounded-[30px] border border-white/10 bg-[#111] p-10">

        <h3 className="text-3xl font-bold text-white">
          Third-Party Services
        </h3>

        <p className="mt-6 text-lg leading-9 text-gray-400">
          We may use trusted third-party services such as analytics,
          advertising and hosting providers to operate and improve FileNestX.
          These providers process information according to their own privacy
          policies.
        </p>

      </div>

      <div className="h-5 bg-black" />

      {/* Card 5 */}

      <div className="rounded-[30px] border border-white/10 bg-[#111] p-10">

        <h3 className="text-3xl font-bold text-white">
          Data Security
        </h3>

        <p className="mt-6 text-lg leading-9 text-gray-400">
          We implement appropriate technical and organizational measures to
          protect user information. While no system can guarantee absolute
          security, we continuously work to keep our platform safe and
          reliable.
        </p>

      </div>

    </div>

  </div>

</section>

<div className="h-8 bg-black" />

{/* ================= USER RIGHTS ================= */}

<section className="px-6 py-28">

   <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center px-6">


    <div className="mx-auto max-w-4xl text-center">

      <p className="mb-5 text-sm font-bold uppercase tracking-[8px] text-blue-500">
        YOUR RIGHTS
      </p>

      <h2 className="text-5xl font-black leading-tight md:text-6xl">

        Your{" "}

        <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Privacy Matters
        </span>

      </h2>

    </div>

    <div className="h-7 bg-black" />

    <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-2">

      <div className="rounded-[28px] border border-white/10 bg-[#111] p-8">
        <h3 className="text-2xl font-bold">Access Your Information</h3>

        <p className="mt-5 text-lg leading-9 text-gray-400">
          You have the right to request information about any personal data
          that may be collected while using FileNestX.
        </p>
      </div>

      <div className="rounded-[28px] border border-white/10 bg-[#111] p-8">
        <h3 className="text-2xl font-bold">Request Corrections</h3>

        <p className="mt-5 text-lg leading-9 text-gray-400">
          If any information is inaccurate or incomplete, you may request that
          it be corrected.
        </p>
      </div>

      <div className="rounded-[28px] border border-white/10 bg-[#111] p-8">
        <h3 className="text-2xl font-bold">Request Data Removal</h3>

        <p className="mt-5 text-lg leading-9 text-gray-400">
          You may contact us if you wish to request deletion of information
          where applicable.
        </p>
      </div>

      <div className="rounded-[28px] border border-white/10 bg-[#111] p-8">
        <h3 className="text-2xl font-bold">Privacy Questions</h3>

        <p className="mt-5 text-lg leading-9 text-gray-400">
          If you have questions about this Privacy Policy, we're always happy
          to help.
        </p>
      </div>

    </div>

  </div>

</section>

<div className="h-7 bg-black" />

{/* ================= CHILDREN ================= */}

<section className="px-6 pb-28">
   <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center px-6">


  <div className="mx-auto max-w-6xl rounded-[36px] border border-white/10 bg-[#111] p-12 md:p-16">

    <h2 className="text-center text-4xl font-black md:text-5xl">
      Children's Privacy
    </h2>

    <p className="mx-auto mt-8 max-w-4xl text-center text-lg leading-9 text-gray-400">
      FileNestX is not intended for children under the age of 13. We do not
      knowingly collect personal information from children. If you believe a
      child has provided personal information, please contact us so we can
      remove it promptly.
    </p>

  </div>

   </div>

</section>

<div className="h-7 bg-black" />

{/* ================= POLICY CHANGES ================= */}

<section className="px-6 pb-28">

  <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center px-6">

    <div className="mx-auto max-w-6xl rounded-[36px] border border-white/10 bg-[#111] p-12 md:p-16">


    <h2 className="text-center text-4xl font-black md:text-5xl">
      Changes To This Policy
    </h2>

    <p className="mx-auto mt-8 max-w-4xl text-center text-lg leading-9 text-gray-400">
      We may update this Privacy Policy from time to time to reflect changes
      in our services, legal requirements or security practices. Any updates
      will be posted on this page together with the latest revision date.
    </p>

    </div>

  </div>

</section>

<div className="h-7 bg-black" />

{/* ================= CTA ================= */}

<section className="px-6 pb-32">

  <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center px-6">

    <div className="rounded-[40px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-12 text-center md:p-20">

      <h2 className="text-4xl font-black text-white md:text-6xl text-center">
        Questions About Your Privacy?
      </h2>

      <p className="mx-auto mt-8 max-w-6xl text-xl leading-10 text-blue-100 text-center">
        If you have any questions regarding this Privacy Policy or your data,
        feel free to contact us at any time.
      </p>

      <div className="h-2 bg-blue" />

      <div className="mt-14 flex flex-wrap justify-center gap-5">

      
        <Link
          href="/contact"
          className="rounded-2xl bg-white px-8 py-4 text-lg font-bold text-blue-700 transition hover:scale-105"
        >
          Contact Us
        </Link>

        <Link
          href="/"
          className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-xl transition hover:bg-white/20"
        >
          Back To Home
        </Link>

      </div>

    </div>

  </div>

</section>

<div className="h-10 bg-black" />

</main>
  );
}