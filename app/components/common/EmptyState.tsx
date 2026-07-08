import { FileSearch } from "lucide-react";
import React from "react";

type EmptyStateProps = {
  title?: string;
  description?: string;
  className?: string;
};

export default function EmptyState({
  title = "Nothing to Display",
  description = "Your generated result will appear here once you start using the tool.",
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={`flex min-h-[260px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/[0.03] px-8 py-12 text-center ${className}`}
    >
      <div className="mb-6 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">
        <FileSearch className="h-10 w-10 text-blue-400" />
      </div>

      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-4 max-w-lg leading-8 text-gray-400">
        {description}
      </p>
    </div>
  );
}