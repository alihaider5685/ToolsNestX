import { Loader2 } from "lucide-react";
import Button from "./Button";

type ToolButtonProps = {
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

export default function ToolButton({
  children,
  loading = false,
  disabled = false,
  onClick,
  className = "",
}: ToolButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled || loading}
      className={`min-w-[170px] ${className}`}
    >
      {loading ? (
        <>
          <Loader2
            size={18}
            className="animate-spin"
          />
          Processing...
        </>
      ) : (
        children
      )}
    </Button>
  );
}