import { cva } from "class-variance-authority";

export const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-black transition-all duration-300 hover:bg-blue-900/20 hover:text-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-blue-600 data-[state=on]:text-white",
  {
    variants: {
      variant: {
        default: "bg-black text-blue-200",
        outline: "border border-blue-900 bg-transparent hover:bg-blue-900/30 hover:text-blue-300",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);