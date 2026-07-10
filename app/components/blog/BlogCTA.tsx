import Button from "@/app/components/common/Button";
import { ArrowRight, Sparkles } from "lucide-react";

type Props = {
  toolUrl: string;
};

export default function BlogCTA({ toolUrl }: Props) {
  return (
    <section className="mt-24">

      <div className="relative overflow-hidden rounded-[36px] border border-blue-500/20 bg-gradient-to-br from-blue-600/15 via-cyan-500/10 to-blue-700/15 p-10 md:p-16">

        {/* Background Glow */}

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />

        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative z-10 text-center">

          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-400">

            <Sparkles size={16} />

            Free Online Tool

          </div>

          {/* Heading */}

          <h2 className="mt-8 text-4xl font-black md:text-5xl">

            Ready To Get Started?

          </h2>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-8xl text-lg leading-9 text-gray-300">

            Use our free online tool to complete your task in seconds.
            No installation, no registration and no hidden fees.

          </p>

          {/* Button */}

          <div className="mt-12 flex justify-center">

            <Button
              href={toolUrl}
              icon={<ArrowRight size={18} />}
            >
              Open Tool
            </Button>

          </div>

        </div>

      </div>

      <div className="h-3 bg-black" />

    </section>
  );
}