import { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";
import { type VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva("button", {
  variants: {
    variant: {
      peaches: "button--peaches",
      tangaroa: "button--tangaroa",
      outline: "button--outline",
    },
    /** Defines the size of the button */
    // size: {
    //   default: "px-5 py-2.5",
    //   sm: "px-3 py-2 text-2xs gap-2",
    //   lg: "px-6 py-4 text-base gap-4",
    //   expand: "py-2.5 w-full",
    //   "square-sm": "p-2 text-2xs gap-2",
    //   "square-md": "p-2.5",
    //   "square-lg": "p-4 text-base gap-4",
    // },
  },
  defaultVariants: {
    variant: "tangaroa",
    // size: "default",
  },
});

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    children: ReactNode;
    isLoading?: boolean;
    startElement?: ReactElement;
    endElement?: ReactElement;
  };

const Button = ({
  variant,
  children,
  className,
  endElement,
  startElement,
  isLoading = false,
  ...props
}: ButtonProps) => {
  return (
    <button className={buttonVariants({ variant, className })} {...props}>
      {isLoading ? (
        // <Spinner className="animate-spin h-[calc(1em+4px)]" />
        <span>Loading...</span>
      ) : (
        <>
          {startElement}
          {children}
          {endElement}
        </>
      )}
    </button>
  );
};

export { Button };
