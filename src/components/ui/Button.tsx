import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "link";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

interface ButtonAsButton
  extends ButtonBaseProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> {
  href?: never;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
}

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-cta-yellow text-dark-text font-semibold px-6 py-3 rounded-lg hover:brightness-95 transition-all inline-flex items-center justify-center",
  secondary:
    "border-2 border-primary-teal text-primary-teal font-semibold px-6 py-3 rounded-lg hover:bg-primary-teal hover:text-white transition-all inline-flex items-center justify-center",
  link: "text-primary-teal font-medium hover:underline underline-offset-4 transition-all inline-flex items-center gap-1.5 group",
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const styles = `${variantStyles[variant]} ${className}`;

  // Arrow icon for link variant
  const arrow = variant === "link" && (
    <svg
      className="w-4 h-4 transition-transform group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={styles} {...rest}>
        {children}
        {arrow}
      </Link>
    );
  }

  const { ...buttonProps } = props as ButtonAsButton;
  return (
    <button className={styles} {...buttonProps}>
      {children}
      {arrow}
    </button>
  );
}
