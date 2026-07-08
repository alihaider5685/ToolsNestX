import React from "react";

type SectionTitleProps = {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionTitle({
  badge,
  title,
  description,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`text-center ${className}`}>
      {badge && (
        <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400">
          {badge}
        </span>
      )}

      <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}