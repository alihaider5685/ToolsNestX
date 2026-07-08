import { Copy, Check } from "lucide-react";
import { useState } from "react";
import Button from "./Button";

type CopyButtonProps = {
  text: string;
  className?: string;
};

export default function CopyButton({
  text,
  className = "",
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <Button
      variant="secondary"
      onClick={handleCopy}
      className={className}
    >
      {copied ? (
        <>
          <Check size={18} />
          Copied
        </>
      ) : (
        <>
          <Copy size={18} />
          Copy
        </>
      )}
    </Button>
  );
}