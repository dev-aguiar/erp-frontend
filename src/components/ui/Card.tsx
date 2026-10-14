import { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	title?: string;
	description?: string;
	action?: ReactNode;
	children: ReactNode;
}

export const Card = ({
											 title,
											 description,
											 action,
											 className,
											 children,
											 ...props
										 }: CardProps) => {
	const hasHeader = title || description || action;

	return (
		<div
			className={cn(
				"rounded-xl border border-slate-200 bg-white shadow-sm",
				className
			)}
			{...props}
		>
			{hasHeader && (
				<div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
					<div>
						{title && (
							<h3 className="text-sm font-semibold text-slate-900">{title}</h3>
						)}
						{description && (
							<p className="mt-0.5 text-xs text-slate-500">{description}</p>
						)}
					</div>
					{action}
				</div>
			)}
			<div className="p-5">{children}</div>
		</div>
	);
};
