import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const Button = ({ children, ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};

export { Button };
