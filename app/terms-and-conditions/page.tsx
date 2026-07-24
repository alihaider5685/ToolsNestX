import { FileText, ArrowRight } from "lucide-react";
import Button from "@/app/components/common/Button";

export const metadata = {
  title: "Terms & Conditions | ToolsNestX",
  description:
    "Read the Terms & Conditions for using ToolsNestX and our online tools.",
};

export default function TermsPage() {
  return (
    <main className="overflow-hidden bg-black text-white">

      {/* ================= ANIMATION KEYFRAMES ================= */}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>

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

          <div
            className="fade-up inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-2 text-sm font-semibold text-blue-300 backdrop-blur-xl"
            style={{ animationDelay: "0ms" }}
          >

            <FileText size={16} />

            Legal Information

          </div>

          {/* Heading */}

          <h1
            className="fade-up mt-10 max-w-5xl text-5xl font-black leading-tight md:text-7xl lg:text-8xl"
            style={{ animationDelay: "100ms" }}
          >

            Terms{" "}

            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 bg-clip-text text-transparent">

              & Conditions

            </span>

          </h1>

          {/* Last Updated */}

          <p
            className="fade-up mt-6 text-sm uppercase tracking-[4px] text-gray-500"
            style={{ animationDelay: "200ms" }}
          >

            Last Updated • July 2026

          </p>

          {/* Description */}

          <p
            className="fade-up mx-auto mt-10 max-w-4xl text-xl leading-10 text-gray-400"
            style={{ animationDelay: "300ms" }}
          >

            Welcome to ToolsNestX. These Terms & Conditions govern your use of
            our website and online tools. By accessing or using ToolsNestX,
            you agree to comply with these terms and all applicable laws.

          </p>

          <p
            className="fade-up mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-500"
            style={{ animationDelay: "400ms" }}
          >

            Please read these Terms carefully before using our services.
            If you do not agree with any part of these Terms, you should
            discontinue using ToolsNestX immediately.

          </p>

         <div className="h-5 bg-black" />

          {/* Buttons */}

          <div
            className="fade-up mt-14 flex flex-wrap justify-center gap-5"
            style={{ animationDelay: "500ms" }}
          >

            <Button href="/contact" icon={<ArrowRight size={20} />}>
              Contact Us
            </Button>

            <Button href="/" variant="secondary">
              Back to Home
            </Button>

          </div>

        </div>

      </section>

     <div className="h-5 bg-black" />

      {/* ================= TERMS CONTENT ================= */}

<section className="px-6 py-28">

  <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center px-6">

    {/* Section Heading */}

    <div className="fade-up mx-auto max-w-4xl text-center">

      <p className="mb-5 text-sm font-bold uppercase tracking-[8px] text-blue-500">
        TERMS OF USE
      </p>

      <h2 className="text-5xl font-black leading-tight md:text-6xl">

        Understanding Our{" "}

        <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Terms
        </span>

      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-xl leading-10 text-gray-400">

        These terms explain how ToolsNestX services may be used and the
        responsibilities of every visitor using our platform.

      </p>

    </div>

    <div className="h-5 bg-black" />

    {/* Cards */}

    <div className="mx-auto mt-20 max-w-6xl space-y-8">

      {/* Card 1 */}

      <div className="fade-up rounded-[30px] border border-white/10 bg-[#111] p-10 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50" style={{ animationDelay: "0ms" }}>

        <h3 className="text-3xl font-bold">
          Acceptance of Terms
        </h3>

        <p className="mt-6 text-lg leading-9 text-gray-400">
          By accessing or using ToolsNestX, you agree to be legally bound by
          these Terms & Conditions. If you do not agree with these terms,
          please discontinue using our website immediately.
        </p>

      </div>

      <div className="h-5 bg-black" />

      {/* Card 2 */}

      <div className="fade-up rounded-[30px] border border-white/10 bg-[#111] p-10 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50" style={{ animationDelay: "80ms" }}>

        <h3 className="text-3xl font-bold">
          Use of Services
        </h3>

        <p className="mt-6 text-lg leading-9 text-gray-400">
          ToolsNestX provides browser-based productivity tools for personal,
          educational and business use. You agree to use these services only
          for lawful purposes.
        </p>

      </div>

      <div className="h-5 bg-black" />

      {/* Card 3 */}

      <div className="fade-up rounded-[30px] border border-white/10 bg-[#111] p-10 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50" style={{ animationDelay: "160ms" }}>

        <h3 className="text-3xl font-bold">
          User Responsibilities
        </h3>

        <p className="mt-6 text-lg leading-9 text-gray-400">
          Users are responsible for ensuring that files uploaded or processed
          through ToolsNestX do not violate any applicable laws or third-party
          rights.
        </p>

      </div>

      <div className="h-5 bg-black" />

      {/* Card 4 */}

      <div className="fade-up rounded-[30px] border border-white/10 bg-[#111] p-10 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50" style={{ animationDelay: "240ms" }}>

        <h3 className="text-3xl font-bold">
          Intellectual Property
        </h3>

        <p className="mt-6 text-lg leading-9 text-gray-400">
          All branding, website content, graphics, logos and software used on
          ToolsNestX are protected by applicable intellectual property laws and
          remain the property of ToolsNestX unless otherwise stated.
        </p>

      </div>

      <div className="h-5 bg-black" />

      {/* Card 5 */}

      <div className="fade-up rounded-[30px] border border-white/10 bg-[#111] p-10 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50" style={{ animationDelay: "320ms" }}>

        <h3 className="text-3xl font-bold">
          Prohibited Activities
        </h3>

        <p className="mt-6 text-lg leading-9 text-gray-400">
          Users may not misuse ToolsNestX by attempting unauthorized access,
          distributing malware, interfering with website operations or using
          our services for illegal activities.
        </p>

      </div>

      <div className="h-5 bg-black" />

      {/* Card 6 */}

      <div className="fade-up rounded-[30px] border border-white/10 bg-[#111] p-10 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50" style={{ animationDelay: "400ms" }}>

        <h3 className="text-3xl font-bold">
          Disclaimer of Warranties
        </h3>

        <p className="mt-6 text-lg leading-9 text-gray-400">
          ToolsNestX is provided on an "as available" and "as is" basis. While
          we strive to provide reliable services, we do not guarantee
          uninterrupted availability or error-free operation.
        </p>

      </div>

    </div>

  </div>

</section>

<div className="h-8 bg-black" />

{/* ================= LIMITATION OF LIABILITY ================= */}

<section className="px-6 py-28">

  <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center px-6">

    <div className="fade-up mx-auto max-w-6xl rounded-[36px] border border-white/10 bg-[#111] p-12 md:p-16">

      <h2 className="text-center text-4xl font-black md:text-5xl">
        Limitation of Liability
      </h2>

      <p className="mx-auto mt-8 max-w-4xl text-center text-lg leading-9 text-gray-400">
        ToolsNestX and its owners shall not be held liable for any direct,
        indirect, incidental, special or consequential damages resulting from
        the use or inability to use our website, online tools or services.
        Users access and use ToolsNestX entirely at their own discretion and
        risk.
      </p>

    </div>

  </div>

</section>

<div className="h-5 bg-black" />

{/* ================= CHANGES TO TERMS ================= */}

<section className="px-6 pb-28">
  <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center px-6">

  <div className="fade-up mx-auto max-w-6xl rounded-[36px] border border-white/10 bg-[#111] p-12 md:p-16">

    <h2 className="text-center text-4xl font-black md:text-5xl">
      Changes To These Terms
    </h2>

    <p className="mx-auto mt-8 max-w-4xl text-center text-lg leading-9 text-gray-400">
      We reserve the right to update or modify these Terms & Conditions at
      any time without prior notice. Changes become effective immediately
      after being published on this page. Continued use of ToolsNestX
      indicates your acceptance of the updated Terms.
    </p>

  </div>

  </div>

</section>

<div className="h-5 bg-black" />

{/* ================= GOVERNING LAW ================= */}

<section className="px-6 pb-28">
  <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center px-6">


  <div className="fade-up mx-auto max-w-6xl rounded-[36px] border border-white/10 bg-[#111] p-12 md:p-16">

    <h2 className="text-center text-4xl font-black md:text-5xl">
      Governing Law
    </h2>

    <p className="mx-auto mt-8 max-w-4xl text-center text-lg leading-9 text-gray-400">
      These Terms & Conditions shall be governed and interpreted in
      accordance with the applicable laws of the relevant jurisdiction.
      Any disputes relating to the use of ToolsNestX shall be handled under
      those applicable laws.
    </p>

  </div>

  </div>
</section>

<div className="h-5 bg-black" />

{/* ================= CONTACT ================= */}

<section className="px-6 pb-28">
  <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center px-6">


  <div className="fade-up mx-auto max-w-6xl rounded-[36px] border border-white/10 bg-[#111] p-12 md:p-16">

    <h2 className="text-center text-4xl font-black md:text-5xl">
      Contact Information
    </h2>

    <p className="mx-auto mt-8 max-w-4xl text-center text-lg leading-9 text-gray-400">
      If you have any questions regarding these Terms & Conditions, please
      contact us through our Contact page. We will do our best to respond
      as quickly as possible.
    </p>

  </div>

  </div>
</section>

<div className="h-8 bg-black" />

{/* ================= CTA ================= */}

<section className="px-6 pb-32">

  <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center px-6">


    <div className="fade-up rounded-[40px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-12 text-center md:p-20">

      <h2 className="text-4xl font-black text-white md:text-6xl">
        Have Questions About Our Terms?
      </h2>

      <p className="mx-auto mt-8 max-w-6xl text-xl leading-10 text-blue-100">
        We're here to help. If anything in these Terms & Conditions is
        unclear, feel free to reach out and our team will be happy to
        assist you.
      </p>

      <div className="mt-12 flex flex-wrap justify-center gap-5">

        <Button
          href="/contact"
          className="bg-white text-blue-700 hover:bg-gray-100"
        >
          Contact Us
        </Button>

        <Button href="/" variant="secondary">
          Back To Home
        </Button>

      </div>

    </div>

  </div>

</section>

<div className="h-10 bg-black" />

</main>
  );
}