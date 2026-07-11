import PasswordGenerator from "@/app/components/tools/PasswordGenerator";
import { generateToolMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import ToolSchema from "@/app/components/seo/ToolSchema";
import BreadcrumbSchema from "@/app/components/seo/BreadcrumbSchema";
import {
  ShieldCheck,
  Zap,
  Lock,
  MonitorSmartphone,
} from "lucide-react";

export const metadata: Metadata = generateToolMetadata({
  title:
    "Free Password Generator Online | Secure Random Password Generator | ToolsNestX",

  description:
    "Generate strong, secure and random passwords instantly. Free online Password Generator with customizable length, symbols, numbers and uppercase letters. No registration required.",

  keywords: [
    "password generator",
    "random password generator",
    "strong password",
    "secure password",
    "password creator",
    "online password generator",
    "free password generator",
    "generate password",
    "random password",
    "secure random password",
    "complex password",
    "strong password creator",
    "password tool",
    "password maker",
    "browser password generator",
    "safe password",
    "custom password generator",
    "password security",
    "best password generator",
    "private password generator",
    "password generator online",
    "toolsnestx password generator",
    "password creator free",
    "password generator secure",
    "generate secure password",
    "strong random password",
    "password utility",
    "cyber security tools",
    "online password maker",
    "free secure password",
  ],

  path: "/tools/password-generator",
});

export default function PasswordGeneratorPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ToolSchema
  name="Password Generator"
  description="Generate strong, secure and random passwords online for free. Create customizable passwords instantly."
  path="/tools/password-generator"
/>
<BreadcrumbSchema
  name="Password Generator"
  path="/tools/password-generator"
/>

      {/* ================= HERO ================= */}

      <section className="px-6 pt-24 pb-16">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <div className="h-5 bg-black" />

            <span className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm font-semibold text-red-300">

              Security Tools

            </span>

            <div className="h-3 bg-black" />

            <h1 className="mt-8 text-4xl font-extrabold md:text-5xl">

              Generate Strong Passwords Instantly

            </h1>

            <div className="h-3 bg-black" />

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Create highly secure random passwords in seconds. Customize
              password length, uppercase letters, lowercase letters, numbers
              and special characters for maximum security. Everything runs
              directly inside your browser.

            </p>

          </div>

          <div className="h-5 bg-black" />

          {/* ================= TRUST BADGES ================= */}

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">

            <div className="flex items-center gap-3 rounded-full border border-red-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-red-500/40 hover:bg-white/10">

              <ShieldCheck className="h-5 w-5 text-red-400" />

              <span className="text-sm font-medium text-gray-200">

                100% Secure

              </span>

            </div>

            <div className="flex items-center gap-3 rounded-full border border-red-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-red-500/40 hover:bg-white/10">

              <Zap className="h-5 w-5 text-red-400" />

              <span className="text-sm font-medium text-gray-200">

                Instant Generation

              </span>

            </div>

            <div className="flex items-center gap-3 rounded-full border border-red-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-red-500/40 hover:bg-white/10">

              <Lock className="h-5 w-5 text-red-400" />

              <span className="text-sm font-medium text-gray-200">

                Privacy Protected

              </span>

            </div>

            <div className="flex items-center gap-3 rounded-full border border-red-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-red-500/40 hover:bg-white/10">

              <MonitorSmartphone className="h-5 w-5 text-red-400" />

              <span className="text-sm font-medium text-gray-200">

                Works on Any Device

              </span>

            </div>

          </div>

        </div>

      </section>

      <div className="h-5 bg-black" />

      {/* ================= TOOL ================= */}

      <section className="px-6 pb-20">

        <div className="mx-auto max-w-screen-2xl">

          <div className="rounded-3xl border border-white/10 bg-[#0b0b0b] p-8 shadow-[0_0_40px_rgba(239,68,68,.08)]">

            <PasswordGenerator />

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

      {/* ================= ADVERTISEMENT ================= */}

      <section className="px-6 pb-20">

        <div className="mx-auto max-w-screen-2xl">

          <div className="flex h-32 items-center justify-center rounded-3xl border border-dashed border-gray-700 bg-white/[0.02] text-gray-500">

            Google AdSense (728 × 90)

          </div>

        </div>

      </section>

      <div className="h-10 bg-black" />
            {/* ================= FEATURES ================= */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-red-400">

              FEATURES

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Why Choose Our Password Generator?

            </h2>

            <div className="h-2 bg-black" />

            <p className="mx-auto mt-5 max-w-8xl text-lg leading-8 text-gray-400">

              Generate highly secure passwords instantly with complete control
              over length, characters and complexity.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Strong Random Passwords

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Create unpredictable passwords using advanced random generation
                for maximum account security.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Custom Password Length

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Choose exactly how long your password should be to match your
                security requirements.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Symbols & Numbers

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Include uppercase letters, lowercase letters, numbers and
                special characters for stronger passwords.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Privacy First

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Passwords are generated locally inside your browser without
                being stored or shared anywhere.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                One-Click Copy

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Copy your generated password instantly and use it anywhere with
                a single click.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Completely Free

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Generate unlimited secure passwords online without creating an
                account or paying any fees.

              </p>

            </div>

          </div>

        </div>

      </section>

      <div className="h-10 bg-black" />

      {/* ================= HOW TO USE ================= */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-red-400">

              HOW TO USE

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Generate A Secure Password In 3 Easy Steps

            </h2>

            <div className="h-5 bg-black" />

          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-2xl font-bold">

                1

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Choose Your Settings

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Select your preferred password length and choose whether to
                include uppercase letters, lowercase letters, numbers and
                symbols.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-2xl font-bold">

                2

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Generate Password

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Click the generate button to instantly create a secure random
                password based on your selected options.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-2xl font-bold">

                3

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Copy & Use

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Copy your new password with one click and use it to protect
                your online accounts.

              </p>

            </div>

          </div>

        </div>

      </section>

      <div className="h-10 bg-black" />

      {/* ================= WHY USE PASSWORD GENERATOR ================= */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-red-400">

              WHY USE

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Why Use Our Password Generator?

            </h2>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto max-w-8xl space-y-8 text-lg leading-9 text-gray-400">

            <p>

              ToolsNestX Password Generator helps you create strong, random and
              secure passwords that are much harder to guess than passwords
              created manually. Strong passwords are one of the simplest ways to
              protect your online accounts from unauthorized access.

            </p>

            <p>

              You can fully customize your password by choosing the desired
              length and deciding whether to include uppercase letters,
              lowercase letters, numbers and special characters. Every password
              is generated instantly using random combinations for improved
              security.

            </p>

            <p>

              Everything works directly inside your browser, so your generated
              passwords remain private. No registration is required, nothing is
              stored on our servers and you can generate unlimited secure
              passwords completely free whenever you need them.

            </p>

          </div>

        </div>

      </section>

      <div className="h-5 bg-black" />
            {/* ================= FAQ ================= */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-red-400">

              FAQ

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Frequently Asked Questions

            </h2>

            <div className="h-2 bg-black" />

            <p className="mx-auto mt-5 max-w-8xl text-lg leading-8 text-gray-400">

              Everything you need to know about our free online Password Generator.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto mt-16 max-w-5xl space-y-5">

            {[
              {
                q: "Is the Password Generator free to use?",
                a: "Yes. ToolsNestX Password Generator is completely free with unlimited password generation.",
              },
              {
                q: "Are my generated passwords stored?",
                a: "No. Passwords are generated inside your browser and are never stored on our servers.",
              },
              {
                q: "Can I customize password length?",
                a: "Yes. You can choose the exact password length based on your security needs.",
              },
              {
                q: "Can I include symbols and numbers?",
                a: "Absolutely. You can enable uppercase letters, lowercase letters, numbers and special characters.",
              },
              {
                q: "Does it work on mobile devices?",
                a: "Yes. The Password Generator works perfectly on desktop, tablet and mobile browsers.",
              },
              {
                q: "Why should I use a strong password?",
                a: "Strong passwords greatly reduce the risk of unauthorized access and help keep your online accounts secure.",
              },
            ].map((item) => (

              <details
                key={item.q}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-red-500/30"
              >

                <summary className="cursor-pointer text-lg font-semibold">

                  {item.q}

                </summary>

                <p className="mt-5 leading-8 text-gray-400">

                  {item.a}

                </p>

              </details>

            ))}

          </div>

        </div>

      </section>

      <div className="h-10 bg-black" />

      {/* ================= RELATED TOOLS ================= */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-red-400">

              RELATED TOOLS

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Explore More ToolsNestX Tools

            </h2>

          </div>

          <div className="h-5 bg-black" />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-red-500/40">

              <h3 className="text-2xl font-bold">

                QR Code Generator

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Generate high-quality QR codes instantly.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-red-500/40">

              <h3 className="text-2xl font-bold">

                Image Compressor

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Compress images without losing quality.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-red-500/40">

              <h3 className="text-2xl font-bold">

                PDF Merger

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Merge multiple PDF files into one document.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-red-500/40">

              <h3 className="text-2xl font-bold">

                Text Case Converter

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Convert text into uppercase, lowercase and other cases.

              </p>

            </div>

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

      {/* ================= BOTTOM AD ================= */}

      <section className="px-6 pb-20">

        <div className="mx-auto max-w-screen-2xl">

          <div className="flex h-32 items-center justify-center rounded-3xl border border-dashed border-gray-700 bg-white/[0.02] text-gray-500">

            Google AdSense (Responsive)

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

      {/* ================= CTA ================= */}

      <section className="px-6 pb-28">

        <div className="mx-auto max-w-screen-2xl">

          <div className="rounded-[40px] border border-red-500/20 bg-gradient-to-b from-red-500/10 to-transparent p-16 text-center">

            <h2 className="text-4xl font-bold">

              Ready To Create A Strong Password?

            </h2>

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Generate secure, random and customizable passwords in seconds.
              Protect your online accounts with strong passwords created by
              ToolsNestX — fast, private and completely free.

            </p>

            <button className="mt-10 rounded-2xl bg-red-600 px-8 py-4 text-lg font-semibold transition hover:bg-red-500">

              Generate Password

            </button>

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

    </main>
  );
}