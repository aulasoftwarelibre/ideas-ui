import React from "react";

export interface Props {
  onClick?: () => void;
}

export const GradientButton: React.FunctionComponent<Props> = ({
  onClick,
  children,
}) => {
  return (
    <button
      className="bg-gradient-l-gorange hover:bg-none hover:bg-gray text-white font-bold py-4 px-10 text-sm rounded-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default GradientButton;
