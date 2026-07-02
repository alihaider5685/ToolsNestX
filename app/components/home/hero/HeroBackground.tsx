export default function HeroBackground() {
  return (
    <>
      {/* Main Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Center Glow */}
      <div className="absolute left-1/2 top-40 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[180px]" />

      {/* Top Glow */}
      <div className="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* Left Glow */}
      <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-blue-500/10 blur-[150px]" />

      {/* Right Glow */}
      <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]" />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[160px]" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
    </>
  );
}