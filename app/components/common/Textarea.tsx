import React, { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({
  className = "",
  ...props
}: TextareaProps) {
  return (
    <textarea
      {...props}
      className={`min-h-40 w-full resize-y rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white placeholder:text-gray-400 backdrop-blur-xl transition-all duration-300 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    />
  );
}