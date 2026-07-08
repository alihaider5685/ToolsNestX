import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)] ${className}`}
    >
      {children}
    </div>
  );
}