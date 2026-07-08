import Link from "next/link";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({
  children,
  variant = "primary",
  href,
  icon,
  type = "button",
  disabled = false,
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "group inline-flex h-10 items-center justify-center gap-2 rounded-xl px-6 text-[15px] font-semibold transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-blue-500/30 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary:
      "border border-blue-500/20 bg-gradient-to-b from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/30",

    secondary:
      "border border-white/10 bg-white/[0.03] text-white backdrop-blur-xl hover:border-white/20 hover:bg-white/[0.06]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

 const content = (
  <div className="flex items-center gap-2">
    {children}

    {icon && (
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        {icon}
      </span>
    )}
  </div>
);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  );
}