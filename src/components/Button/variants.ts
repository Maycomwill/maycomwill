import { cva } from "class-variance-authority";

export const baseButtonVariants = cva(
  "font-medium text-center relative whitespace-nowrap align-middle outline-none inline-flex items-center justify-center",
  {
    variants: {
      size: {
        xs: "text-xs h-6 min-w-6 px-2",
        sm: "text-sm h-8 min-w-8 px-4",
        md: "text-base h-10 min-w-10 px-6",
        lg: "text-lg h-12 min-w-12 px-8",
        xl: "text-xl h-14 min-w-14 px-10",
      },
      rounded: {
        none: "rounded-none",
        md: "rounded-md",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      size: "md",
      rounded: "md",
    },
  },
);

const solidVariants = cva("", {
  variants: {
    variant: {
      default:
        "bg-slate-700 text-zinc-100 hover:bg-slate-600 dark:bg-slate-700 dark:text-zinc-100 dark:hover:bg-slate-600 transition-colors duration-150",
      secondary:
        "bg-gray-500 text-zinc-100 hover:bg-gray-400 dark:bg-gray-500 dark:text-zinc-100 dark:hover:bg-gray-400 transition-colors duration-150",
      delete:
        "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600 transition-colors duration-150",
    },
  },
});

const outlineVariants = cva("border-2", {
  variants: {
    variant: {
      default:
        "text-zinc-900 hover:bg-zinc-200 border-zinc-900 hover:text-[#acf100] hover:border-[#acf100] dark:text-white dark:hover:bg-zinc-200 dark:border-white dark:hover:bg-white/20",
      delete: "text-red-500 hover:bg-red-400/20 border-red-500",
    },
  },
});

const subtleVariants = cva("", {
  variants: {
    variant: {
      default:
        "text-zinc-900 bg-zinc-200 hover:bg-zinc-300 hover:text-[#acf100] border-zinc-900 dark:text-white dark:hover:bg-zinc-200 dark:border-white dark:bg-white/20 dark:hover:bg-white/30",
      delete: "text-red-500 bg-red-400/20 hover:bg-red-400/30 border-red-500",
    },
  },
});

const ghostVariants = cva("", {
  variants: {
    variant: {
      default:
        "text-zinc-900 border-zinc-900 hover:text-[#acf100] dark:text-white dark:hover:text-[#acf100] dark:hover:bg-zinc-200 dark:border-white dark:hover:bg-white/20",
      delete: "text-red-500 hover:bg-red-400/20 border-red-500",
      active:
        "text-zinc-900 hover:bg-zinc-200 border-zinc-900 hover:text-[#acf100] dark:text-[#acf100] dark:bg-white/20 dark:hover:bg-zinc-200 dark:border-white dark:hover:bg-white/20",
    },
  },
});

const plainVariants = cva("", {
  variants: {
    variant: {
      default:
        "text-zinc-900 dark:text-zinc-100 border-b-2 border-zinc-900 hover:text-[#acf100] hover:border-b-2 hover:border-[#acf100] rounded-none transition ease-in-out",
      active:
        "text-zinc-900 dark:text-zinc-100 hover:text-[#acf100] border-b-2 border-[#acf100] rounded-none transition ease-in-out",
      delete: "text-red-500 hover:bg-red-400/20 border-red-500",
    },
  },
});

export const buttonVariants = cva("...", {
  variants: {
    variant: {
      // ...
      solid: solidVariants({ variant: "default" }),
      "solid-secondary": solidVariants({ variant: "secondary" }),
      "solid-delete": solidVariants({ variant: "delete" }),
      outline: outlineVariants({ variant: "default" }),
      "outline-delete": outlineVariants({ variant: "delete" }),
      ghost: ghostVariants({ variant: "default" }),
      "ghost-delete": ghostVariants({ variant: "delete" }),
      "ghost-active": ghostVariants({ variant: "active" }),
      subtle: subtleVariants({ variant: "default" }),
      "subtle-delete": subtleVariants({ variant: "delete" }),
      plain: plainVariants({ variant: "default" }),
      "plain-active": plainVariants({ variant: "active" }),
      "plain-delete": plainVariants({ variant: "delete" }),

      // ...
    },
  },
});
