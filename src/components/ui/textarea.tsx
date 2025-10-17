import * as React from "react";

import { cn } from "./utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "resize-none border-input placeholder:text-muted-foreground dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-input-background px-3 py-2 text-base transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-[var(--color-brand-primary)] focus-visible:shadow-[inset_0_0_0_1px_var(--color-brand-primary),0_0_0_3px_rgba(0,159,218,0.15)]",
        "aria-invalid:border-[var(--destructive)] aria-invalid:shadow-[inset_0_0_0_1px_var(--destructive),0_0_0_3px_rgba(217,45,32,0.15)]",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
