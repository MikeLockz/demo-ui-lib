import React from "react";

export interface ButtonProps {
  selected?: boolean;
  children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  return <button>{props.children}</button>;
};

export default Button;
