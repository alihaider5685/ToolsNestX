const stats = [
  {
    value: "28+",
    label: "Online Tools",
    color: "text-blue-400",
    border: "hover:border-blue-500/40",
    shadow: "hover:shadow-[0_0_35px_rgba(59,130,246,.18)]",
  },
  {
    value: "100%",
    label: "Free Access",
    color: "text-green-400",
    border: "hover:border-green-500/40",
    shadow: "hover:shadow-[0_0_35px_rgba(34,197,94,.18)]",
  },
  {
    value: "0",
    label: "Signups Needed",
    color: "text-cyan-400",
    border: "hover:border-cyan-500/40",
    shadow: "hover:shadow-[0_0_35px_rgba(6,182,212,.18)]",
  },
  {
    value: "24/7",
    label: "Availability",
    color: "text-purple-400",
    border: "hover:border-purple-500/40",
    shadow: "hover:shadow-[0_0_35px_rgba(168,85,247,.18)]",
  },
];

export default function HeroStats() {
  return (
    <section className="relative z-20 -mt-10 px-6 pb-24">
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.label}
              className={`group rounded-3xl border border-white/10 bg-gradient-to-b from-[#171717] to-[#0d0d0d] p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 ${item.border} ${item.shadow}`}
            >
              <h3 className={`text-4xl font-black ${item.color}`}>
                {item.value}
              </h3>

              <p className="mt-3 text-sm text-gray-400">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}