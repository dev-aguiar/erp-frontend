import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

type Variant = "primary" | "secondary" | "danger" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: Variant;
	size?: Size;
	isLoading?: boolean;
	fullWidth?: boolean;
	children: ReactNode;
}

const variants: Record<Variant, string> = {
	primary:
		"bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500/40",
	secondary:
		"border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 focus:ring-slate-400/30",
	danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500/40",
	ghost:
		"bg-transparent text-slate-600 hover:bg-slate-100 focus:ring-slate-400/30",
};

const sizes: Record<Size, string> = {
	sm: "px-3 py-1.5 text-xs",
	md: "px-4 py-2.5 text-sm",
	lg: "px-5 py-3 text-base",
};

export const Button = ({
												 variant = "primary",
												 size = "md",
												 isLoading = false,
												 fullWidth = false,
												 className,
												 disabled,
												 children,
												 ...props
											 }: ButtonProps) => {
	return (
		<button
			className={cn(
				"inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-60",
				variants[variant],
				sizes[size],
				fullWidth && "w-full",
				className
			)}
			disabled={disabled || isLoading}
			{...props}
		>
			{isLoading ? "Carregando..." : children}
		</button>
	);
};
