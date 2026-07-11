import JwtDecoder from "@/app/components/tools/JwtDecoder";
import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
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
    "Free JWT Decoder Online | Decode JSON Web Tokens | ToolsNestX",

  description:
    "Decode JSON Web Tokens (JWT) instantly with our free online JWT Decoder. View JWT header, payload, claims and expiration securely in your browser without sending data to a server.",

  keywords: [
    "jwt decoder",
    "decode jwt",
    "jwt token decoder",
    "json web token decoder",
    "jwt parser",
    "jwt viewer",
    "jwt inspector",
    "online jwt decoder",
    "free jwt decoder",
    "jwt validator",
    "jwt payload decoder",
    "jwt header decoder",
    "decode bearer token",
    "jwt authentication",
    "jwt debug tool",
    "developer jwt tools",
    "jwt claims viewer",
    "jwt expiration checker",
    "browser jwt decoder",
    "secure jwt decoder",
    "api jwt decoder",
    "jwt token parser",
    "jwt online tool",
    "jwt utilities",
    "json token decoder",
    "best jwt decoder",
    "jwt security tool",
    "jwt analysis",
    "developer tools",
    "toolsnestx jwt decoder",
  ],

  path: "/tools/jwt-decoder",
});

export default function JwtDecoderPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ToolSchema
  name="JWT Decoder"
  description="Decode and inspect JSON Web Tokens (JWT) online securely without sending data to a server."
  path="/tools/jwt-decoder"
/>
<BreadcrumbSchema
  name="JWT Decoder"
  path="/tools/jwt-decoder"
