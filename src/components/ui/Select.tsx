import { SelectHTMLAttributes, forwardRef } from "react";
import { cn } from "../../utils/cn";

export type SelectOption = string | { value: string; label: string };

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, placeholder, id, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            {label}
          </label>
        )}
        <select
          id={id}
          ref={ref}
          className={cn(
            "w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2",
            error
              ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
              : "border-slate-300 focus:border-indigo-500 focus:ring-indigo-500/20",
            className
          )}
          {...props}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => {
            const opt =
              typeof option === "string"
                ? { value: option, label: option }
                : option;
            return (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            );
          })}
        </select>
        {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";