import {
  ShieldCheck,
  Zap,
  Globe,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: <Zap size={38} />,
    title: "Lightning Fast",
    desc: "Experience blazing-fast online tools with instant processing and smooth performance.",
  },
  {
    icon: <ShieldCheck size={38} />,
    title: "Secure & Private",
    desc: "Your files are processed securely and never stored permanently on our servers.",
  },
  {
    icon: <Globe size={38} />,
    title: "Works Everywhere",
    desc: "Access FileNestX from desktop, tablet and mobile without installing anything.",
  },
  {
    icon: <BadgeCheck size={38} />,
    title: "100% Free",
    desc: "No registration, no subscriptions and no hidden costs. Completely free forever.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-black py-32">
      <div className="mx-auto w-full px-8 2xl:px-16">
       

        {/* Heading */}

         <div className="mb-20 flex w-full flex-col items-center justify-center text-center">

          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Why Choose FileNestX?
          </h2>

          <p className="mt-8 max-w-3xl text-center text-lg leading-9 text-gray-400">
            FileNestX provides fast, secure and completely free online tools for
            PDFs, Images, Text Utilities and Developers — all accessible from
            any browser without installation or registration.
          </p>

        </div>

        {/* Feature Cards */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-3xl border border-white/10 bg-gradient-to-b from-[#181818] to-[#101010] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,.18)]"
            >

              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="mt-5 text-[17px] leading-8 text-gray-400">
                {feature.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}