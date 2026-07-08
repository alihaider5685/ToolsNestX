import Link from "next/link";
import Button from "@/app/components/common/Button";
import { ArrowRight } from "lucide-react";
import {
  Mail,
  Clock3,
  Globe,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Contact Us | ToolsNestX",
  description:
    "Get in touch with the ToolsNestX team. We're always happy to answer your questions, receive feedback, and provide support.",
};

export default function ContactPage() {
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

        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[180px]" />

      </div>

      {/* ================= HERO ================= */}

      <section className="relative">

        <div className="mx-auto flex min-h-[90vh] max-w-screen-2xl flex-col items-center justify-center px-6 pt-28 pb-20 text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-2 text-sm font-semibold text-blue-300 backdrop-blur-xl">

            <Sparkles size={16} />

            We'd Love To Hear From You

          </div>

          <h1 className="mt-10 max-w-6xl text-5xl font-black leading-tight md:text-7xl lg:text-8xl">

            Contact{" "}

            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">

              ToolsNestX

            </span>

          </h1>

          <p className="mx-auto mt-10 max-w-4xl text-xl leading-10 text-gray-400">

            Whether you have questions, suggestions, business inquiries or
            need support with one of our online tools, we're always ready
            to help. Our goal is to provide fast responses and the best
            possible experience for every visitor.

          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-5">
  <Button
    href="/"
    icon={<ArrowRight size={16} />}
  >
    Explore Tools
  </Button>

  <Button
    href="#contact-form"
    variant="secondary"
  >
    Send Message
  </Button>
</div>

        </div>

      </section>

      {/* ================= CONTACT INFO ================= */}

      <section className="px-6 pb-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500">

              <Mail
                size={46}
                className="mx-auto mb-6 text-blue-400"
              />

              <h3 className="text-3xl font-bold">

                Email Support

              </h3>

              <p className="mt-6 text-lg leading-9 text-gray-400">

                support@ToolsNestX.com

              </p>

            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500">

              <Clock3
                size={46}
                className="mx-auto mb-6 text-cyan-400"
              />

              <h3 className="text-3xl font-bold">

                Fast Response

              </h3>

              <p className="mt-6 text-lg leading-9 text-gray-400">

                Most emails are answered within
                24 hours.

              </p>

            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500">

              <Globe
                size={46}
                className="mx-auto mb-6 text-blue-400"
              />

              <h3 className="text-3xl font-bold">

                Worldwide Access

              </h3>

              <p className="mt-6 text-lg leading-9 text-gray-400">

                ToolsNestX is available
                anytime, anywhere.

              </p>

            </div>

          </div>

        </div>

      </section>
            {/* ================= CONTACT FORM ================= */}

      <section id="contact-form" className="px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-2">

            {/* ================= LEFT ================= */}

            <div>

              <p className="mb-5 text-sm font-bold uppercase tracking-[8px] text-blue-500">
                SEND MESSAGE
              </p>

              <h2 className="text-5xl font-black leading-tight md:text-6xl">

                Let's Start A{" "}

                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">

                  Conversation

                </span>

              </h2>

              <p className="mt-8 text-xl leading-10 text-gray-400">

                We'd love to hear your ideas, suggestions or feedback.
                If you've found a bug, have a feature request or simply
                want to say hello, feel free to contact us.

              </p>

              <div className="mt-12 space-y-8">

                <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                  <h3 className="text-2xl font-bold">

                    General Support

                  </h3>

                  <p className="mt-4 text-lg leading-9 text-gray-400">

                    Need help using ToolsNestX tools?
                    We'll gladly guide you.

                  </p>

                </div>

                <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                  <h3 className="text-2xl font-bold">

                    Business Inquiries

                  </h3>

                  <p className="mt-4 text-lg leading-9 text-gray-400">

                    Interested in partnerships,
                    collaborations or advertising?
                    We'd love to connect.

                  </p>

                </div>

                <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                  <h3 className="text-2xl font-bold">

                    Feature Requests

                  </h3>

                  <p className="mt-4 text-lg leading-9 text-gray-400">

                    Have an idea for a new tool?
                    Tell us and we'll consider adding it.

                  </p>

                </div>

              </div>

            </div>

            {/* ================= RIGHT ================= */}

            <div className="rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

              <h3 className="text-3xl font-black">

                Send Us A Message

              </h3>

              <p className="mt-5 text-lg leading-8 text-gray-400">

                Fill out the form below and we'll get back to you
                as soon as possible.

              </p>

              <form className="mt-10 space-y-6">

                <div>

                  <label className="mb-3 block font-medium text-gray-300">

                    Full Name

                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition focus:border-blue-500"
                  />

                </div>

                <div>

                  <label className="mb-3 block font-medium text-gray-300">

                    Email Address

                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition focus:border-blue-500"
                  />

                </div>

                <div>

                  <label className="mb-3 block font-medium text-gray-300">

                    Subject

                  </label>

                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition focus:border-blue-500"
                  />

                </div>

                <div>

                  <label className="mb-3 block font-medium text-gray-300">

                    Message

                  </label>

                  <textarea
                    rows={6}
                    placeholder="Write your message..."
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition focus:border-blue-500"
                  />

                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-[1.02]"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>
            {/* ================= FAQ ================= */}

      <section className="px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-4xl text-center">

            <p className="mb-5 text-sm font-bold uppercase tracking-[8px] text-blue-500">
              QUICK ANSWERS
            </p>

            <h2 className="text-5xl font-black leading-tight md:text-6xl">

              Frequently Asked{" "}

              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">

                Questions

              </span>

            </h2>

          </div>

          <div className="mx-auto mt-16 max-w-5xl space-y-8">

            <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <h3 className="text-2xl font-bold">

                How quickly will I receive a reply?

              </h3>

              <p className="mt-5 text-lg leading-9 text-gray-400">

                We usually respond within 24 hours, although response times
                may vary during weekends or holidays.

              </p>

            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <h3 className="text-2xl font-bold">

                Can I request a new online tool?

              </h3>

              <p className="mt-5 text-lg leading-9 text-gray-400">

                Absolutely. We always welcome suggestions for new tools and
                improvements that can help our users.

              </p>

            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <h3 className="text-2xl font-bold">

                Do you provide business support?

              </h3>

              <p className="mt-5 text-lg leading-9 text-gray-400">

                Yes. We are happy to discuss partnerships, collaborations
                and other business opportunities.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="px-6 pb-32">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-[42px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-14 text-center md:p-20">

            <h2 className="text-4xl font-black text-white md:text-6xl">

              We're Always Ready To Help

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-10 text-blue-100">

              Whether you have questions, feedback, feature ideas or need
              technical support, the ToolsNestX team is only one message away.

            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <a
                href="mailto:support@ToolsNestX.com"
                className="rounded-2xl bg-white px-8 py-4 text-lg font-bold text-blue-700 transition-all duration-300 hover:scale-105"
              >
                Email Support
              </a>

              <Link
                href="/"
                className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
              >
                Back To Home
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}