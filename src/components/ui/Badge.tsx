type BadgeVariant = "teal" | "light";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  teal: "bg-primary-teal text-white",
  light: "bg-light-teal text-primary-teal",
};

export default function Badge({
  children,
  variant = "light",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
