import React, { ReactNode } from "react";

interface IButtonProps {
  color?: string;
  classNames?: string;
  title?: string;
}
const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
  const { classNames, color, title } = props;
  return (
    <button className={`text-white rounded-2xl px-6 py-1.5 bg-buttons btn ${classNames}`}>
      {title}
    </button>
  );
};

export default Button;

