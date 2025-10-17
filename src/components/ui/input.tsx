import * as React from "react";

import { cn } from "./utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-[var(--color-brand-primary)] focus-visible:shadow-[inset_0_0_0_1px_var(--color-brand-primary),0_0_0_3px_rgba(0,159,218,0.15)]",
        "aria-invalid:border-[var(--destructive)] aria-invalid:shadow-[inset_0_0_0_1px_var(--destructive),0_0_0_3px_rgba(217,45,32,0.15)]",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
