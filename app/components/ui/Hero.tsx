import Button from "@/app/components/common/Button";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Smartphone,
  Zap,
  Heart,
} from "lucide-react";

const features = [
  {
    title: "Fast Processing",
    icon: Zap,
  },
  {
    title: "Secure",
    icon: ShieldCheck,
  },
  {
    title: "Mobile Friendly",
    icon: Smartphone,
  },
  {
    title: "Free Forever",
    icon: Heart,
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#030303] via-[#07111d] to-[#020202]" />

      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)]
          bg-[size:80px_80px]
          opacity-30
        "
      />

      {/* Glow (static, no animation) */}

      <div className="absolute left-1/2 top-44 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[90px]" />

      <div className="absolute -left-24 top-56 h-[100px] w-[100px] rounded-full bg-blue-500/15 blur-[60px]" />

      <div className="absolute -right-24 bottom-24 h-[340px] w-[340px] rounded-full bg-cyan-500/15 blur-[60px]" />

      <div className="absolute left-1/2 top-0 h-52 w-52 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[60px]" />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      {/* Content */}

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-screen-2xl flex-col items-center justify-center px-6 pt-24 pb-16 text-center">

        {/* Badge */}

        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-300 backdrop-blur-md sm:px-6 sm:text-sm">

          <Sparkles size={14} className="shrink-0" />

          30+ Professional Online Tools

        </div>

        {/* Heading */}

        <h1 className="mt-8 max-w-6xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl lg:text-[88px]">

          All Your

          <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">

            Online Tools

          </span>

          In One Place

        </h1>

        {/* Description */}

        <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-400 md:text-xl">
          Compress images, merge PDFs, format JSON, generate QR codes,
          convert files and use powerful online tools directly in your
          browser with no installation, no signup and completely free.
        </p>

        {/* Buttons */}

        <div className="mt-16 mb-4 flex flex-wrap justify-center gap-5">

          <Button href="#tools">
            Explore Tools
            <ArrowRight size={20} />
          </Button>

          <Button href="/about" variant="secondary">
            Learn More
            <ArrowRight size={20} />
          </Button>

        </div>

        <div className="h-6" />

        {/* Feature Pills */}

        <div className="flex flex-wrap items-center justify-center gap-4 pt-12">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3"
              >
                <Icon size={18} className="text-blue-400" />

                <span className="text-sm font-medium text-gray-300">
                  {feature.title}
                </span>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}