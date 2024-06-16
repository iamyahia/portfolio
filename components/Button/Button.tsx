import { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";
import { type VariantProps, cva } from "class-variance-authority";

import { buttonVariants } from "./buttonVariants";

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
