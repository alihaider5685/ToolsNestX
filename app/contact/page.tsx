import type { Metadata } from "next";
import Link from "next/link";
import ToolSchema from "@/app/components/seo/ToolSchema";
import BreadcrumbSchema from "@/app/components/seo/BreadcrumbSchema";
import {
  Mail,
  Clock3,
  ShieldCheck,
  MessageCircle,
  Bug,
  Lightbulb,
  Briefcase,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | ToolsNestX",
  description:
    "Contact ToolsNestX for support, bug reports, feature requests or business inquiries. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      <ToolSchema
  name="Contact ToolsNestX"
  description="Contact ToolsNestX for support, feature requests, bug reports and business inquiries."
  path="/contact"
/>

<BreadcrumbSchema
  name="Contact"
  path="/contact"
/>

      {/* ================= HERO ================= */}

      <section className="relative px-6 pt-24 pb-20">

        <div className="absolute inset-0 -z-10">

          <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[130px]" />

        </div>

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <div className="h-2 bg-black" />

            <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">

              CONTACT US

            </span>

            <h1 className="mt-8 text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">

              We'd Love To Hear From You

            </h1>

            <div className="h-1 bg-black" />

            <p className="mx-auto mt-8 max-w-8xl text-lg leading-8 text-gray-400">

              Whether you have a question, found a bug, want to suggest a new
              tool, or have a business inquiry, we're always happy to hear your
              feedback.

            </p>

          </div>

        </div>

      </section>

      <div className="h-4 bg-black" />

      {/* ================= CONTACT CARD ================= */}

      <section className="px-6 pb-24">

        <div className="mx-auto max-w-screen-2xl">

          <div className="grid gap-8 lg:grid-cols-2">

            {/* Email */}

            <div className="rounded-3xl border border-white/10 bg-[#0b0b0b] p-10">

              <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-blue-600/20 p-4">

                  <Mail className="h-8 w-8 text-blue-400" />

                </div>

                <div>

                  <h2 className="text-3xl font-bold">

                    Email Us

                  </h2>

                  <p className="mt-2 text-gray-400">

                    For support, feedback or business inquiries.

                  </p>

                </div>

              </div>

              <div className="h-2 bg-gray-1000" />

              <div className="mt-10 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">

                <p className="text-sm uppercase tracking-[3px] text-blue-300">

                  Email Address

                </p>

                <a
                  href="mailto:toolsnestx@gmail.com"
                  className="mt-4 block break-all text-2xl font-bold text-white hover:text-blue-400 transition"
                >
                  toolsnestx@gmail.com
                </a>

              </div>

              <p className="mt-8 leading-8 text-gray-400">

                Clicking the email address above will open your default email
                application, allowing you to contact us directly.

              </p>

            </div>

            {/* Response Time */}

            <div className="rounded-3xl border border-white/10 bg-[#0b0b0b] p-10">

              <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-blue-600/20 p-4">

                  <Clock3 className="h-8 w-8 text-blue-400" />

                </div>

                <div>

                  <h2 className="text-3xl font-bold">

                    Response Time

                  </h2>

                  <p className="mt-2 text-gray-400">

                    We reply as quickly as possible.

                  </p>

                </div>

              </div>

              <div className="h-2 bg-gray-1000" />

              <div className="mt-10 space-y-6">

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                  <h3 className="text-xl font-bold">

                    General Support

                  </h3>

                  <p className="mt-3 text-gray-400">

                    Usually within 24–48 hours.

                  </p>

                </div>

                <div className="h-2 bg-gray-1000" />

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                  <h3 className="text-xl font-bold">

                    Business Inquiries

                  </h3>

                  <p className="mt-3 text-gray-400">

                    We aim to respond within one business day.

                  </p>

                </div>

                <div className="h-2 bg-gray-1000" />

                <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">

                  <div className="flex items-center gap-3">

                    <ShieldCheck className="h-6 w-6 text-blue-400" />

                    <p className="font-semibold">

                      Your email is kept private and never shared.

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <div className="h-5 bg-black" />

      {/* ================= CONTACT REASONS ================= */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-blue-400">

              WHY CONTACT US

            </span>

            <h2 className="mt-6 text-4xl font-black">

              How Can We Help?

            </h2>

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Whether you're reporting an issue or sharing an idea, we'd love
              to hear from you.

            </p>

          </div>

          <div className="h-3 bg-black" />

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <MessageCircle className="h-12 w-12 text-blue-400" />

              <h3 className="mt-8 text-2xl font-bold">

                General Questions

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Need help using one of our tools? Have a question about
                ToolsNestX? Feel free to reach out anytime.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <Bug className="h-12 w-12 text-blue-400" />

              <h3 className="mt-8 text-2xl font-bold">

                Bug Reports

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Found something that isn't working correctly? Let us know and
                we'll investigate it as quickly as possible.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <Lightbulb className="h-12 w-12 text-blue-400" />

              <h3 className="mt-8 text-2xl font-bold">

                Feature Requests

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Have an idea for a new online tool or feature? We'd love to hear
                your suggestions.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <Briefcase className="h-12 w-12 text-blue-400" />

              <h3 className="mt-8 text-2xl font-bold">

                Business Inquiries

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                For partnerships, collaborations or business opportunities,
                contact us by email.

              </p>

            </div>

          </div>

        </div>

      </section>

      <div className="h-5 bg-black" />

      {/* ================= WHY CHOOSE TOOLSNESTX ================= */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-screen-2xl">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">

            <h2 className="text-4xl font-black">

              Why Contact ToolsNestX?

            </h2>

            <p className="mt-8 leading-8 text-gray-400">

              Our goal is to build simple, fast and secure online tools that
              help everyone work more efficiently. Your feedback helps us fix
              issues, improve existing tools and create new features that users
              actually need.

            </p>

            <p className="mt-6 leading-8 text-gray-400">

              Every suggestion, bug report and business inquiry is carefully
              reviewed. We appreciate every message we receive and always do our
              best to respond as quickly as possible.

            </p>

          </div>

        </div>

      </section>

      <div className="h-3 bg-black" />

      {/* ================= FAQ ================= */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-blue-400">

              FAQ

            </span>

            <h2 className="mt-6 text-4xl font-black">

              Frequently Asked Questions

            </h2>

          </div>

          <div className="h-3 bg-black" />

          <div className="mt-16 space-y-6">

            {[
              {
                q: "How can I contact ToolsNestX?",
                a: "Simply send an email to toolsnestx@gmail.com and we'll get back to you as soon as possible.",
              },
              {
                q: "How long does it take to receive a reply?",
                a: "Most emails receive a response within 24–48 hours.",
              },
              {
                q: "Can I request a new tool?",
                a: "Absolutely. We welcome ideas for new tools and features.",
              },
              {
                q: "Can I report bugs?",
                a: "Yes. If you find any issue while using our tools, please email us with as much detail as possible.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-500/30"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold">
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

       <div className="h-4 bg-black" />

            {/* ================= PRIVACY PROMISE ================= */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-screen-2xl">

          <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 via-[#0b0b0b] to-cyan-500/10 p-10">

            <div className="flex items-start gap-5">

              <ShieldCheck className="mt-1 h-10 w-10 text-blue-400" />

              <div>

                <h2 className="text-3xl font-black">

                  Your Privacy Matters

                </h2>

                <p className="mt-6 leading-8 text-gray-400">

                  Any email you send to ToolsNestX is used only to respond to
                  your inquiry. We never sell, rent or share your personal
                  information with third parties.

                </p>

                <p className="mt-4 leading-8 text-gray-400">

                  Whether you're reporting a bug, requesting a feature or asking
                  a question, your communication remains private and secure.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      <div className="h-4 bg-black" />

      {/* ================= CTA ================= */}

      <section className="px-6 pb-28">

        <div className="mx-auto max-w-screen-2xl">

          <div className="rounded-[40px] border border-blue-500/20 bg-gradient-to-br from-blue-600/15 via-[#0b0b0b] to-cyan-500/10 p-14 text-center">

            <h2 className="text-4xl font-black">

              Explore More Free Online Tools

            </h2>

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              ToolsNestX offers powerful browser-based tools for PDFs, Images,
              Text Utilities and Developers — all free, fast and privacy
              focused.

            </p>


          </div>

        </div>

      </section>

      <div className="h-5 bg-black" />

    </main>

  );
}