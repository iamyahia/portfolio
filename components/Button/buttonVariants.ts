import { cva } from "class-variance-authority";

export const buttonVariants = cva("button", {
  variants: {
    variant: {
      peaches: "button--peaches",
      tangaroa: "button--tangaroa",
      outline: "button--outline",
    },
  },
  defaultVariants: {
    variant: "tangaroa",
  },
});
