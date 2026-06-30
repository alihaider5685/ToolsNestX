import {
  ShieldCheck,
  Zap,
  Globe,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: <Zap size={40} />,
    title: "Lightning Fast",
    desc: "Use powerful online tools with instant results and a smooth experience.",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Secure & Private",
    desc: "Your privacy matters. Files and data are processed securely.",
  },
  {
    icon: <Globe size={40} />,
    title: "Works Everywhere",
    desc: "Access FileNestX on desktop, tablet and mobile devices.",
  },
  {
    icon: <BadgeCheck size={40} />,
    title: "Free Forever",
    desc: "No signup required. No hidden charges. Completely free to use.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#080808] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-bold text-white md:text-5xl">
          Why Choose FileNestX?
        </h2>

        <p className="mx-auto mt-4 mb-16 max-w-3xl text-center text-lg text-gray-400">
          Free online tools for PDF, Images, Text and Developers.
          Fast, secure and easy to use directly in your browser.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-800 bg-[#111] p-8 transition duration-300 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(37,99,235,0.2)]"
            >
              <div className="text-blue-500">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