/>

      {/* ================= HERO ================= */}

      <section className="px-6 pt-24 pb-16">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <div className="h-5 bg-black" />

            <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">

              Developer Tools

            </span>

            <div className="h-3 bg-black" />

            <h1 className="mt-8 text-4xl font-extrabold md:text-5xl">

              JWT Decoder

            </h1>

            <div className="h-3 bg-black" />

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Decode JSON Web Tokens (JWT) instantly and inspect the header,
              payload and token information in a readable format. Perfect for
              developers debugging authentication systems, APIs and web
              applications. Everything is processed securely inside your
              browser.

            </p>

          </div>

          <div className="h-5 bg-black" />

          {/* ================= TRUST BADGES ================= */}

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">

            <div className="flex items-center gap-3 rounded-full border border-blue-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-blue-500/40 hover:bg-white/10">

              <ShieldCheck className="h-5 w-5 text-blue-400" />

              <span className="text-sm font-medium text-gray-200">

                Safe Decoding

              </span>

            </div>

            <div className="flex items-center gap-3 rounded-full border border-blue-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-blue-500/40 hover:bg-white/10">

              <Zap className="h-5 w-5 text-blue-400" />

              <span className="text-sm font-medium text-gray-200">

                Instant Results

              </span>

            </div>

            <div className="flex items-center gap-3 rounded-full border border-blue-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-blue-500/40 hover:bg-white/10">

              <Lock className="h-5 w-5 text-blue-400" />

              <span className="text-sm font-medium text-gray-200">

                Browser Based

              </span>

            </div>

            <div className="flex items-center gap-3 rounded-full border border-blue-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-blue-500/40 hover:bg-white/10">

              <MonitorSmartphone className="h-5 w-5 text-blue-400" />

              <span className="text-sm font-medium text-gray-200">

                Works Everywhere

              </span>

            </div>

          </div>

        </div>

      </section>

      <div className="h-10 bg-black" />

      {/* ================= TOOL ================= */}

      <section className="px-6 pb-20">

        <div className="mx-auto max-w-screen-2xl">

          <div className="rounded-3xl border border-white/10 bg-[#0b0b0b] p-8 shadow-[0_0_40px_rgba(59,130,246,.08)]">

            <JwtDecoder />

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

      <div className="h-15 bg-black" />

      {/* ================= FEATURES ================= */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-blue-400">

              FEATURES

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Why Choose Our JWT Decoder?

            </h2>

            <p className="mx-auto mt-5 max-w-8xl text-lg leading-8 text-gray-400">

              Decode JWT tokens instantly, inspect token contents and debug
              authentication workflows without sending your data to external
              servers.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Decode Instantly

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                View the JWT header and payload immediately without installing any software.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Human Readable Output

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Display encoded JWT data in an organized JSON format for easy understanding.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Secure Processing

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Token decoding happens locally inside your browser without uploading sensitive information.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Developer Friendly

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Perfect for debugging authentication systems, OAuth implementations, APIs and backend applications.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Works Everywhere

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Compatible with Windows, macOS, Linux, Android and iOS browsers.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Free Forever

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Decode unlimited JWT tokens online without registration or hidden costs.

              </p>

            </div>

          </div>

        </div>

      </section>

      <div className="h-5 bg-black" />
            {/* ================= HOW TO USE ================= */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-blue-400">

              HOW TO USE

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Decode JWT Tokens In 3 Easy Steps

            </h2>

            <div className="h-5 bg-black" />

          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

                1

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Paste Your JWT

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Copy and paste your complete JSON Web Token into the decoder input field.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

                2

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Decode Instantly

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                The tool automatically decodes the JWT header and payload into readable JSON.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

                3

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Inspect the Token

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Review claims, expiration time, issuer, audience and other JWT information for debugging.

              </p>

            </div>

          </div>

        </div>

      </section>

      <div className="h-10 bg-black" />

      {/* ================= WHY USE ================= */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-blue-400">

              WHY USE

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Why Use Our JWT Decoder?

            </h2>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto max-w-8xl space-y-8 text-lg leading-9 text-gray-400">

            <p>

              ToolsNestX JWT Decoder makes it easy to inspect JSON Web Tokens
              used in authentication systems, REST APIs and modern web
              applications. Instead of manually decoding Base64 encoded token
              data, you can instantly view the JWT header and payload in a
              structured and readable format.

            </p>

            <p>

              Developers frequently work with JWT tokens while implementing
              authentication, OAuth, OpenID Connect and API authorization.
              This tool helps you verify token claims such as issuer (iss),
              subject (sub), audience (aud), issued time (iat) and expiration
              (exp), making debugging and testing much faster.

            </p>

            <p>

              Privacy is one of our highest priorities. Every JWT token is
              decoded entirely inside your browser without being transmitted to
              external servers. This makes ToolsNestX JWT Decoder a secure,
              reliable and completely free solution for developers, DevOps
              engineers, students and cybersecurity professionals.

            </p>

          </div>

        </div>

      </section>

      <div className="h-10 bg-black" />
            {/* ================= FAQ ================= */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-blue-400">

              FAQ

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Frequently Asked Questions

            </h2>

            <p className="mx-auto mt-5 max-w-8xl text-lg leading-8 text-gray-400">

              Find answers to the most common questions about our free JWT Decoder.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto mt-16 max-w-5xl space-y-5">

            {[
              {
                q: "Is JWT Decoder free to use?",
                a: "Yes. ToolsNestX JWT Decoder is completely free with unlimited token decoding.",
              },
              {
                q: "Does this tool verify JWT signatures?",
                a: "No. This tool is designed to decode and display the JWT header and payload. Signature verification requires the appropriate secret or public key.",
              },
              {
                q: "Is my JWT uploaded to your servers?",
                a: "No. Everything is decoded locally inside your browser. Your token never leaves your device.",
              },
              {
                q: "Can I inspect expired JWT tokens?",
                a: "Yes. Even expired JWT tokens can be decoded so you can inspect their claims and payload.",
              },
              {
                q: "Who should use this tool?",
                a: "Developers, backend engineers, DevOps teams, cybersecurity professionals and students working with JWT authentication.",
              },
              {
                q: "Which JWT fields can I view?",
                a: "You can inspect the header, payload and common claims such as iss, sub, aud, exp, nbf, iat and jti when they are present.",
              },
            ].map((item) => (

              <details
                key={item.q}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-500/30"
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

            <span className="text-sm font-bold uppercase tracking-[8px] text-blue-400">

              RELATED TOOLS

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Explore More Developer Tools

            </h2>

          </div>

          <div className="h-5 bg-black" />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                Base64 Encoder & Decoder

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Encode and decode Base64 strings instantly for development and debugging.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                JSON Formatter

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Beautify and validate JSON with clean, readable formatting.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                Hash Generator

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Generate MD5, SHA-1, SHA-256 and SHA-512 hashes instantly.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                UUID Generator

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Generate secure UUID Version 4 identifiers for your applications.

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

          <div className="rounded-[40px] border border-blue-500/20 bg-gradient-to-b from-blue-500/10 to-transparent p-16 text-center">

            <h2 className="text-4xl font-bold">

              Ready To Decode JWT Tokens?

            </h2>

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Decode JWT headers and payloads instantly with ToolsNestX.
              Fast, secure, privacy-friendly and completely free.

            </p>

            <button className="mt-10 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-500">

              Decode JWT Now

            </button>

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

    </main>
  );
}