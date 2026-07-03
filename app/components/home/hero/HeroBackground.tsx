export default function HeroBackground() {
  return (
    <>
      {/* Main Background */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#05070f] via-[#07101d] to-[#051218]" />

        {/* Grid */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
            bg-[size:88px_88px]
            opacity-40
          "
        />

        {/* Center Glow */}
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[170px]" />

        {/* Left Glow */}
        <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-blue-500/15 blur-[140px]" />

        {/* Right Glow */}
        <div className="absolute -right-32 bottom-28 h-80 w-80 rounded-full bg-cyan-500/15 blur-[140px]" />

        {/* Top Glow */}
        <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[150px]" />

        {/* Left Floating Glass */}
        <div className="absolute left-16 top-72 hidden h-28 w-28 rotate-12 rounded-3xl border border-white/5 bg-white/[0.03] backdrop-blur-xl xl:block" />

        {/* Right Floating Glass */}
        <div className="absolute right-20 top-[340px] hidden h-24 w-24 -rotate-12 rounded-3xl border border-white/5 bg-white/[0.03] backdrop-blur-xl xl:block" />

        {/* Bottom Left Light */}
        <div className="absolute bottom-32 left-24 h-44 w-44 rounded-full bg-blue-500/10 blur-[90px]" />

        {/* Bottom Right Light */}
        <div className="absolute bottom-24 right-24 h-52 w-52 rounded-full bg-cyan-400/10 blur-[110px]" />

        {/* Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:22px_22px]" />

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      </div>
    </>
  );
}