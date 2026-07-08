import React from "react";

type LoadingSpinnerProps = {
  size?: number;
  className?: string;
};

export default function LoadingSpinner({
  size = 24,
  className = "",
}: LoadingSpinnerProps) {
  return (
    <div
      className={`inline-block animate-spin rounded-full border-2 border-white/20 border-t-blue-500 ${className}`}
      style={{
        width: size,
        height: size,
      }}
    />
  );
}