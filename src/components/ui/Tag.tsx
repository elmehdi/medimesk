type TagVariant = "default" | "active";

interface TagProps {
  children: React.ReactNode;
  variant?: TagVariant;
  className?: string;
  onClick?: () => void;
}

const variantStyles: Record<TagVariant, string> = {
  default:
    "border border-light-teal text-dark-text/70 hover:border-primary-teal hover:text-primary-teal",
  active: "bg-primary-teal text-white border border-primary-teal",
};

export default function Tag({
  children,
  variant = "default",
  className = "",
  onClick,
}: TagProps) {
  const Component = onClick ? "button" : "span";

  return (
    <Component
      onClick={onClick}
      className={`inline-block rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Component>
  );
}
